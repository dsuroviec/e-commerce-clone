import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
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
import CategoryContext from "./contexts/CategoryContext";
import GlobalErrorContext from "./contexts/GlobalErrorContext";
import { GlobalErrorDialog } from "./components/GlobalErrorDialog";
import { Product, User, Category } from "./types";
import "./App.css";

// TO DO
// Create a duplicate home page, and remove some features for now
// Finish connecting up the authorization for requests for security
// Fix the buttons and stuff on the carousel
// build in responsiveness
// put testing in one day
// Fix images on home page for when screen sizes get larger. either find out how to scale, or use bigger images
// Create readme for github account and figure out how to get dev setup going for other people who want to work on in. docker? docker compose?
// when can I delete other project on old computer
// Connect railway to main branch in e-commerce-clone repo

function App() {
  const [token, setToken] = useState<null | string>(localStorage.token || null);

  const [cart, setCart] = useState<Product[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [user, setUser] = useState<User>({
    firstName: null,
    lastName: null,
    email: null,
  });
  console.log("now theres a token!", token);
  console.log("user", user);
  const [isErrorOpen, setIsErrorOpen] = useState<boolean>(true);

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

  useEffect(() => {
    (async () => {
      const categories = await fetch("/api/categories").then((response) =>
        response.json()
      );
      setCategories(categories);
    })();
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <CategoryContext.Provider value={{ categories, setCategories }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <GlobalErrorContext.Provider
              value={{
                isErrorOpen,
                setIsErrorOpen,
              }}
            >
              <BrowserRouter>
                <Header />
                <GlobalErrorDialog />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contactUs" element={<ContactUs />} />
                  <Route path="/logIn" element={<LogIn />} />
                  <Route
                    path="/category/:categoryID"
                    element={<CategoryProducts />}
                  />
                  <Route path="/brand/:brandID" element={<BrandProducts />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/signUp" element={<SignUp />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </GlobalErrorContext.Provider>
          </CartContext.Provider>
        </CategoryContext.Provider>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
