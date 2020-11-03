--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
2	43	1	2999
3	43	1	2999
4	43	1	2999
5	43	1	2999
6	43	1	2999
7	44	2	2595
8	45	1	2999
9	46	1	2999
10	46	1	2999
11	46	1	2999
12	46	1	2999
13	46	1	2999
14	46	1	2999
15	46	1	2999
16	46	1	2999
17	46	1	2999
18	46	1	2999
19	46	1	2999
20	46	1	2999
21	46	1	2999
22	46	1	2999
23	46	1	2999
24	46	1	2999
25	46	1	2999
26	46	1	2999
27	46	1	2999
28	46	1	2999
29	46	1	2999
30	46	1	2999
31	46	1	2999
32	46	1	2999
33	46	1	2999
34	46	1	2999
35	46	1	2999
36	46	1	2999
37	46	1	2999
38	46	1	2999
39	46	1	2999
40	46	1	2999
41	46	1	2999
42	46	1	2999
43	46	1	2999
44	46	1	2999
45	46	1	2999
46	46	1	2999
47	46	1	2999
48	46	1	2999
49	46	1	2999
50	46	1	2999
51	46	1	2999
52	46	1	2999
53	46	1	2999
54	46	1	2999
55	46	1	2999
56	46	1	2999
57	46	1	2999
58	46	1	2999
59	46	1	2999
60	46	1	2999
61	46	1	2999
62	46	1	2999
63	46	1	2999
64	46	1	2999
65	46	1	2999
66	46	1	2999
67	46	1	2999
68	46	1	2999
69	46	1	2999
70	46	1	2999
71	46	1	2999
72	46	1	2999
73	46	1	2999
74	46	1	2999
75	46	1	2999
76	46	1	2999
77	46	1	2999
78	46	1	2999
79	46	1	2999
80	46	1	2999
81	46	1	2999
82	46	1	2999
83	46	1	2999
84	46	1	2999
85	46	1	2999
86	46	1	2999
87	46	1	2999
88	46	1	2999
89	46	1	2999
90	46	1	2999
91	46	1	2999
92	46	1	2999
93	46	1	2999
94	46	1	2999
95	46	1	2999
96	46	1	2999
97	46	1	2999
98	46	1	2999
99	46	1	2999
100	46	1	2999
101	46	1	2999
102	46	1	2999
103	46	1	2999
104	46	1	2999
105	46	1	2999
106	46	1	2999
107	46	1	2999
108	46	1	2999
109	46	1	2999
110	46	1	2999
111	46	1	2999
112	46	1	2999
113	46	1	2999
114	46	1	2999
115	46	1	2999
116	46	1	2999
117	46	1	2999
118	46	1	2999
119	46	1	2999
120	46	1	2999
121	46	1	2999
122	46	1	2999
123	46	1	2999
124	46	1	2999
125	46	1	2999
126	46	1	2999
127	46	1	2999
128	46	1	2999
129	46	1	2999
130	46	1	2999
131	46	1	2999
132	46	1	2999
133	46	1	2999
134	46	1	2999
135	46	1	2999
136	46	1	2999
137	46	1	2999
138	46	1	2999
139	46	1	2999
140	46	1	2999
141	46	1	2999
142	46	1	2999
143	46	1	2999
144	46	1	2999
145	46	1	2999
146	46	1	2999
147	46	1	2999
148	46	1	2999
149	46	1	2999
150	46	1	2999
151	46	1	2999
152	46	1	2999
153	46	1	2999
154	46	1	2999
155	46	1	2999
156	46	1	2999
157	46	1	2999
158	46	1	2999
159	46	1	2999
160	46	1	2999
161	46	1	2999
162	46	1	2999
163	46	1	2999
164	46	1	2999
165	46	1	2999
166	46	1	2999
167	46	1	2999
168	46	1	2999
169	46	1	2999
170	46	1	2999
171	46	1	2999
172	46	1	2999
173	46	1	2999
174	46	1	2999
175	46	1	2999
176	46	1	2999
177	46	1	2999
178	46	1	2999
179	46	1	2999
180	46	1	2999
181	46	1	2999
182	46	1	2999
183	46	1	2999
184	46	1	2999
185	46	1	2999
186	46	1	2999
187	46	1	2999
188	46	1	2999
189	46	1	2999
190	46	1	2999
191	46	1	2999
192	46	1	2999
193	46	1	2999
194	46	1	2999
195	46	1	2999
196	46	1	2999
197	46	1	2999
198	46	1	2999
199	46	1	2999
200	46	1	2999
201	46	1	2999
202	46	1	2999
203	46	1	2999
204	46	1	2999
205	46	1	2999
206	46	1	2999
207	46	1	2999
208	46	1	2999
209	46	1	2999
210	46	1	2999
211	46	1	2999
212	46	1	2999
213	46	1	2999
214	46	1	2999
215	46	1	2999
216	46	1	2999
217	46	1	2999
218	46	1	2999
219	46	1	2999
220	46	1	2999
221	46	1	2999
222	46	1	2999
223	46	1	2999
224	46	1	2999
225	46	1	2999
226	46	1	2999
227	46	1	2999
228	46	1	2999
229	46	1	2999
230	46	1	2999
231	46	1	2999
232	46	1	2999
233	46	1	2999
234	46	1	2999
235	46	1	2999
236	46	1	2999
237	46	1	2999
238	46	1	2999
239	46	1	2999
240	46	1	2999
241	46	1	2999
242	46	1	2999
243	46	1	2999
244	46	1	2999
245	46	1	2999
246	46	1	2999
247	46	1	2999
248	46	1	2999
249	46	1	2999
250	46	1	2999
251	46	1	2999
252	46	1	2999
253	46	1	2999
254	46	1	2999
255	46	1	2999
256	46	1	2999
257	46	1	2999
258	46	1	2999
259	46	1	2999
260	46	1	2999
261	46	1	2999
262	46	1	2999
263	46	1	2999
264	46	1	2999
265	46	1	2999
266	46	1	2999
267	46	1	2999
268	46	1	2999
269	46	1	2999
270	46	1	2999
271	46	1	2999
272	46	1	2999
273	46	1	2999
274	46	1	2999
275	46	1	2999
276	46	1	2999
277	46	1	2999
278	46	1	2999
279	46	1	2999
280	46	1	2999
281	46	1	2999
282	46	1	2999
283	46	1	2999
284	46	1	2999
285	46	1	2999
286	46	1	2999
287	46	1	2999
288	46	1	2999
289	46	1	2999
290	46	1	2999
291	46	1	2999
292	46	1	2999
293	46	1	2999
294	46	1	2999
295	46	1	2999
296	46	1	2999
297	46	1	2999
298	46	1	2999
299	46	1	2999
300	46	1	2999
301	46	1	2999
302	46	1	2999
303	46	1	2999
304	46	1	2999
305	46	1	2999
306	46	1	2999
307	46	1	2999
308	46	1	2999
309	46	1	2999
310	46	1	2999
311	46	1	2999
312	46	1	2999
313	46	1	2999
314	46	1	2999
315	46	1	2999
316	46	1	2999
317	46	1	2999
318	46	1	2999
319	46	1	2999
320	46	1	2999
321	46	1	2999
322	46	1	2999
323	46	1	2999
324	46	1	2999
325	46	1	2999
326	46	1	2999
327	46	1	2999
328	46	1	2999
329	46	1	2999
330	46	1	2999
331	46	1	2999
332	46	1	2999
333	46	1	2999
334	46	1	2999
335	46	1	2999
336	46	1	2999
337	46	1	2999
338	46	1	2999
339	46	1	2999
340	46	1	2999
341	46	1	2999
342	46	1	2999
343	46	1	2999
344	46	1	2999
345	46	1	2999
346	46	1	2999
347	46	1	2999
348	46	1	2999
349	46	1	2999
350	46	1	2999
351	46	1	2999
352	46	1	2999
353	46	1	2999
354	46	1	2999
355	46	1	2999
356	46	1	2999
357	46	1	2999
358	46	1	2999
359	46	2	2595
360	46	1	2999
361	47	1	2999
362	47	2	2595
363	47	2	2595
364	47	2	2595
365	47	2	2595
366	47	2	2595
367	47	2	2595
368	47	6	830
369	48	5	9900
370	48	1	2999
371	48	2	2595
372	48	6	830
373	48	4	999
374	48	2	2595
375	48	6	830
376	49	1	2999
377	49	2	2595
378	49	3	2900
379	49	4	999
380	49	6	830
381	50	1	2999
382	50	3	2900
383	51	1	2999
384	51	1	2999
385	51	2	2595
386	51	5	9900
387	52	1	2999
388	52	2	2595
389	52	6	830
390	52	5	9900
391	52	4	999
392	52	3	2900
393	52	1	2999
394	53	1	2999
395	53	1	2999
396	53	2	2595
397	53	3	2900
398	54	1	2999
399	54	2	2595
400	54	3	2900
401	55	2	2595
402	55	1	2999
403	55	3	2900
404	55	4	999
405	55	5	9900
406	55	6	830
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-09-22 01:56:36.926172+00
2	2020-09-22 02:08:25.435131+00
3	2020-09-22 04:04:44.881463+00
4	2020-09-22 04:07:29.625876+00
5	2020-09-22 04:08:21.512197+00
6	2020-09-22 04:09:20.231628+00
7	2020-09-22 04:09:53.530548+00
8	2020-09-22 04:24:07.471752+00
9	2020-09-22 04:26:19.819866+00
10	2020-09-22 04:29:31.920956+00
11	2020-09-22 04:30:14.612157+00
12	2020-09-22 04:32:04.912972+00
13	2020-09-22 04:34:49.225097+00
14	2020-09-22 04:36:01.877328+00
15	2020-09-22 04:39:01.322532+00
16	2020-09-22 04:39:44.663808+00
17	2020-09-22 04:44:34.310047+00
18	2020-09-22 04:45:03.086768+00
19	2020-09-22 04:46:20.726569+00
20	2020-09-22 04:46:47.487248+00
21	2020-09-22 04:47:01.007293+00
22	2020-09-22 04:47:49.07871+00
23	2020-09-22 04:53:39.444369+00
24	2020-09-22 04:58:01.002072+00
25	2020-09-22 04:58:15.424588+00
26	2020-09-22 04:58:43.38834+00
27	2020-09-22 04:58:55.820589+00
28	2020-09-22 04:59:15.618472+00
29	2020-09-22 04:59:31.375458+00
30	2020-09-22 05:06:18.150711+00
31	2020-09-22 05:06:30.559513+00
32	2020-09-22 05:06:51.962996+00
33	2020-09-22 05:07:01.922669+00
34	2020-09-22 05:08:52.969084+00
35	2020-09-22 05:09:46.061525+00
36	2020-09-22 05:10:17.62453+00
37	2020-09-22 05:11:22.76961+00
38	2020-09-22 05:11:56.190296+00
39	2020-09-22 05:12:42.015598+00
40	2020-09-22 05:18:21.416282+00
41	2020-09-22 05:18:30.706029+00
42	2020-09-22 05:18:40.532341+00
43	2020-09-29 01:31:49.955861+00
44	2020-10-01 01:02:41.032986+00
45	2020-10-25 06:55:34.138368+00
46	2020-10-25 06:55:34.172196+00
47	2020-10-25 17:52:07.520255+00
48	2020-10-25 19:06:28.565881+00
49	2020-10-27 02:51:09.292038+00
50	2020-10-28 01:33:15.459647+00
51	2020-10-29 03:08:11.293218+00
52	2020-10-30 02:04:00.26618+00
53	2020-10-31 03:25:46.942406+00
54	2020-11-01 04:20:32.25296+00
55	2020-11-02 01:51:20.111518+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Shake Weight	2999	/images/shake-weight.jpg	Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
2	ShamWow	2595	/images/shamwow.jpg	It's like a chamois, towel, and sponge, all in one! Soaks up to 10x it's weight in any liquid!	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
3	Snuggie	2900	/images/snuggie.jpg	Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
4	Wax Vac	999	/images/wax-vac.jpg	Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
5	Ostrich Pillow	9900	/images/ostrich-pillow.jpg	Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
6	Tater Mitts	830	/images/tater-mitts.jpg	8 Seconds is all you need with Tater Mitts. Quickly and easily prepare all your favorite potato dishes with Tater Mitts.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 406, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 55, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 1, false);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

