import { useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import { useFormik } from "formik";
import { Button } from "./Button";
import { Input } from "./Input";
import { Header } from "./Header";
export const LogIn = () => {
    // const [email, setemail] = useState<string | null>();
    // const [password, setPassword] = useState<string | number>();

    const { token, setToken } = useContext(TokenContext)!;

    interface Fields {
        email?: string;
        password?: string;
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: ({ email, password }) => {
            const errors: Fields = {};

            if (!email) {
                errors.email = "Required";
            } else if (email.length < 5) {
                errors.email = "Please make email more than 5 characters ";
            }

            if (!password) {
                errors.password = "Required";
            } else if (password.length < 5) {
                errors.password = "Please make password more than 5 characters";
            } else if (false) {
                errors.password =
                    "Password requires at least 1 lower case letter, one upper case letter, one number, and one special character";
            }

            return errors;
        },

        onSubmit: async ({ email, password }) => {
            const token = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            }).then((response) => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.text();
            });
            if (token) {
                setToken(token);
                localStorage.setItem("token", token);
            }
        },
    });
    return (
        <>
            {token && <Redirect to="/" />}
            <Header />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1 className="mt-4 mb-2 text-2xl">Log In</h1>
                <form className="w-full p-4" onSubmit={formik.handleSubmit}>
                    <label>
                        <p>email</p>
                        <Input
                            className="w-full"
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email ? (
                            <div className="text-xs text-red-600 ">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </label>
                    <label>
                        <p>Password</p>
                        <Input
                            className="w-full"
                            id="password"
                            name="password"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ? (
                            <div className="text-xs text-red-600 max-w-fit-content">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </label>
                    <div className="grid gap-8 mt-4 ">
                        <Button className="w-full bg-chewyOrange" type="submit">
                            Log In
                        </Button>
                        <div className="relative items-center ">
                            <hr />
                            <div className="absolute w-12 font-bold text-center transform -translate-x-1/2 bg-white left-1/2 text-chewyGray-dark -top-3 ">
                                OR
                            </div>
                        </div>
                        <Button className="w-full bg-chewyBlue">
                            <Link to="/signUp">Sign Up</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
