import { useContext } from "react";
import _ from "lodash";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HiChevronRight, HiTruck } from "react-icons/hi";
import { Button } from "./Button";
import { useHistory, Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import TokenContext from "../contexts/TokenContext";

export const Checkout = () => {
    const { cart, setCart } = useContext(CartContext)!;

    return (
        <>
            <Header />
            <div className="p-2">
                <div>
                    <span>Shipping Address</span>
                    <Button className="flex items-center justify-between text-chewyGray-darker">
                        <address className="w-1/2">
                            <strong>Darren Suroviec</strong> 8720 Talmadge Rd,
                            Erie, PA 16509TEST
                        </address>
                        <div className="flex justify-end w-1/2">
                            <HiChevronRight size={28} />
                        </div>
                    </Button>
                </div>
            </div>
        </>
    );
};
