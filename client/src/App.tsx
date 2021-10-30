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
import CartContext from "./contexts/CartContext";

function App() {
    interface User {
        firstName: string | null;
        lastName: string | null;
        email: string | null;
    }
    interface Product {
        id: number;
        name: string;
        price: number;
        image: string;
        brand: string;
        category: string;
    }
    const [token, setToken] = useState<null | string>(
        localStorage.token || null
    );
    const [cart, setCart] = useState<Product[] | null>(null);

    const [user, setUser] = useState<User>({
        firstName: null,
        lastName: null,
        email: null,
    });

    // Get cart items from local storage upon initial render of cart page
    useEffect(() => {
        const item: any = localStorage.getItem("cart");
        setCart(JSON.parse(item));
    }, []);

    // // Updates local storage with cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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
                <CartContext.Provider value={{ cart, setCart }}>
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
                </CartContext.Provider>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;
