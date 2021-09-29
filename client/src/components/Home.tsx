import { useContext, useState } from "react";
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
import { HiChevronDown } from "react-icons/hi";
import React, { Fragment } from "react";
import { usePopper } from "react-popper";
import ReactDOM from "react-dom";
const solutions = [
    {
        name: "Insights",
        description: "Measure actions your users take",
        href: "##",
        icon: IconOne,
    },
    {
        name: "Automations",
        description: "Create your own targeted content",
        href: "##",
        icon: IconTwo,
    },
    {
        name: "Reports",
        description: "Keep track of your growth",
        href: "##",
        icon: IconThree,
    },
];
export const Home = () => {
    const { token, setToken } = useContext(TokenContext)!;
    const { user } = useContext(UserContext)!;
    const [theme, setTheme] = useState(localStorage.theme || "light");
    let [referenceElement, setReferenceElement] =
        useState<HTMLButtonElement | null>(null);
    let [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
        null
    );
    let { styles, attributes } = usePopper(referenceElement, popperElement);

    return (
        <>
            <section className="bg-blue-500 text-white">
                <div id="topSection" className="h-24 flex">
                    <svg xmlns="chewy-logo.svg" className="fill-current h-32">
                        <path d="M54.237 15.497c-.653 1.377-.924 2.776-3.217 3.709-2.238.91-4.283-.42-4.961-1.675 0 0 7.41-3.424 9.594-4.742.659-.398 1.165-.856 1.5-1.372.268.681.592 1.486.95 2.356-1.447-.557-3.061.027-3.866 1.724m-7.99-6.587c3.06-1.448 4.765 1.526 4.765 1.526l-6.719 3.178s-1.106-3.257 1.954-4.704m57.306-2.554c-1.925-.648-3.732.431-4.314 2.24l-3.242 10.077-.081-.004c-1.03-4.352-2.437-10.31-2.437-10.31-.438-1.85-2.154-3.074-4.124-2.586a3.449 3.449 0 0 0-1.852 1.148c-.2-1.438-1.283-2.61-2.882-2.816-1.973-.254-3.524 1.141-3.764 3.004l-1.332 10.378-.08.008-2.758-7.643c-1.122-3.109-2.04-4.72-4.828-4.404-2.79.317-3.337 2.094-3.762 5.378l-1.044 8.075-.08.009-3.535-9.826c-.635-1.763-2.449-2.776-4.319-2.087a3.361 3.361 0 0 0-1.78 1.476c-1.396-3.65-6.807-7.16-13.451-3.524-3.462 1.895-5.073 4.507-5.597 7.132-.97-2.256-2.957-3.84-5.605-4.08-3.57-.324-5.576 1.779-5.576 1.779l-.072-.006.52-5.965c.166-1.915-1.089-3.608-3.135-3.793-2.047-.186-3.586 1.28-3.75 3.17l-1.238 14.209c-.615-.662-1.547-1.053-2.635-.776-2.193.536-2.754 3.191-5.084 3.68-2.644.555-4.317-1.548-4.827-4.077-.418-2.077-.06-5.137 2.878-5.587 2.58-.396 3.184 2.346 6.055 1.768 1.7-.343 2.52-1.707 2.123-3.45-.626-2.642-4.737-4.582-9.25-3.636C2.89 6.535-1.035 11.814.242 18.436c1.32 6.844 7.662 9.062 12.679 7.943 3.107-.693 4.978-2.133 6.046-3.612l-.068.773c-.166 1.915 1.089 3.608 3.135 3.793 2.047.186 3.586-1.28 3.75-3.17l.707-8.113c.192-2.269 1.697-3.102 3.008-2.983 1.31.118 2.625 1.375 2.45 3.478l-.706 8.113c-.167 1.916 1.089 3.608 3.135 3.794 2.046.185 3.585-1.28 3.75-3.17l.624-7.17c.14.412.294.803.461 1.17C42.27 26 48.53 26.429 53.41 24.12c2.837-1.342 4.507-2.97 5.497-4.466.443-.67.73-1.294.894-1.868.368.843.738 1.672 1.095 2.445 2.353 5.09 3.173 6.345 6.925 6.018 3.73-.522 4.093-2.08 5.091-10.777l.04-.004.04-.005c2.847 8.261 3.537 9.7 7.288 9.373 3.73-.522 4.26-1.93 5.46-7.423a172.47 172.47 0 0 0 1.306-6.764l.83 2.736c2.006 6.58 4.087 10.944 2.833 11.58-1.115.564-1.76-1.418-3.907-1.283-1.477.093-2.783 1.67-2.307 3.617.657 2.689 4.787 5.545 9.532 4.114 4.78-1.442 6.176-5.383 11.685-20.628.633-1.818-.233-3.78-2.158-4.429"></path>
                    </svg>
                    <Input className="h-8 w-1/3"></Input>

                    <div className="w-96 max-w-sm px-4 ">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        ref={setReferenceElement}
                                        className={`
                                ${open ? "" : "text-opacity-90"}
                               px-3 py-2 inline-flex hover:text-opacity-100`}
                                    >
                                        <span className="font-bold">
                                            24/7 help
                                        </span>

                                        <HiChevronDown
                                            size={24}
                                            className={`${
                                                open ? "" : "text-opacity-90"
                                            } ml-2 text-yellow-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    {ReactDOM.createPortal(
                                        <Transition
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                ref={setPopperElement}
                                                style={styles.popper}
                                                {...attributes.popper}
                                                className="absolute z-10 w-96 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl"
                                            >
                                                <div className="overflow-hidden  shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative  bg-white p-7">
                                                        <span className="m-auto block ">
                                                            Get help from our
                                                            experts 24/7
                                                        </span>
                                                        <span className="text-yellow-300 text-size-30 ">
                                                            1 (800) pet-help
                                                        </span>
                                                    </div>
                                                    <div className="p-4 bg-gray-50">
                                                        <a
                                                            href="##"
                                                            className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                        >
                                                            <span className="flex items-center">
                                                                <span className="text-sm font-medium text-gray-900">
                                                                    Documentation
                                                                </span>
                                                            </span>
                                                            <span className="block text-sm text-gray-500">
                                                                Start
                                                                integrating
                                                                products and
                                                                tools
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </Popover.Panel>{" "}
                                        </Transition>,
                                        document.body
                                    )}
                                </>
                            )}
                        </Popover>
                    </div>
                </div>

                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
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
                    </div>
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

                    {token && (
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
                </nav>
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

function IconOne() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <path
                d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
                stroke="#FB923C"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
        </svg>
    );
}

function IconTwo() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <path
                d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                stroke="#FB923C"
                strokeWidth="2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                stroke="#FDBA74"
                strokeWidth="2"
            />
        </svg>
    );
}

function IconThree() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
            <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
            <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
            <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
            <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
            <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
        </svg>
    );
}
