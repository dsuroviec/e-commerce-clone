import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import _ from "lodash";
import clsx from "clsx";
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
    HiChevronLeft,
    HiChevronRight,
} from "react-icons/hi";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";

export const Popper = () => {
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
        null
    );
    const [hoverHelpLink, setHoverHelpLink] = useState(false);
    const [hoverHelpOptions, setHoverHelpOptions] = useState(false);
    const [showHelpOptions, setShowHelpOptions] = useState(false);
    let [referenceHelpLink, setReferenceHelpLink] =
        useState<HTMLButtonElement | null>(null);
    let [popperHelpLink, setPopperHelpLink] = useState<HTMLDivElement | null>(
        null
    );
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

    return (
        <>
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
                    <HiChevronDown size={24} className="2xl:text-yellow-300 " />
                </button>
            </div>
            {showHelpOptions &&
                createPortal(
                    <>
                        <div
                            onMouseEnter={() => setHoverHelpOptions(true)}
                            onMouseLeave={() => setHoverHelpOptions(false)}
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
                                    <Link to="" className="2xl:hover:underline">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            <div className="2xl:flex 2xl:justify-between 2xl:px-6 2xl:py-4 2xl:text-blue-500 ">
                                <Link to="/" className="2xl:hover:underline">
                                    w-80 Track Order
                                </Link>
                                -
                                <Link to="/" className=" 2xl:hover:underline">
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
        </>
    );
};
