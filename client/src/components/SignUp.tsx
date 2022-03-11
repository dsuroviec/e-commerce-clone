import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { useFormik } from "formik";

export const SignUp = () => {
  const { token, setToken } = useContext(TokenContext)!;
  interface Fields {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }

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

      // Not sure why this isn't working, tested with tim in console. seems to be a formik problem
      //  else if (!/[^@]+@[^@]+/g.test(password)) {
      //     errors.email = "Invalid email format";
      // }

      if (!password) {
        errors.password = "Required";
      } else if (password.length < 5) {
        errors.password = "Please make password more than 5 characters";
      }
      // else if (false) {
      //     errors.password =
      //         "Password requires at least 1 lower case letter, one upper case letter, one number, and one special character";
      // }

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
          alert("User with that email already exists");
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
      {token && <Navigate to="/" />}
      <div className="p-4">
        <h1 className="mt-4 mb-2 text-2xl font-light">Create an Account</h1>
        <form className="grid gap-4" onSubmit={formik.handleSubmit}>
          <Input
            placeholder="First Name"
            className="w-full"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <div className="text-xs text-red-600">
              {formik.errors.firstName}
            </div>
          ) : null}

          <Input
            placeholder="Last Name"
            className="w-full"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? (
            <div className="text-xs text-red-600">{formik.errors.lastName}</div>
          ) : null}

          <Input
            placeholder="Email Address"
            className="w-full"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="text-xs text-red-600 ">{formik.errors.email}</div>
          ) : null}

          <Input
            placeholder="Password"
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

          <div className="grid gap-8">
            <Button className="w-full bg-chewyOrange">Create Account</Button>

            <div className="relative items-center ">
              <hr />
              <div className="absolute inline w-auto w-8/12 font-light text-center transform -translate-x-1/2 bg-white left-1/2 text-chewyGray-dark -top-3 ">
                Already have an account?
              </div>
            </div>
            <Link to="/logIn">
              <Button className="w-full bg-chewyBlue" type="submit">
                Log In
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
