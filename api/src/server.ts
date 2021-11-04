import express from "express";
const app = express();
app.use(express.json());
import {
    authenticateUser,
    createUser,
    getCurrentUser,
    authorizeRequest,
    getProducts,
    getCategory,
    getCategories,
    getProductsByCategory,
    getProductsByBrand,
    getBrands,
    getBrand,
} from "./databasepg";

app.post("/api/login", (req, res, next) => {
    authenticateUser(req.body)
        .then((token) => {
            if (!token) {
                return res.status(403).send();
            }
            res.send(token);
        })
        .catch((error) => next(error));
});

app.get("/api/products", (req, res, next) => {
    getProducts()
        .then((products) => res.send(products))
        .catch((error) => next(error));
});
app.get("/api/categoryproducts/:categoryID", (req, res, next) => {
    getProductsByCategory(req.params)
        .then((products) => res.send(products))
        .catch((error) => next(error));
});

app.get("/api/brandproducts/:brandID", (req, res, next) => {
    getProductsByBrand(req.params)
        .then((products) => res.send(products))
        .catch((error) => next(error));
});

app.get("/api/categories/:categoryID", (req, res, next) => {
    getCategory(req.params)
        .then((category) => res.send(category))
        .catch((error) => next(error));
});

app.get("/api/categories", (req, res, next) => {
    getCategories()
        .then((categories) => res.send(categories))
        .catch((error) => next(error));
});

app.get("/api/brand/:brandID", (req, res, next) => {
    getBrand(req.params)
        .then((brand) => res.send(brand))
        .catch((error) => next(error));
});

app.get("/api/brands", (req, res, next) => {
    getBrands()
        .then((brands) => res.send(brands))
        .catch((error) => next(error));
});

app.post("/api/signup", (req, res, next) => {
    createUser(req.body)
        .then((token) => {
            if (!token) {
                return res.status(403).send();
            }
            res.send(token);
        })
        .catch((error) => next(error));
});

app.get("/api/me", (req, res, next) => {
    authorizeRequest(req, res)
        .then((id) => {
            getCurrentUser(id).then((user) => res.send(user));
        })
        .catch((error) => next(error));
});

app.get("/api/users", (req, res, next) => {
    authorizeRequest(req, res)
        .then((response) => {
            res.send(response);
        })
        .catch((error) => next(error));
});

app.listen(5000, () => {
    console.log("The application is listening on port 5000!");
});
