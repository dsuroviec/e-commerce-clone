import { Pool } from "pg";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { Request } from "express";
dotenv.config();
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Darr3nnn",
    database: "postgres",
});

interface AuthenticateUserProps {
    email: string;
    password: string;
}
export const authenticateUser = async ({
    email,
    password,
}: AuthenticateUserProps) => {
    const user = await pool.query({
        name: "authenticate-email",
        text: "SELECT id, email, firstname, lastname FROM users WHERE email=$1 ",
        values: [email],
    });
    // If the email exists check the password
    if (user.rows.length) {
        const storedPassword = await pool
            .query({
                name: "authenticate-password",
                text: "SELECT password FROM users WHERE email=$1 ",
                values: [email],
            })
            .then((response) => response.rows[0].password);

        // Check if passwords match
        const match = await bcrypt.compare(password, storedPassword);
        // if there is a match, return JWT token
        if (match) {
            const accessTokenSecret = jwt.sign(
                { id: user.rows[0].id },
                process.env.ACCESS_TOKEN_SECRET!,
                { expiresIn: "1h" }
            );

            return accessTokenSecret;
        }
    }
};
interface CreateUserProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const createUser = async ({
    firstName,
    lastName,
    email,
    password,
}: CreateUserProps) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await pool.query({
        name: "create-user",
        text: "INSERT INTO users (firstName, lastName, email, password) VALUES($1, $2, $3, $4) RETURNING *",
        values: [firstName, lastName, email, hashedPassword],
    });

    const accessTokenSecret = jwt.sign(
        { id: response.rows[0].id },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: "1h" }
    );

    return accessTokenSecret;
};
export const authorizeRequest = async (req: Request, res: any) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    try {
        if (!token) {
            throw new Error();
        }
        const { id }: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
        console.log(id, "Here is my id from the token");
        return id;
    } catch (error) {
        console.log("authorizeRequestFunctionFailed", error);
    }
};

export const getCurrentUser = async (
    id: string | jwt.JwtPayload | undefined
) => {
    const user = await pool.query({
        name: "get-current-user",
        text: "SELECT email, firstname, lastname FROM users WHERE id=$1 ",
        values: [id],
    });

    return user.rows[0];
};
interface CategoryProps {
    categoryID: string;
}
export const getProducts = async () => {
    const res = await pool.query(`Select * from products`);
    return res.rows;
};

export const getProductsByCategory = async ({ categoryID }: CategoryProps) => {
    const res = await pool.query({
        name: "get-products-by-category",
        text: "SELECT * FROM products where category=$1",
        values: [categoryID],
    });

    return res.rows;
};

export const getCategory = async ({ categoryID }: CategoryProps) => {
    const res = await pool.query({
        name: "get-category-by-name",
        text: "SELECT * FROM categories where id=$1",
        values: [categoryID],
    });

    return res.rows[0];
};

export const getCategories = async ({ categoryID }: CategoryProps) => {
    const res = await pool.query({
        name: "get-categories",
        text: "SELECT * FROM categories where id=$1",
        values: [categoryID],
    });
    return res.rows[0];
};
