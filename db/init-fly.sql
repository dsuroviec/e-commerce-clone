-- Create tables
CREATE TABLE IF NOT EXISTS brands (
    name text NOT NULL,
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    logo text NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    name text NOT NULL,
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    banner text NOT NULL,
    tile text NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    name text NOT NULL,
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    price numeric NOT NULL,
    image text NOT NULL,
    brand text NOT NULL,
    category text
);

CREATE TABLE IF NOT EXISTS users (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname text NOT NULL,
    lastname text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    CONSTRAINT user_un UNIQUE (email)
);

-- Insert brands
INSERT INTO brands (id, name, logo) OVERRIDING SYSTEM VALUE VALUES 
(10, 'Purina Pro Plan', 'purina-logo.jpg'),
(11, 'Blue Buffalo', 'blue-logo.png'),
(9, 'Taste of the Wild', 'taste-of-wild-logo.png'),
(14, 'Carefresh', 'carefresh-logo.png'),
(15, 'Wagner''s', 'wagners-logo.jpeg'),
(16, 'Marineland', 'marineland-logo.jpeg'),
(18, 'Terramycin', 'terramycin-logo.png'),
(12, 'Hexbug', 'hexbug-logo.jpg'),
(17, 'Tetra', 'tetra-logo.jpg'),
(13, 'Tidy Cats', 'tidy-cat-logo.png'),
(21, 'Wellness', 'wellness-logo.png'),
(23, 'Frisco', 'frisco-logo.jpg')
ON CONFLICT DO NOTHING;

-- Insert categories
INSERT INTO categories (id, name, title, banner, tile) OVERRIDING SYSTEM VALUE VALUES 
(1, 'Fish', 'Fish & Aquarium Supplies', 'fish-shop.jpg', 'fish-tile.webp'),
(4, 'Horse', 'Horse Supplies', 'horse-shop.jpg', 'horse-tile.webp'),
(5, 'Small Pet', 'Small Pet Supplies', 'small-pet-shop.jpg', 'small-pet-tile.webp'),
(6, 'Reptile', 'Reptile Supplies', 'reptile-shop.jpg', 'reptile-tile.webp'),
(7, 'Bird', 'Bird Supplies', 'bird-shop.jpg', 'bird-tile.webp'),
(2, 'Cat', 'Cat Supplies', 'cat-shop.jpg', 'cat-tile.webp'),
(3, 'Dog', 'Dog Supplies', 'dog-shop.jpg', 'dog-tile.jpg'),
(9, 'Puppy', 'New Puppy Supplies', 'puppy-shop.webp', 'puppy-tile.jpg'),
(10, 'Kitten', 'New Kitten Supplies', 'kitten-shop.webp', 'kitten-tile.png')
ON CONFLICT DO NOTHING;

-- Insert products
INSERT INTO products (id, name, price, image, brand, category) OVERRIDING SYSTEM VALUE VALUES 
(3, 'High Prairie Grain-Free Dry Dog Food', 55.99, 'taste-wild-dog-food.jpg', '9', '3'),
(5, 'Adult Sensitive Skin & Stomach Salmon & Rice Formula Dry Dog Food', 52.48, 'purina-pro.jpg', '10', '3'),
(4, 'Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food', 51.98, 'blue-buffalo-food.jpg', '11', '3'),
(6, 'Mouse Robotic Cat Toy, Color Varies', 12.29, 'cat-toy.jpg', '12', '2'),
(7, 'Instant Action Scented Clumping Clay Cat Litter, 35-lb pail', 16.48, 'cat-litter.jpg', '13', '2'),
(8, 'Small Animal Bedding, Natural, 60-L', 16.12, 'animal-bedding.jpg', '14', '5'),
(9, 'Four Season 100% Black Oil Sunflower Seed Wild Bird Food, 20-lb bag', 19.36, 'bird-seed.jpg', '15', '7'),
(10, 'Bio-Wheel Penguin Rite-Size C Filter Cartridge, 6 count', 9.11, 'fish-filter.jpg', '16', '1'),
(11, 'ReptoMin Floating sticks Turtle & Amphibian Food, 10.59-oz jar', 12.99, 'reptile-food.jpg', '17', '6'),
(12, 'Ophthalmic Ointment for Horses, 3.5-g, 1 count', 21.18, 'horse-meds.jpg', '18', '4'),
(13, 'Peek-a-Boo Kitten Chute', 12.33, 'kitten-toy.jpg', '23', '10'),
(14, 'Soft Puppy Bites Lamb & Salmon', 5.34, 'puppy-treat.jpg', '21', '9')
ON CONFLICT DO NOTHING;

-- Insert test user
INSERT INTO users (id, firstname, lastname, email, password) OVERRIDING SYSTEM VALUE VALUES 
(1, 'commerce', 'commerce', 'commerce', '$2a$10$snhiqTnaz6VdcdmYPY1atO.Z.4Q4NM4MOxBejFjTg4HzgB0P6/8XW')
ON CONFLICT DO NOTHING;
