import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { Link } from "react-router-dom";

import {
    HiChevronDown,
    HiMail,
    HiChatAlt2,
    HiShoppingCart,
    HiSun,
    HiMoon,
    HiMenu,
    HiSearch,
    HiUser,
} from "react-icons/hi";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";

export const Home = () => {
    const { token, setToken } = useContext(TokenContext)!;
    const { user } = useContext(UserContext)!;
    const [theme, setTheme] = useState(localStorage.theme || "light");
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
        null
    );
    const [hoverHelpLink, setHoverHelpLink] = useState(false);
    const [hoverHelpOptions, setHoverHelpOptions] = useState(false);
    const [showHelpOptions, setShowHelpOptions] = useState(false);
    const [hoverAccountLink, setHoverAccountLink] = useState(false);
    const [hoverAccountOptions, setHoverAccountOptions] = useState(false);
    const [showAccountOptions, setShowAccountOptions] = useState(false);
    const [hoverYourCartLink, setHoverYourCartLink] = useState(false);
    const [hoverYourCartOptions, setHoverYourCartOptions] = useState(false);
    const [showYourCartOptions, setShowYourCartOptions] = useState(false);
    const [hoverShopLink, setHoverShopLink] = useState(false);
    const [hoverShopOptions, setHoverShopOptions] = useState(false);
    const [showShopOptions, setShowShopOptions] = useState(false);

    const [hoverPharmacyLink, setHoverPharmacyLink] = useState(false);
    const [hoverPharmacyOptions, setHoverPharmacyOptions] = useState(false);
    const [showPharmacyOptions, setShowPharmacyOptions] = useState(false);

    const [hoverGiveBackLink, setHoverGiveBackLink] = useState(false);
    const [hoverGiveBackOptions, setHoverGiveBackOptions] = useState(false);
    const [showGiveBackOptions, setShowGiveBackOptions] = useState(false);

    let [referenceHelpLink, setReferenceHelpLink] =
        useState<HTMLButtonElement | null>(null);
    let [referenceAccountLink, setReferenceAccountLink] =
        useState<HTMLButtonElement | null>(null);
    let [referenceYourCartLink, setReferenceYourCartLink] =
        useState<HTMLButtonElement | null>(null);
    let [referenceShopLink, setReferenceShopLink] =
        useState<HTMLButtonElement | null>(null);
    let [referencePharmacyLink, setReferencePharmacyLink] =
        useState<HTMLButtonElement | null>(null);
    let [referenceGiveBackLink, setReferenceGiveBackLink] =
        useState<HTMLButtonElement | null>(null);

    let [popperHelpLink, setPopperHelpLink] = useState<HTMLDivElement | null>(
        null
    );
    let [popperAccountLink, setPopperAccountLink] =
        useState<HTMLDivElement | null>(null);
    let [popperYourCartLink, setPopperYourCartLink] =
        useState<HTMLDivElement | null>(null);
    let [popperShopLink, setPopperShopLink] = useState<HTMLDivElement | null>(
        null
    );
    let [popperPharmacyLink, setPopperPharmacyLink] =
        useState<HTMLDivElement | null>(null);
    let [popperGiveBackLink, setPopperGiveBackLink] =
        useState<HTMLDivElement | null>(null);

    let { styles: helpLinkStyles, attributes: helpLinkAttributes } = usePopper(
        referenceHelpLink,
        popperHelpLink,
        {
            modifiers: [
                { name: "arrow", options: { element: arrowElement } },
                { name: "offset", options: { offset: [-150, 8] } },
            ],
        }
    );
    let { styles: accountLinkStyles, attributes: accountLinkAttributes } =
        usePopper(referenceAccountLink, popperAccountLink, {
            modifiers: [
                { name: "arrow", options: { element: arrowElement } },
                { name: "offset", options: { offset: [-80, 8] } },
            ],
        });
    let { styles: yourCartLinkStyles, attributes: yourCartLinkAttributes } =
        usePopper(referenceYourCartLink, popperYourCartLink, {
            modifiers: [
                { name: "arrow", options: { element: arrowElement } },
                { name: "offset", options: { offset: [-150, 8] } },
            ],
        });
    let { styles: shopLinkStyles, attributes: shopLinkAttributes } = usePopper(
        referenceShopLink,
        popperShopLink,
        {
            placement: "bottom-start",
            modifiers: [
                { name: "arrow", options: { element: arrowElement } },
                { name: "offset", options: { offset: [-50, 8] } },
            ],
        }
    );
    let { styles: pharmacyLinkStyles, attributes: pharmacyLinkAttributes } =
        usePopper(referencePharmacyLink, popperPharmacyLink, {
            placement: "bottom-start",
            modifiers: [
                { name: "arrow", options: { element: arrowElement } },
                { name: "offset", options: { offset: [-94, 8] } },
            ],
        });
    let { styles: giveBackLinkStyles, attributes: giveBackLinkAttributes } =
        usePopper(referenceGiveBackLink, popperGiveBackLink, {
            placement: "bottom-start",
            modifiers: [
                { name: "arrow", options: { element: arrowElement } },
                { name: "offset", options: { offset: [-90, 8] } },
            ],
        });

    useEffect(() => {
        if (hoverHelpLink || hoverHelpOptions) {
            setShowHelpOptions(true);
        } else {
            const hide = setTimeout(() => {
                setShowHelpOptions(false);
            }, 200);
            return () => clearTimeout(hide);
        }
    }, [hoverHelpLink, hoverHelpOptions]);

    useEffect(() => {
        if (hoverAccountLink || hoverAccountOptions) {
            setShowAccountOptions(true);
        } else {
            const hide = setTimeout(() => {
                setShowAccountOptions(false);
            }, 200);
            return () => clearTimeout(hide);
        }
    }, [hoverAccountLink, hoverAccountOptions]);

    useEffect(() => {
        if (hoverYourCartLink || hoverYourCartOptions) {
            setShowYourCartOptions(true);
        } else {
            const hide = setTimeout(() => {
                setShowYourCartOptions(false);
            }, 200);
            return () => clearTimeout(hide);
        }
    }, [hoverYourCartLink, hoverYourCartOptions]);

    useEffect(() => {
        if (hoverShopLink || hoverShopOptions) {
            setShowShopOptions(true);
        } else {
            const hide = setTimeout(() => {
                setShowShopOptions(false);
            }, 200);
            return () => clearTimeout(hide);
        }
    }, [hoverShopLink, hoverShopOptions]);

    useEffect(() => {
        if (hoverPharmacyLink || hoverPharmacyOptions) {
            setShowPharmacyOptions(true);
        } else {
            const hide = setTimeout(() => {
                setShowPharmacyOptions(false);
            }, 200);
            return () => clearTimeout(hide);
        }
    }, [hoverPharmacyLink, hoverPharmacyOptions]);

    useEffect(() => {
        if (hoverGiveBackLink || hoverGiveBackOptions) {
            setShowGiveBackOptions(true);
        } else {
            const hide = setTimeout(() => {
                setShowGiveBackOptions(false);
            }, 200);
            return () => clearTimeout(hide);
        }
    }, [hoverGiveBackLink, hoverGiveBackOptions]);

    return (
        <>
            <section
                id="mobile-nav"
                className="w-full p-1 font-medium text-white bg-chewyBlue sm:hidden"
            >
                <div className="flex items-center justify-between h-10 px-1.5 ">
                    <div id="menu">
                        <button className="flex items-centertext-white">
                            <HiMenu size={27} />
                        </button>
                    </div>
                    &nbsp;&nbsp;
                    <svg viewBox="0 0 106 32" className="w-24 h-8 fill-current">
                        <path d="M54.237 15.497c-.653 1.377-.924 2.776-3.217 3.709-2.238.91-4.283-.42-4.961-1.675 0 0 7.41-3.424 9.594-4.742.659-.398 1.165-.856 1.5-1.372.268.681.592 1.486.95 2.356-1.447-.557-3.061.027-3.866 1.724m-7.99-6.587c3.06-1.448 4.765 1.526 4.765 1.526l-6.719 3.178s-1.106-3.257 1.954-4.704m57.306-2.554c-1.925-.648-3.732.431-4.314 2.24l-3.242 10.077-.081-.004c-1.03-4.352-2.437-10.31-2.437-10.31-.438-1.85-2.154-3.074-4.124-2.586a3.449 3.449 0 0 0-1.852 1.148c-.2-1.438-1.283-2.61-2.882-2.816-1.973-.254-3.524 1.141-3.764 3.004l-1.332 10.378-.08.008-2.758-7.643c-1.122-3.109-2.04-4.72-4.828-4.404-2.79.317-3.337 2.094-3.762 5.378l-1.044 8.075-.08.009-3.535-9.826c-.635-1.763-2.449-2.776-4.319-2.087a3.361 3.361 0 0 0-1.78 1.476c-1.396-3.65-6.807-7.16-13.451-3.524-3.462 1.895-5.073 4.507-5.597 7.132-.97-2.256-2.957-3.84-5.605-4.08-3.57-.324-5.576 1.779-5.576 1.779l-.072-.006.52-5.965c.166-1.915-1.089-3.608-3.135-3.793-2.047-.186-3.586 1.28-3.75 3.17l-1.238 14.209c-.615-.662-1.547-1.053-2.635-.776-2.193.536-2.754 3.191-5.084 3.68-2.644.555-4.317-1.548-4.827-4.077-.418-2.077-.06-5.137 2.878-5.587 2.58-.396 3.184 2.346 6.055 1.768 1.7-.343 2.52-1.707 2.123-3.45-.626-2.642-4.737-4.582-9.25-3.636C2.89 6.535-1.035 11.814.242 18.436c1.32 6.844 7.662 9.062 12.679 7.943 3.107-.693 4.978-2.133 6.046-3.612l-.068.773c-.166 1.915 1.089 3.608 3.135 3.793 2.047.186 3.586-1.28 3.75-3.17l.707-8.113c.192-2.269 1.697-3.102 3.008-2.983 1.31.118 2.625 1.375 2.45 3.478l-.706 8.113c-.167 1.916 1.089 3.608 3.135 3.794 2.046.185 3.585-1.28 3.75-3.17l.624-7.17c.14.412.294.803.461 1.17C42.27 26 48.53 26.429 53.41 24.12c2.837-1.342 4.507-2.97 5.497-4.466.443-.67.73-1.294.894-1.868.368.843.738 1.672 1.095 2.445 2.353 5.09 3.173 6.345 6.925 6.018 3.73-.522 4.093-2.08 5.091-10.777l.04-.004.04-.005c2.847 8.261 3.537 9.7 7.288 9.373 3.73-.522 4.26-1.93 5.46-7.423a172.47 172.47 0 0 0 1.306-6.764l.83 2.736c2.006 6.58 4.087 10.944 2.833 11.58-1.115.564-1.76-1.418-3.907-1.283-1.477.093-2.783 1.67-2.307 3.617.657 2.689 4.787 5.545 9.532 4.114 4.78-1.442 6.176-5.383 11.685-20.628.633-1.818-.233-3.78-2.158-4.429"></path>
                    </svg>
                    <div className="flex">
                        &nbsp;&nbsp;
                        <Link to="/">
                            <HiUser size={27} />
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/">
                            <HiShoppingCart size={27} />
                        </Link>
                    </div>
                </div>
                <div className="relative flex items-center">
                    <HiSearch
                        className="absolute text-chewyBlue-dark right-3"
                        size={24}
                    />
                    <Input
                        className=" placeholder-gray-500 w-full h-10 pl-1.5 pr-10"
                        placeholder="Search"
                    ></Input>
                </div>
            </section>

            <section className="hidden 2xl:pt-6 2xl:h-36 2xl:text-xl 2xl:text-white">
                <div
                    id="topNav"
                    className="justify-between hidden sm:flex 2xl:h-11 2xl:flex 2xl:justify-between 2xl:items-center"
                >
                    <svg
                        xmlns="chewy-logo.svg"
                        className="fill-current 2xl:h-full 2xl:w-32"
                    >
                        <path d="M54.237 15.497c-.653 1.377-.924 2.776-3.217 3.709-2.238.91-4.283-.42-4.961-1.675 0 0 7.41-3.424 9.594-4.742.659-.398 1.165-.856 1.5-1.372.268.681.592 1.486.95 2.356-1.447-.557-3.061.027-3.866 1.724m-7.99-6.587c3.06-1.448 4.765 1.526 4.765 1.526l-6.719 3.178s-1.106-3.257 1.954-4.704m57.306-2.554c-1.925-.648-3.732.431-4.314 2.24l-3.242 10.077-.081-.004c-1.03-4.352-2.437-10.31-2.437-10.31-.438-1.85-2.154-3.074-4.124-2.586a3.449 3.449 0 0 0-1.852 1.148c-.2-1.438-1.283-2.61-2.882-2.816-1.973-.254-3.524 1.141-3.764 3.004l-1.332 10.378-.08.008-2.758-7.643c-1.122-3.109-2.04-4.72-4.828-4.404-2.79.317-3.337 2.094-3.762 5.378l-1.044 8.075-.08.009-3.535-9.826c-.635-1.763-2.449-2.776-4.319-2.087a3.361 3.361 0 0 0-1.78 1.476c-1.396-3.65-6.807-7.16-13.451-3.524-3.462 1.895-5.073 4.507-5.597 7.132-.97-2.256-2.957-3.84-5.605-4.08-3.57-.324-5.576 1.779-5.576 1.779l-.072-.006.52-5.965c.166-1.915-1.089-3.608-3.135-3.793-2.047-.186-3.586 1.28-3.75 3.17l-1.238 14.209c-.615-.662-1.547-1.053-2.635-.776-2.193.536-2.754 3.191-5.084 3.68-2.644.555-4.317-1.548-4.827-4.077-.418-2.077-.06-5.137 2.878-5.587 2.58-.396 3.184 2.346 6.055 1.768 1.7-.343 2.52-1.707 2.123-3.45-.626-2.642-4.737-4.582-9.25-3.636C2.89 6.535-1.035 11.814.242 18.436c1.32 6.844 7.662 9.062 12.679 7.943 3.107-.693 4.978-2.133 6.046-3.612l-.068.773c-.166 1.915 1.089 3.608 3.135 3.793 2.047.186 3.586-1.28 3.75-3.17l.707-8.113c.192-2.269 1.697-3.102 3.008-2.983 1.31.118 2.625 1.375 2.45 3.478l-.706 8.113c-.167 1.916 1.089 3.608 3.135 3.794 2.046.185 3.585-1.28 3.75-3.17l.624-7.17c.14.412.294.803.461 1.17C42.27 26 48.53 26.429 53.41 24.12c2.837-1.342 4.507-2.97 5.497-4.466.443-.67.73-1.294.894-1.868.368.843.738 1.672 1.095 2.445 2.353 5.09 3.173 6.345 6.925 6.018 3.73-.522 4.093-2.08 5.091-10.777l.04-.004.04-.005c2.847 8.261 3.537 9.7 7.288 9.373 3.73-.522 4.26-1.93 5.46-7.423a172.47 172.47 0 0 0 1.306-6.764l.83 2.736c2.006 6.58 4.087 10.944 2.833 11.58-1.115.564-1.76-1.418-3.907-1.283-1.477.093-2.783 1.67-2.307 3.617.657 2.689 4.787 5.545 9.532 4.114 4.78-1.442 6.176-5.383 11.685-20.628.633-1.818-.233-3.78-2.158-4.429"></path>
                    </svg>

                    <Input className=" 2xl:h-full 2xl:w-1/3"></Input>
                    <div className=" 2xl:flex 2xl:items-center">
                        <div
                            className=" 2xl:flex 2xl:px-2 2xl:items-center 2xl:border-r 2xl:border-opacity-30"
                            // onClick={() => redirect to help page}

                            onMouseEnter={() => setHoverHelpLink(true)}
                            onMouseLeave={() => setHoverHelpLink(false)}
                            onFocus={() => setHoverHelpLink(true)}
                        >
                            <Link to="/">
                                <span className="2xl:font-bold">24/7 help</span>
                            </Link>
                            <button
                                ref={setReferenceHelpLink}
                                onClick={() => {
                                    setShowHelpOptions(!showHelpOptions);
                                }}
                            >
                                <HiChevronDown
                                    size={24}
                                    className="2xl:text-yellow-300 "
                                />
                            </button>
                        </div>
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
                                        ref={setPopperHelpLink}
                                        className="bg-white 2xl:rounded-b-sm 2xl:shadow-lg 2xl:w-80 2xl:ring-1 2xl:ring-black 2xl:ring-opacity-5"
                                        style={helpLinkStyles.popper}
                                        {...helpLinkAttributes.popper}
                                    >
                                        <div
                                            ref={setArrowElement}
                                            style={helpLinkStyles.arrow}
                                            data-arrow
                                        />
                                        <div className="bg-white 2xl:p-7">
                                            <div className="2xl:flex 2xl:justify-center 2xl:m-auto ">
                                                Get help from our experts 24/7
                                            </div>
                                            <Link
                                                to=""
                                                className="2xl:flex 2xl:justify-center 2xl:text-3xl 2xl:font-medium 2xl:text-yellow-600 2xl:hover:underline"
                                            >
                                                1-800-672-4399
                                            </Link>
                                        </div>
                                        <div className="2xl:flex 2xl:bg-gray-50">
                                            <div className="border 2xl:flex 2xl:items-center 2xl:justify-center 2xl:flex-1 2xl:p-5 2xl:text-blue-500">
                                                <HiChatAlt2 size={30} />
                                                &nbsp;
                                                <Link
                                                    to=""
                                                    className="2xl:hover:underline "
                                                >
                                                    Chat Live
                                                </Link>
                                            </div>
                                            <div className="2xl:flex 2xl:items-center 2xl:justify-center 2xl:flex-1 2xl:p-5 2xl:text-blue-500 2xl:border">
                                                <HiMail size={30} />
                                                &nbsp;
                                                <Link
                                                    to=""
                                                    className="2xl:hover:underline"
                                                >
                                                    Contact Us
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="2xl:flex 2xl:justify-between 2xl:px-6 2xl:py-4 2xl:text-blue-500 ">
                                            <Link
                                                to="/"
                                                className="2xl:hover:underline"
                                            >
                                                w-80 Track Order
                                            </Link>
                                            -
                                            <Link
                                                to="/"
                                                className=" 2xl:hover:underline"
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
                                                className=" 2xl:hover:underline"
                                            >
                                                Shipping Info
                                            </Link>
                                        </div>
                                    </div>
                                </>,
                                document.body
                            )}
                        <div
                            className="2xl:flex 2xl:border-r 2xl:border-opacity-30"
                            onMouseEnter={() => setHoverAccountLink(true)}
                            onMouseLeave={() => setHoverAccountLink(false)}
                            onFocus={() => setHoverAccountLink(true)}
                        >
                            <Link
                                className="2xl:pl-2 2xl:leading-none"
                                // onClick={() => redirect to help page}
                                to="/"
                            >
                                {token && (
                                    <span className="2xl:block 2xl:text-sm ">
                                        Hi {user.firstName}
                                    </span>
                                )}

                                <span className="2xl:font-semisectionbold">
                                    your account
                                </span>
                            </Link>
                            <button
                                className="2xl:mr-2"
                                ref={setReferenceAccountLink}
                                onClick={() =>
                                    setShowAccountOptions(!showAccountOptions)
                                }
                            >
                                <HiChevronDown
                                    size={24}
                                    className="2xl:text-yellow-300 "
                                />
                            </button>
                        </div>
                        {showAccountOptions &&
                            createPortal(
                                <div
                                    ref={setPopperAccountLink}
                                    style={accountLinkStyles.popper}
                                    {...accountLinkAttributes.popper}
                                    onMouseEnter={() =>
                                        setHoverAccountOptions(true)
                                    }
                                    onMouseLeave={() => {
                                        setHoverAccountOptions(false);
                                    }}
                                    onFocus={() => setHoverAccountLink(true)}
                                    className="2xl:bg-white 2xl:rounded-b-sm 2xl:shadow-lg 2xl:w-min 2xl:ring-1 2xl:ring-black 2xl:ring-opacity-5"
                                >
                                    <div
                                        ref={setArrowElement}
                                        style={accountLinkStyles.arrow}
                                        data-arrow
                                    />
                                    <div className="2xl:overflow-y-auto 2xl:max-h-80">
                                        <div className="2xl:p-3 2xl:border-b ">
                                            <button className="2xl:w-full 2xl:px-4 2xl:py-2 2xl:m-auto 2xl:font-bold 2xl:text-white 2xl:bg-yellow-500 2xl:rounded">
                                                <Link to="" />
                                                Sign In
                                            </button>
                                            <div className="2xl:flex 2xl:pt-3 2xl:text-xs">
                                                <span className="2xl:min-w-max">
                                                    New Customer?
                                                </span>{" "}
                                                &nbsp;
                                                <Link
                                                    to=""
                                                    className="2xl:text-blue-500 2xl:min-w-max 2xl:hover:underline"
                                                >
                                                    Start Here
                                                </Link>
                                            </div>
                                        </div>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            Account
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            Orders
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            Manage Autoship
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            Favorites
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            Buy Again
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            Perscriptions
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            My Pet Health
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            Connect with a Vet
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                        >
                                            My Resources
                                        </Link>
                                        <Link
                                            to=""
                                            className="border-b 2xl:block 2xl:w-full 2xl:px-3 2xl:py-1 2xl:text-blue-500 2xl:hover:underline"
                                            onBlur={() => {
                                                setHoverAccountOptions(false);
                                                setHoverAccountLink(false);
                                            }}
                                        >
                                            Create a Pet Profile
                                        </Link>
                                    </div>
                                </div>,
                                document.body
                            )}
                        <div
                            className="2xl:flex 2xl:items-center 2xl:h-full 2xl:px-2"
                            // onClick={() => redirect to help page}
                            onMouseEnter={() => setHoverYourCartLink(true)}
                            onMouseLeave={() => setHoverYourCartLink(false)}
                            onFocus={() => setHoverYourCartLink(true)}
                        >
                            {" "}
                            <HiShoppingCart size={34} />
                            &nbsp;
                            <Link to="/">
                                <span className="2xl:font-bold">your cart</span>
                            </Link>
                            <button
                                ref={setReferenceYourCartLink}
                                onClick={() =>
                                    setShowYourCartOptions(!showYourCartOptions)
                                }
                            >
                                <HiChevronDown
                                    size={24}
                                    className="2xl:text-yellow-300 "
                                />
                            </button>
                        </div>
                        {showYourCartOptions &&
                            createPortal(
                                <>
                                    <div
                                        ref={setPopperYourCartLink}
                                        onMouseEnter={() =>
                                            setHoverYourCartOptions(true)
                                        }
                                        onMouseLeave={() => {
                                            setHoverYourCartOptions(false);
                                        }}
                                        onFocus={() =>
                                            setHoverYourCartLink(true)
                                        }
                                        className="2xl:bg-white 2xl:rounded-b-sm 2xl:shadow-lg ring-1 2xl:ring-black 2xl:ring-opacity-5"
                                        style={yourCartLinkStyles.popper}
                                        {...yourCartLinkAttributes.popper}
                                    >
                                        <div
                                            ref={setArrowElement}
                                            style={yourCartLinkStyles.arrow}
                                            data-arrow
                                        />
                                        {true ? ( // Items in your cart? Show items
                                            <div className="2xl:overflow-y-auto 2xl:w-80 2xl:max-h-80">
                                                <div className="2xl:p-4 2xl:bg-gray-50">
                                                    <div className="2xl:flex 2xl:mb-4">
                                                        <div className="2xl:font-bold 2xl:flex-2">
                                                            Cart Subtotal:
                                                            <span className="2xl:text-red-700">
                                                                &nbsp; $80.80
                                                            </span>
                                                        </div>
                                                        <Link
                                                            to="/"
                                                            className="2xl:flex 2xl:justify-end 2xl:flex-1 2xl:w-full 2xl:text-blue-500 2xl:hover:underline"
                                                        >
                                                            Edit Cart
                                                        </Link>
                                                    </div>
                                                    <button className="2xl:w-full 2xl:px-4 2xl:py-2 2xl:m-auto 2xl:font-bold 2xl:text-white 2xl:bg-yellow-500 2xl:rounded ">
                                                        <Link to="/">
                                                            Proceed to Checkout
                                                        </Link>
                                                    </button>
                                                </div>
                                                <div className="2xl:flex 2xl:justify-between 2xl:px-4 2xl:pt-4 2xl:font-medium">
                                                    <span>Recently Added:</span>
                                                    <span>{`Total Items (${"3"})`}</span>
                                                </div>
                                                section
                                                {[2, 3, 4, 5].map((item) => (
                                                    <div className="2xl:p-4 2xl:border-b ">
                                                        <Link
                                                            to="/"
                                                            className="2xl:flex"
                                                        >
                                                            <img
                                                                className="2xl:w-12 2xl:h-12 2xl:mt-1"
                                                                src="https://d1e4pidl3fu268.cloudfront.net/4eed2f6d-4fe3-48a2-bc3f-709ff9e20d0a/TEST.jpg"
                                                                alt="product"
                                                            ></img>
                                                            <div className="2xl:ml-4 2xl:text-sm">
                                                                This is the
                                                                desciption of
                                                                the item and it
                                                                is really cool
                                                                because it
                                                                smells like
                                                                chicken
                                                                <div className="2xl:block 2xl:pt-1">
                                                                    <span className="2xl:font-bold 2xl:text-red-700 ">
                                                                        $55.49
                                                                    </span>
                                                                    &nbsp;
                                                                    (Qty:1)
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="2xl:px-4 2xl:py-8 2xl:w-80">
                                                <h1 className="2xl:pb-5 2xl:font-medium">
                                                    Your Cart is Empty.
                                                </h1>
                                                <p>
                                                    Something missing?&nbsp;
                                                    <Link
                                                        to=""
                                                        className="2xl:text-blue-500 2xl:hover:underline"
                                                    >
                                                        Sign in &nbsp;
                                                    </Link>
                                                    to see items you may have
                                                    added from another computer
                                                    or device.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </>,
                                document.body
                            )}
                    </div>
                </div>
                {token && (
                    <div id="bottomNav" className="2xl:mt-8">
                        <div className="2xl:flex 2xl:items-center 2xl:justify-between 2xl:font-bold">
                            <div
                                className="2xl:flex 2xl:items-center 2xl:px-2 "
                                onMouseEnter={() => setHoverShopLink(true)}
                                onMouseLeave={() => setHoverShopLink(false)}
                                onFocus={() => setHoverShopLink(true)}
                            >
                                <Link to="/">
                                    <span className="2xl:font-bold">shop</span>
                                </Link>
                                <button
                                    ref={setReferenceShopLink}
                                    onClick={() => {
                                        setShowShopOptions(!showShopOptions);
                                    }}
                                >
                                    <HiChevronDown
                                        size={24}
                                        className="2xl:text-yellow-300 "
                                    />
                                </button>
                            </div>
                            {showShopOptions &&
                                createPortal(
                                    <>
                                        <div
                                            onMouseEnter={() =>
                                                setHoverShopOptions(true)
                                            }
                                            onMouseLeave={() =>
                                                setHoverShopOptions(false)
                                            }
                                            onFocus={() =>
                                                setHoverShopLink(true)
                                            }
                                            ref={setPopperShopLink}
                                            className="rounded-b-sm 2xl:bg-white 2xl:shadow-lg 2xl:w-80 2xl:ring-1 2xl:ring-black 2xl:ring-opacity-5"
                                            style={shopLinkStyles.popper}
                                            {...shopLinkAttributes.popper}
                                        >
                                            <div
                                                ref={setArrowElement}
                                                style={shopLinkStyles.arrow}
                                                data-arrow
                                            />
                                            <div>Hello!</div>
                                        </div>
                                    </>,
                                    document.body
                                )}
                            <div
                                className="2xl:flex 2xl:items-center 2xl:px-2 "
                                onMouseEnter={() => setHoverPharmacyLink(true)}
                                onMouseLeave={() => setHoverPharmacyLink(false)}
                                onFocus={() => setHoverPharmacyLink(true)}
                            >
                                <Link to="/">
                                    <span className="2xl:font-bold">
                                        pharmacy
                                    </span>
                                </Link>
                                <button
                                    ref={setReferencePharmacyLink}
                                    onClick={() => {
                                        setShowPharmacyOptions(
                                            !showPharmacyOptions
                                        );
                                    }}
                                >
                                    <HiChevronDown
                                        size={24}
                                        className="2xl:text-yellow-300 "
                                    />
                                </button>
                            </div>
                            {showPharmacyOptions &&
                                createPortal(
                                    <>
                                        <div
                                            onMouseEnter={() =>
                                                setHoverPharmacyOptions(true)
                                            }
                                            onMouseLeave={() =>
                                                setHoverPharmacyOptions(false)
                                            }
                                            onFocus={() =>
                                                setHoverPharmacyLink(true)
                                            }
                                            ref={setPopperPharmacyLink}
                                            className="bg-white 2xl:rounded-b-sm 2xl:shadow-lg 2xl:w-80 2xl:ring-1 2xl:ring-black 2xl:ring-opacity-5"
                                            style={pharmacyLinkStyles.popper}
                                            {...pharmacyLinkAttributes.popper}
                                        >
                                            <div
                                                ref={setArrowElement}
                                                style={pharmacyLinkStyles.arrow}
                                                data-arrow
                                            />
                                            <div>Hello!</div>
                                        </div>
                                    </>,
                                    document.body
                                )}
                            <Link to="/">brands</Link>
                            <Link to="/">today's deals</Link>
                            <Link to="/">chewy picks</Link>
                            <div
                                className="2xl:flex 2xl:items-center 2xl:px-2 "
                                onMouseEnter={() => setHoverGiveBackLink(true)}
                                onMouseLeave={() => setHoverGiveBackLink(false)}
                                onFocus={() => setHoverGiveBackLink(true)}
                            >
                                <Link to="/">
                                    <span className="2xl:font-bold">
                                        give back
                                    </span>
                                </Link>
                                <button
                                    ref={setReferenceGiveBackLink}
                                    onClick={() => {
                                        setShowGiveBackOptions(
                                            !showGiveBackOptions
                                        );
                                    }}
                                >
                                    <HiChevronDown
                                        size={24}
                                        className="2xl:text-yellow-300 "
                                    />
                                </button>
                            </div>
                            {showGiveBackOptions &&
                                createPortal(
                                    <>
                                        <div
                                            onMouseEnter={() =>
                                                setHoverGiveBackOptions(true)
                                            }
                                            onMouseLeave={() =>
                                                setHoverGiveBackOptions(false)
                                            }
                                            onFocus={() =>
                                                setHoverGiveBackLink(true)
                                            }
                                            ref={setPopperGiveBackLink}
                                            className="2xl:bg-white 2xl:rounded-b-sm 2xl:shadow-lg 2xl:w-80 2xl:ring-1 2xl:ring-black 2xl:ring-opacity-5"
                                            style={giveBackLinkStyles.popper}
                                            {...giveBackLinkAttributes.popper}
                                        >
                                            <div
                                                ref={setArrowElement}
                                                style={giveBackLinkStyles.arrow}
                                                data-arrow
                                            />
                                            <div>Hello!</div>
                                        </div>
                                    </>,
                                    document.body
                                )}
                            <Link to="/">halloween shop</Link>
                            <Link to="/">FREE 1-3 DAY SHIPPING OVER $49</Link>
                        </div>
                    </div>
                )}
            </section>
            {/* ----------------this starts first section after navbar assuming no token--------- */}
            <div className="p-1 border-b ">
                <button className="flex items-center justify-center w-full">
                    <span className="px-2 py-.5 text-xl font-bold text-white bg-chewyOrange rounded-2xl">
                        Save 35%
                    </span>
                    &nbsp;
                    <span className="font-medium text-chewyBlue-evenDarker">
                        on your first
                    </span>
                    &nbsp; &nbsp;
                    <img
                        className="w-20"
                        src="autoship-logo.svg"
                        alt="autoship"
                    ></img>
                </button>
            </div>
            {/* <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
                    <div className="flex items-center flex-shrink-0 mr-6"></div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
                            <svg
                                className="w-3 h-3 fill-current"
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
                        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <Link
                                    className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0"
                                    to="/"
                                >
                                    Home
                                </Link>
                                <Link
                                    className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-blue-700"
                                    to="/contactUs"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-blue-700"
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

            {/* {!token && <Redirect to="/login" />} */}

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
