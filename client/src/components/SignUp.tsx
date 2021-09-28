import { useContext } from "react";
import { Redirect } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
export const SignUp = () => {
    const { token, setToken } = useContext(TokenContext)!;
    // const [firstName, setFirstName] = useState<string>("");
    // const [lastName, setLastName] = useState<string>("");
    // const [email, setemail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");

    interface Fields {
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: string;
    }
    // console.log(
    //     !/[0-9][a-z][A-Z][*.!@$%^&(){}[]:;<>,.?~_+-=|\]/.test("Darr3*n8n")
    // );
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validate: ({ firstName, lastName, email, password }) => {
            const errors: Fields = {};

            if (!firstName) {
                errors.firstName = "Required";
            }

            if (!lastName) {
                errors.lastName = "Required";
            }

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

        onSubmit: async ({ firstName, lastName, email, password }) => {
            const token = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                }),
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1 className="text-2xl mb-4">Sign Up</h1>
                <form className="w-72" onSubmit={formik.handleSubmit}>
                    <label>
                        <p>First Name</p>
                        <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        {formik.errors.firstName ? (
                            <div className="text-red-600 text-xs">
                                {formik.errors.firstName}
                            </div>
                        ) : null}
                    </label>
                    <label>
                        <p>Last Name</p>
                        <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        {formik.errors.lastName ? (
                            <div className="text-red-600 text-xs">
                                {formik.errors.lastName}
                            </div>
                        ) : null}
                    </label>
                    <label>
                        <p>email</p>
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email ? (
                            <div className="text-red-600 text-xs ">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </label>
                    <label>
                        <p>Password</p>
                        <Input
                            id="password"
                            name="password"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ? (
                            <div className="text-red-600 text-xs max-w-fit-content">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </label>

                    <div className="flex justify-evenly mt-4">
                        <Button type="submit" children="Sign Up" />
                        <Button>
                            <Link to="/logIn">Log In</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
