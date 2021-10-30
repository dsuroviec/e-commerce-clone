import { useEffect, useState, useContext } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HiTruck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useHistory } from "react-router-dom";
import CartContext from "../contexts/CartContext";
export const Cart = () => {
    const { cart, setCart } = useContext(CartContext)!;
    // react-router history for keep shopping button
    let history = useHistory();

    return (
        <>
            <Header />
            {!cart ? (
                <>
                    <h1 className="text-2xl text-center">
                        Your cart is empty.
                    </h1>
                    <img className="m-auto" src="/images/empty-cart.png"></img>

                    <Button
                        className="block m-auto my-6 bg-chewyOrange"
                        onClick={() => history.goBack()}
                    >
                        Continue Shopping
                    </Button>
                </>
            ) : (
                <>
                    <h1 className="px-4 pt-4 pb-1 text-2xl font-medium">
                        Your Shopping Cart
                    </h1>

                    <div className="p-4 border-t-2 bg-chewyGray-lighter">
                        <span className="flex items-center justify-center text-chewyGray-darkest text-chewyGray-dark">
                            <strong>
                                {`$${Math.max(
                                    50.0 -
                                        cart.reduce(
                                            (total, product) =>
                                                total + product.price,
                                            0
                                        ),
                                    0
                                )}`}
                            </strong>
                            &nbsp; until Free shipping &nbsp;
                            <HiTruck size="24" />
                        </span>

                        <div className="flex items-center justify-between">
                            <span>Subtotal ({cart?.length} items):</span>
                            <span className="flex text-lg font-bold text-chewyRed">
                                {`$${cart
                                    .reduce(
                                        (total, product) =>
                                            total + product.price,
                                        0
                                    )
                                    .toFixed(2)}`}
                            </span>
                        </div>
                        <Button className="block w-full mt-4 bg-chewyOrange">
                            Proceed to Checkout
                        </Button>
                    </div>
                    {cart?.map((product, index) => (
                        <div className="p-4 border-b rounded-lg" key={index}>
                            <div className="flex gap-5">
                                <div className="grid gap-2">
                                    <img
                                        className="block w-20 m-auto mt-1"
                                        src={`/images/${product.image}`}
                                        alt=""
                                    ></img>
                                    <span className="test-sm text text-chewyGreen">
                                        In&nbsp;Stock
                                    </span>
                                </div>
                                <div className="grid ">
                                    <div>
                                        <strong>{product.brand}</strong>&nbsp;
                                        {product.name}
                                    </div>
                                    <span className="text-lg font-bold text-chewyRed">
                                        ${product.price}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3 border-t-1 ">
                                <div className="flex my-4 text-sm">
                                    <img
                                        className="w-20"
                                        src="/images/autoship-logo.svg"
                                        alt=""
                                    ></img>
                                    &nbsp; - Save 5% on future Autoship orders
                                </div>
                                <div className="flex items-center justify-between pt-2">
                                    <div>
                                        <label htmlFor="quantity">
                                            Quantity:
                                        </label>
                                        &nbsp;
                                        <select
                                            onChange={(event) =>
                                                console.log(
                                                    "here is target",
                                                    event.target.value
                                                )
                                            }
                                            name="quantity"
                                            className="w-8"
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                        </select>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            const updatedCart = [
                                                ...cart,
                                            ].filter(
                                                (item) => item.id !== product.id
                                            );
                                            if (updatedCart.length) {
                                                setCart([...updatedCart]);
                                            } else {
                                                setCart(null);
                                            }
                                        }}
                                    >
                                        Remove Items
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
            <Footer />
        </>
    );
};
