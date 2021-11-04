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
import { Cart } from "./components/Cart";
import { CategoryProducts } from "./components/CategoryProducts";
import { BrandProducts } from "./components/BrandProducts";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Checkout } from "./components/Checkout";
import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";
import CartContext from "./contexts/CartContext";
import { Product, User } from "./types";
import "./App.css";

// TO DO, set up alert for when trying to create duplicate account, or make db cas insensitive or something. Ask tim.
// Finish connecting up the authorization for requests for security
// Fix the buttons and stuff on the carousel
// Get it deployed somewhere
// build in responsiveness
// put testing in one day

function App() {
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
                        <Header />
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
                            <Route path="/category/:categoryID">
                                <CategoryProducts />
                            </Route>
                            <Route path="/brand/:brandID">
                                <BrandProducts />
                            </Route>
                            <Route path="/cart">
                                <Cart />
                            </Route>
                            <Route path="/checkout">
                                <Checkout />
                            </Route>
                            <Route path="/signUp">
                                <SignUp />
                            </Route>
                            <Route>
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                        <Footer />
                    </Router>
                </CartContext.Provider>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;
