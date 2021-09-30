import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { Menu } from "@headlessui/react";
import { Popover, Transition } from "@headlessui/react";
import { HiChevronDown, HiMail, HiChatAlt2 } from "react-icons/hi";
import React, { Fragment } from "react";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";

export const Home = () => {
    const { token, setToken } = useContext(TokenContext)!;
    const { user } = useContext(UserContext)!;
    const [theme, setTheme] = useState(localStorage.theme || "light");
    const [renderOptions, setRenderOptions] = useState(false);
    const [hoverHelpLink, setHoverHelpLink] = useState(false);
    const [hoverHelpOptions, setHoverHelpOptions] = useState(false);
    const [showHelpOptions, setShowHelpOptions] = useState(false);
    let [referenceElement, setReferenceElement] =
        useState<HTMLAnchorElement | null>(null);
    let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
        null
    );
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
        null
    );

    let { styles, attributes } = usePopper(referenceElement, popperElement, {
        // placement: "right",
        modifiers: [
            { name: "arrow", options: { element: arrowElement } },
            { name: "offset", options: { offset: [-100, 8] } },
        ],
    });

    useEffect(() => {
        if (hoverHelpLink || hoverHelpOptions) {
            setShowHelpOptions(true);
        } else {
            const hide = setTimeout(() => {
                setShowHelpOptions(false);
            }, 300);
            return () => clearTimeout(hide);
        }
    }, [hoverHelpLink, hoverHelpOptions]);

    return (
        <>
            <section className="bg-blue-500 text-white">
                <div id="topSection" className="h-24 flex">
                    <svg xmlns="chewy-logo.svg" className="fill-current h-32">
                        <path d="M54.237 15.497c-.653 1.377-.924 2.776-3.217 3.709-2.238.91-4.283-.42-4.961-1.675 0 0 7.41-3.424 9.594-4.742.659-.398 1.165-.856 1.5-1.372.268.681.592 1.486.95 2.356-1.447-.557-3.061.027-3.866 1.724m-7.99-6.587c3.06-1.448 4.765 1.526 4.765 1.526l-6.719 3.178s-1.106-3.257 1.954-4.704m57.306-2.554c-1.925-.648-3.732.431-4.314 2.24l-3.242 10.077-.081-.004c-1.03-4.352-2.437-10.31-2.437-10.31-.438-1.85-2.154-3.074-4.124-2.586a3.449 3.449 0 0 0-1.852 1.148c-.2-1.438-1.283-2.61-2.882-2.816-1.973-.254-3.524 1.141-3.764 3.004l-1.332 10.378-.08.008-2.758-7.643c-1.122-3.109-2.04-4.72-4.828-4.404-2.79.317-3.337 2.094-3.762 5.378l-1.044 8.075-.08.009-3.535-9.826c-.635-1.763-2.449-2.776-4.319-2.087a3.361 3.361 0 0 0-1.78 1.476c-1.396-3.65-6.807-7.16-13.451-3.524-3.462 1.895-5.073 4.507-5.597 7.132-.97-2.256-2.957-3.84-5.605-4.08-3.57-.324-5.576 1.779-5.576 1.779l-.072-.006.52-5.965c.166-1.915-1.089-3.608-3.135-3.793-2.047-.186-3.586 1.28-3.75 3.17l-1.238 14.209c-.615-.662-1.547-1.053-2.635-.776-2.193.536-2.754 3.191-5.084 3.68-2.644.555-4.317-1.548-4.827-4.077-.418-2.077-.06-5.137 2.878-5.587 2.58-.396 3.184 2.346 6.055 1.768 1.7-.343 2.52-1.707 2.123-3.45-.626-2.642-4.737-4.582-9.25-3.636C2.89 6.535-1.035 11.814.242 18.436c1.32 6.844 7.662 9.062 12.679 7.943 3.107-.693 4.978-2.133 6.046-3.612l-.068.773c-.166 1.915 1.089 3.608 3.135 3.793 2.047.186 3.586-1.28 3.75-3.17l.707-8.113c.192-2.269 1.697-3.102 3.008-2.983 1.31.118 2.625 1.375 2.45 3.478l-.706 8.113c-.167 1.916 1.089 3.608 3.135 3.794 2.046.185 3.585-1.28 3.75-3.17l.624-7.17c.14.412.294.803.461 1.17C42.27 26 48.53 26.429 53.41 24.12c2.837-1.342 4.507-2.97 5.497-4.466.443-.67.73-1.294.894-1.868.368.843.738 1.672 1.095 2.445 2.353 5.09 3.173 6.345 6.925 6.018 3.73-.522 4.093-2.08 5.091-10.777l.04-.004.04-.005c2.847 8.261 3.537 9.7 7.288 9.373 3.73-.522 4.26-1.93 5.46-7.423a172.47 172.47 0 0 0 1.306-6.764l.83 2.736c2.006 6.58 4.087 10.944 2.833 11.58-1.115.564-1.76-1.418-3.907-1.283-1.477.093-2.783 1.67-2.307 3.617.657 2.689 4.787 5.545 9.532 4.114 4.78-1.442 6.176-5.383 11.685-20.628.633-1.818-.233-3.78-2.158-4.429"></path>
                    </svg>
                    <Input className="h-8 w-1/3"></Input>

                    <Link
                        ref={setReferenceElement}
                        className="flex h-8"
                        id="help-menu"
                        // onClick={() => redirect to help page}
                        to="/"
                        onMouseEnter={() => setHoverHelpLink(true)}
                        onMouseLeave={() => setHoverHelpLink(false)}
                        onFocus={() => setHoverHelpLink(true)}
                    >
                        <span className="font-bold">24/7 help</span>
                        <HiChevronDown
                            size={24}
                            className="ml-2 text-yellow-300"
                        />
                    </Link>
                    {showHelpOptions &&
                        createPortal(
                            <>
                                <div
                                    onMouseEnter={() =>
                                        setHoverHelpOptions(true)
                                    }
                                    onMouseLeave={() =>
                                        setHoverHelpOptions(false)
                                    }
                                    onFocus={() => setHoverHelpLink(true)}
                                    ref={setPopperElement}
                                    className=" relative w-80 bg-white      transition-opacity ease-in duration-300 rounded-b-sm shadow-lg ring-1 ring-black ring-opacity-5"
                                    style={styles.popper}
                                    {...attributes.popper}
                                >
                                    <div
                                        ref={setArrowElement}
                                        style={styles.arrow}
                                        data-arrow
                                    />
                                    <div className=" bg-white p-7">
                                        <div className="m-auto flex justify-center ">
                                            Get help from our experts 24/7
                                        </div>
                                        <Link
                                            to=""
                                            className="text-yellow-600 hover:underline font-medium text-3xl flex justify-center"
                                        >
                                            1-800-672-4399
                                        </Link>
                                    </div>
                                    <div className="flex bg-gray-50">
                                        <div className="flex-1 p-5 text-blue-500 border flex justify-center items-center">
                                            <HiChatAlt2 size={30} />
                                            &nbsp;
                                            <Link
                                                to=""
                                                className="hover:underline "
                                            >
                                                Chat Live
                                            </Link>
                                        </div>
                                        <div className="flex-1 text-blue-500  p-5 border flex justify-center items-center">
                                            <HiMail size={30} />
                                            &nbsp;
                                            <Link
                                                to=""
                                                className="hover:underline"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className=" text-blue-500 py-4 px-6 flex justify-between">
                                        <Link
                                            to="/"
                                            className="  hover:underline "
                                        >
                                            Track Order
                                        </Link>
                                        -
                                        <Link
                                            to="/"
                                            className=" hover:underline "
                                        >
                                            FAQs
                                        </Link>
                                        -
                                        <Link
                                            onBlur={() => {
                                                setHoverHelpOptions(false);
                                                setHoverHelpLink(false);
                                            }}
                                            to="/"
                                            className=" hover:underline"
                                        >
                                            Shipping Info
                                        </Link>
                                    </div>
                                </div>
                            </>,
                            document.body
                        )}
                </div>

                {/* <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                    <div className="flex items-center flex-shrink-0  mr-6"></div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div> */}
                {/* <div className="absolute top-5 right-5 ">
                        <button
                            onClick={() => {
                                if (theme === "dark") {
                                    localStorage.setItem("theme", "light");
                                    setTheme("light");
                                    document.documentElement.classList.remove(
                                        "dark"
                                    );
                                } else {
                                    localStorage.setItem("theme", "dark");
                                    setTheme("dark");
                                    document.documentElement.classList.add(
                                        "dark"
                                    );
                                }
                            }}
                        >
                            {theme === "dark" ? (
                                <HiSun className="text-yellow-500" size="2em" />
                            ) : (
                                <HiMoon className="text-blue-900" size="2em" />
                            )}
                        </button>
                    </div> */}

                {/* {token && (
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <Link
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4"
                                    to="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-700  mr-4"
                                    to="/contactUs"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-700  mr-4"
                                    to="/logIn"
                                    onClick={() => {
                                        setToken(null);
                                        localStorage.removeItem("token");
                                    }}
                                >
                                    Logout
                                </Link>
                            </div>
                        </div>
                    )}
                </nav> */}
            </section>
            {!token && <Redirect to="/login" />}

            {/* <div
                style={{
                    textAlign: "center",
                    marginTop: "50px",
                }}
            >
                {user?.firstName && (
                    <h1 className="text-3xl">{`Welcome ${user.firstName}`}</h1>
                )}
                <h1 className="text-xl">{`have a chilln' ${new Date().toLocaleDateString(
                    undefined,
                    { weekday: "long" }
                )}`}</h1>
                <Button
                    onClick={async () =>
                        await fetch("/api/products").then((response) =>
                            response.json()
                        )
                    }
                >
                    get all products
                </Button>
            </div> */}
        </>
    );
};
