require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
// const session = require('express-session');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  db.query('SELECT "productId", "name", "price", "image", "shortDescription" FROM products')
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const userInput = [req.params.productId];

  if (userInput <= 0) {
    return res.status(400).send({
      error: `ProductID ${userInput} is an invalid ID`
    });
  } else {
    db.query('SELECT * FROM "products" WHERE "productId" = $1', userInput)
      .then(result => {
        const id = result.rows[0];
        if (!id) {
          next(new ClientError(`Cannot find product with ProductID ${userInput}`, 404));
        } else {
          res.status(200).json(id);
        }
      })
      .catch(err => {
        next(err);
      });
  }
});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) {
    res.json([]);
  } else {
    const cartItemDataSQL = `select "c"."cartItemId",
        "c"."price",
        "p"."productId",
        "p"."image",
        "p"."name",
        "p"."shortDescription"
        from "cartItems" as "c"
        join "products" as "p" using ("productId")
        where "c"."cartItemId" = $1`;

    return (db.query(cartItemDataSQL, [req.session.cartId]))
      .then(cartItem => {
        res.json(cartItem.rows[0]);
      })
      .catch(error => next(error));
  }
});

app.post('/api/cart', (req, res, next) => {
  const userInput = parseInt([req.body.productId]);

  if (userInput > 0) {
    db.query('SELECT "price" FROM "products" WHERE "productId" = $1', [userInput])
      .then(priceResult => {
        if (!priceResult.rows[0]) {
          throw new ClientError('ProductId given does not have a price.', 400);
        }

        const cartSQL = `INSERT INTO "carts" ("cartId", "createdAt")
        VALUES (default, default)
        RETURNING "cartId"`;

        if (!req.session.cartId) {
          return db.query(cartSQL)
            .then(cartInfo => {
              return ({
                cartId: cartInfo.rows[0].cartId,
                productPrice: priceResult.rows[0].price
              });
            });
        } else {
          return ({
            cartId: req.session.cartId,
            productPrice: priceResult.rows[0].price
          });
        }
      })
      .then(result => {
        req.session.cartId = result.cartId;

        const cartItemsSQL = `insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
        returning "cartItemId"`;

        return (db.query(cartItemsSQL, [req.session.cartId, userInput, result.productPrice]));

      })
      .then(cartItemData => {
        const cartItemDataSQL = `select "c"."cartItemId",
        "c"."price",
        "p"."productId",
        "p"."image",
        "p"."name",
        "p"."shortDescription"
        from "cartItems" as "c"
        join "products" as "p" using ("productId")
        where "c"."cartItemId" = $1`;

        return (db.query(cartItemDataSQL, [cartItemData.rows[0].cartItemId]))
          .then(cartItem => {
            res.status(201).json(cartItem.rows[0]);
          });
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.status(400).send('ProductId cannot be less than 0.');
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
