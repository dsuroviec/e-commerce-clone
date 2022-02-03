--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-1.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-1.pgdg100+1)

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

--
-- Name: case_insensitive; Type: COLLATION; Schema: public; Owner: postgres
--

CREATE COLLATION public.case_insensitive (provider = icu, deterministic = false, locale = 'und-u-ks-level2');


ALTER COLLATION public.case_insensitive OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brands (
    name text NOT NULL,
    id integer NOT NULL,
    logo text NOT NULL
);


ALTER TABLE public.brands OWNER TO postgres;

--
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.brands ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.brands_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    name text NOT NULL,
    id integer NOT NULL,
    title text NOT NULL,
    banner text NOT NULL,
    tile text NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.categories ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    name text NOT NULL,
    id integer NOT NULL,
    price numeric NOT NULL,
    image text NOT NULL,
    brand text NOT NULL,
    category text
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    email text NOT NULL COLLATE public.case_insensitive,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Purina Pro Plan', 10, 'purina-logo.jpg');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Blue Buffalo', 11, 'blue-logo.png');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Taste of the Wild', 9, 'taste-of-wild-logo.png');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Carefresh', 14, 'carefresh-logo.png');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Wagner''s', 15, 'wagners-logo.jpeg');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Marineland', 16, 'marineland-logo.jpeg');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Terramycin', 18, 'terramycin-logo.png');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Hexbug', 12, 'hexbug-logo.jpg');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Tetra', 17, 'tetra-logo.jpg');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Tidy Cats', 13, 'tidy-cat-logo.png');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Wellness', 21, 'wellness-logo.png');
INSERT INTO public.brands OVERRIDING SYSTEM VALUE VALUES ('Frisco', 23, 'frisco-logo.jpg');


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Fish', 1, 'Fish & Aquarium Supplies', 'fish-shop.jpg', 'fish-tile.webp');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Horse', 4, 'Horse Supplies', 'horse-shop.jpg', 'horse-tile.webp');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Small Pet', 5, 'Small Pet Supplies', 'small-pet-shop.jpg', 'small-pet-tile.webp');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Reptile', 6, 'Reptile Supplies', 'reptile-shop.jpg', 'reptile-tile.webp');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Bird', 7, 'Bird Supplies', 'bird-shop.jpg', 'bird-tile.webp');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Cat', 2, 'Cat Supplies', 'cat-shop.jpg', 'cat-tile.webp');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Dog', 3, 'Dog Supplies', 'dog-shop.jpg', 'dog-tile.jpg');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Puppy', 9, 'New Puppy Supplies', 'puppy-shop.webp', 'puppy-tile.jpg');
INSERT INTO public.categories OVERRIDING SYSTEM VALUE VALUES ('Kitten', 10, 'New Kitten Supplies', 'kitten-shop.webp', 'kitten-tile.png');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('High Prairie Grain-Free Dry Dog Food', 3, 55.99, 'taste-wild-dog-food.jpg', '9', '3');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Adult Sensitive Skin & Stomach Salmon & Rice Formula Dry Dog Food', 5, 52.48, 'purina-pro.jpg', '10', '3');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food', 4, 51.98, 'blue-buffalo-food.jpg', '11', '3');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Mouse Robotic Cat Toy, Color Varies', 6, 12.29, 'cat-toy.jpg', '12', '2');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Instant Action Scented Clumping Clay Cat Litter, 35-lb pail', 7, 16.48, 'cat-litter.jpg', '13', '2');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Small Animal Bedding, Natural, 60-L', 8, 16.12, 'animal-bedding.jpg', '14', '5');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Four Season 100% Black Oil Sunflower Seed Wild Bird Food, 20-lb bag', 9, 19.36, 'bird-seed.jpg', '15', '7');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Bio-Wheel Penguin Rite-Size C Filter Cartridge, 6 count', 10, 9.11, 'fish-filter.jpg', '16', '1');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('ReptoMin Floating sticks Turtle & Amphibian Food, 10.59-oz jar', 11, 12.99, 'reptile-food.jpg', '17', '6');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Ophthalmic Ointment for Horses, 3.5-g, 1 count', 12, 21.18, 'horse-meds.jpg', '18', '4');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Peek-a-Boo Kitten Chute', 13, 12.33, 'kitten-toy.jpg', '23', '10');
INSERT INTO public.products OVERRIDING SYSTEM VALUE VALUES ('Soft Puppy Bites Lamb & Salmon', 14, 5.34, 'puppy-treat.jpg', '21', '9');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users OVERRIDING SYSTEM VALUE VALUES (1, 'commerce', 'commerce', 'commerce', '$2a$10$snhiqTnaz6VdcdmYPY1atO.Z.4Q4NM4MOxBejFjTg4HzgB0P6/8XW');


--
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brands_id_seq', 23, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 10, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 14, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 19, true);


--
-- Name: users user_un; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_un UNIQUE (email);


--
-- PostgreSQL database dump complete
--

