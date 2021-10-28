import express from "express";
import _, { identity } from "lodash";
const app = express();
app.use(express.json());
import {
    authenticateUser,
    createUser,
    getCurrentUser,
    authorizeRequest,
    getProducts,
    getCategory,
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
app.get("/api/categories", (req, res, next) => {
    getCategory(req.body)
        .then((category) => res.send(category))
        .catch((error) => next(error));
});

app.get("/api/categories/:categoryName", (req, res, next) => {
    console.log(req.params, "reqparams");
    getCategory(req.params)
        .then((category) => res.send(category))
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
