require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

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
  res.json([]);
});

app.post('/api/cart', (req, res, next) => {
  const userInput = [req.body.productId];

  if (userInput > 0) {
    db.query('SELECT "price" FROM "products" WHERE "productId" = $1', userInput)
      .then(result => {
        if (!result.rows[0]) {
          res.status(400).send('ProductId given does not have a price.');
        }
        res.json(result);
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
