import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { Button } from "./Button";
import { Input } from "./Input";
import { RadioGroup } from "@headlessui/react";
import CartContext from "../contexts/CartContext";
import TokenContext from "../contexts/TokenContext";

const plans = [
    {
        name: "Credit or Debit Card",
    },
    {
        name: "PayPal",
        logo: "/images/PayPal.svg",
    },
];

export const Checkout = () => {
    const { cart } = useContext(CartContext)!;
    const { token } = useContext(TokenContext)!;
    const [paymentMethod, setPaymentMethod] = useState(plans[0]);
    console.log(paymentMethod, "method");
    return (
        <>
            {!token && <Redirect to="/login" />}

            <div className="grid gap-8 p-3">
                <div className="grid gap-3 p-4 border rounded text-chewyGray-darker">
                    <h1 className="text-xl text-chewyGray-darker">
                        Shipping Address
                    </h1>
                    <div className="flex items-center justify-between">
                        <button className="flex items-center justify-between border-opacity-50 rounded-sm border text-chewyGray-darker">
                            <address className="w-2/3 p-1 text-left">
                                <strong>John Doe</strong> 867 Yellow Brick Road,
                                FunkyTown, Pennsylvania 5309
                            </address>
                            <div className="flex justify-end w-1/2">
                                <HiChevronRight size={28} />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="grid w-full gap-3 p-4 border rounded">
                    <h1 className="text-xl text-chewyGray-darker">Gift Card</h1>
                    <Input placeholder="Gift Card Number" />
                    <Input placeholder="8-Digit PIN" />
                </div>
                <div className="grid gap-6 p-4 border rounded">
                    <h1 className="text-xl text-chewyGray-darker">
                        Your Payment Information
                    </h1>
                    <RadioGroup
                        value={paymentMethod}
                        onChange={(event: any) => setPaymentMethod(event)}
                    >
                        <RadioGroup.Label className="sr-only">
                            Server size
                        </RadioGroup.Label>
                        <div className="space-y-2">
                            {plans.map((plan) => (
                                <RadioGroup.Option
                                    key={plan.name}
                                    value={plan}
                                    className={({ active, checked }) =>
                                        `${
                                            active
                                                ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                                : ""
                                        }
                  ${
                      checked
                          ? "bg-chewyOrange bg-opacity-75 text-white"
                          : "bg-chewyBlue-light"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                                    }
                                >
                                    {({ active, checked }) => (
                                        <>
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center">
                                                    <div className="text-sm">
                                                        <RadioGroup.Label
                                                            as="p"
                                                            className={`font-medium mb-4 text-lg  ${
                                                                checked
                                                                    ? "text-white"
                                                                    : "text-gray-900"
                                                            }`}
                                                        >
                                                            {plan.logo ? (
                                                                <img
                                                                    className="block w-20"
                                                                    src={
                                                                        plan.logo
                                                                    }
                                                                    alt=""
                                                                />
                                                            ) : (
                                                                plan.name
                                                            )}
                                                        </RadioGroup.Label>
                                                        <RadioGroup.Description
                                                            as="span"
                                                            className={`inline ${
                                                                checked
                                                                    ? "text-sky-100"
                                                                    : "text-gray-500"
                                                            }`}
                                                        >
                                                            {checked &&
                                                                plan.name ===
                                                                    "Credit or Debit Card" && (
                                                                    <>
                                                                        <div className="mb-6">
                                                                            DO
                                                                            NOT
                                                                            ENTER
                                                                            PERSONAL
                                                                            INFORMATION,
                                                                            THIS
                                                                            IS
                                                                            NOT
                                                                            A
                                                                            REAL
                                                                            OR
                                                                            SECURE
                                                                            PAYMENT!!!
                                                                        </div>
                                                                        <div className="grid w-9/12 gap-4 ">
                                                                            <Input
                                                                                className="w-full"
                                                                                placeholder="Name on Card"
                                                                            ></Input>
                                                                            <Input
                                                                                className="w-full"
                                                                                placeholder="Card Number"
                                                                            ></Input>
                                                                            <div className="flex">
                                                                                <Input
                                                                                    className="w-full"
                                                                                    placeholder="Exp. Month"
                                                                                ></Input>
                                                                                <span className="text-3xl">
                                                                                    /
                                                                                </span>
                                                                                <Input
                                                                                    className="w-full"
                                                                                    placeholder="Exp. Year"
                                                                                ></Input>
                                                                            </div>
                                                                            <Input
                                                                                className="w-1/3"
                                                                                placeholder="CVV"
                                                                            ></Input>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            {checked &&
                                                                plan.name ===
                                                                    "PayPal" && (
                                                                    <div className="grid w-9/12 gap-4">
                                                                        <Button
                                                                            onClick={() =>
                                                                                alert(
                                                                                    "Further action not permitted for security purposes"
                                                                                )
                                                                            }
                                                                            className=""
                                                                        >
                                                                            Pay
                                                                            with
                                                                            PayPal
                                                                        </Button>
                                                                        <span className="block">
                                                                            Then
                                                                            you'll
                                                                            review
                                                                            and
                                                                            place
                                                                            your
                                                                            order
                                                                            on
                                                                            Chewy.com
                                                                        </span>
                                                                    </div>
                                                                )}
                                                        </RadioGroup.Description>
                                                    </div>
                                                </div>
                                                {checked && (
                                                    <div className="flex-shrink-0 text-white">
                                                        <CheckIcon className="w-6 h-6" />
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                    <div className="flex items-center m-auto">
                        <span className="font-bold text-chewyGray-darker">
                            Order Total:
                        </span>
                        &nbsp;
                        <span className="flex m-auto text-lg font-bold text-chewyRed">
                            {`$${
                                cart &&
                                cart
                                    .reduce(
                                        (total, product) =>
                                            total + product.price,
                                        0
                                    )
                                    .toFixed(2)
                            }`}
                        </span>
                    </div>
                    <Button
                        onClick={() =>
                            alert(
                                "For security reasons, this button does nothing"
                            )
                        }
                        className="bg-chewyOrange"
                    >
                        {" "}
                        Place Order
                    </Button>
                </div>
            </div>
        </>
    );
};
function CheckIcon(props: any) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
