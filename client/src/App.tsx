import { useState, useEffect } from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { Home } from "./components/Home";
import { LogIn } from "./components/LogIn";
import { ContactUs } from "./components/ContactUs";
import { SignUp } from "./components/SignUp";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import "./App.css";
import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";

function App() {
    const [token, setToken] = useState<null | string>(
        localStorage.token || null
    );

    interface User {
        firstName: string | null;
        lastName: string | null;
        email: string | null;
    }
    const [user, setUser] = useState<User>({
        firstName: null,
        lastName: null,
        email: null,
    });

    useEffect(() => {
        if (token) {
            const user = async () => {
                const user = await fetch("/api/me", {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                }).then((response) => response.json());
                if (user) {
                    setUser({
                        firstName: user.firstname,
                        lastName: user.lastname,
                        email: user.email,
                    });
                }
            };
            user();
        }
    }, [token]);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ user, setUser }}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/contactUs">
                            <ContactUs />
                        </Route>
                        <Route path="/logIn">
                            <LogIn />
                        </Route>
                        <Route path="/products/:categoryID">
                            <Products />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/signUp">
                            <SignUp />
                        </Route>
                        <Route>
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;
