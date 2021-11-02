import { useContext, useState } from "react";
import _ from "lodash";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HiChevronRight, HiTruck } from "react-icons/hi";
import { Button } from "./Button";
import { useHistory, Link, Redirect } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import CartContext from "../contexts/CartContext";
import TokenContext from "../contexts/TokenContext";
import { Input } from "./Input";

export const Checkout = () => {
    const { cart } = useContext(CartContext)!;
    const { token } = useContext(TokenContext)!;
    const [paymentMethod, setPaymentMethod] = useState();
    return (
        <>
            {!token && <Redirect to="/login" />}
            <Header />
            <div className="grid gap-8 p-3">
                <div className="p-4 border rounded text-chewyGray-darker">
                    <span>Shipping Address</span>
                    <div className="flex items-center justify-between">
                        <button className="flex items-center justify-between border-opacity-50 rounded-sm border-1 text-chewyGray-darker">
                            <address className="w-1/2">
                                <strong>Darren Suroviec</strong> 8720 Talmadge
                                Rd, Erie, PA 16509TEST
                            </address>
                            <div className="flex justify-end w-1/2">
                                <HiChevronRight size={28} />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="w-full p-4 border rounded">
                    <h1>Gift Card</h1>
                    <Input placeholder="Gift Card Number" />
                    <Input placeholder="8-Digit PIN" />
                </div>
                <div className="grid gap-6 border rounded">
                    <RadioGroup
                        value={paymentMethod}
                        onChange={(event) => setPaymentMethod(event)}
                    >
                        <RadioGroup.Label>Plan</RadioGroup.Label>
                        <RadioGroup.Option value="startup">
                            {({ checked }) => (
                                <span className={checked ? "bg-blue-200" : ""}>
                                    Startup
                                </span>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="business">
                            {({ checked }) => (
                                <span className={checked ? "bg-blue-200" : ""}>
                                    Business
                                </span>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="enterprise">
                            {({ checked }) => (
                                <span className={checked ? "bg-blue-200" : ""}>
                                    Enterprise
                                </span>
                            )}
                        </RadioGroup.Option>
                    </RadioGroup>
                </div>
            </div>
        </>
    );
};
