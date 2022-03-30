import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "./NavDropdown";
import TokenContext from "../contexts/TokenContext";
import CartContext from "../contexts/CartContext";
import UserContext from "../contexts/UserContext";
import Search from "./Search";
import { Input } from "./Input";
import {
  HiMail,
  HiChatAlt2,
  HiShoppingCart,
  HiChevronDown,
  HiMenu,
  HiUser,
} from "react-icons/hi";
import CategoryContext from "../contexts/CategoryContext";
import _ from "lodash";
export const Header = () => {
  const { categories } = useContext(CategoryContext)!;
  const { token, setToken } = useContext(TokenContext)!;
  const { user, setUser } = useContext(UserContext)!;
  const { cart } = useContext(CartContext)!;

  return (
    <>
      <section
        id="mobile-nav"
        className="w-full p-1 font-medium text-white bg-crunchyBlue sm:hidden "
      >
        <div className="flex items-center justify-between h-10 px-1.5 ">
          <div id="menu">
            <NavDropdown
              buttonContent={
                <>
                  <HiMenu size={32} />
                </>
              }
            >
              {categories?.map((category, index) => (
                <Link
                  key={index}
                  to={`/category/${category?.id}`}
                  className="p-4 block border-t text-crunchyBlue-dark hover:underline w-40"
                >
                  {category.name}
                </Link>
              ))}
            </NavDropdown>
          </div>
          <h1
            onClick={() => (window.location.href = "/")}
            className="text-3xl font-Fruktur"
          >
            Crunchy
          </h1>
          <div className="flex">
            <NavDropdown
              buttonContent={
                <>
                  <HiUser size={27} />
                </>
              }
            >
              <div className="overflow-y-auto max-h-80">
                <div className="p-3 border-b ">
                  <Link to="/login">
                    <button className="w-full px-4 py-2 m-auto font-bold text-white bg-yellow-500 rounded">
                      Log In
                    </button>
                  </Link>
                  <div className="flex pt-3 text-xs">
                    <span className="min-w-max">New Customer?</span>
                    &nbsp;
                    <Link
                      to="/signup"
                      className="text-blue-500 min-w-max hover:underline"
                    >
                      Start Here
                    </Link>
                  </div>
                </div>
                <Link
                  to=""
                  className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                >
                  Account
                </Link>{" "}
                <Link
                  to=""
                  className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                >
                  Orders
                </Link>
                {user.firstName ? (
                  <div className="flex lock w-full px-3 py-1 items-center">
                    <div className="mr-2 text-crunchyGray-darker text-sm">{`Not ${_.startCase(
                      user.firstName
                    )}?`}</div>
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => {
                        window.localStorage.removeItem("token");
                        setToken(null);
                        setUser({
                          firstName: null,
                          lastName: null,
                          email: null,
                        });
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                ) : null}
              </div>
            </NavDropdown>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="relative mr-2" to="/cart">
              <HiShoppingCart size={27} />
              <div className="absolute flex items-center justify-center w-5 h-5 text-black rounded-full -top-2 left-3 bg-crunchyYellow">
                {cart ? cart?.length : 0}
              </div>
            </Link>
          </div>
        </div>
        <Search />
      </section>
      {/* END MOBILE NAV */}
      <section className="hidden h-auto p-3 text-lg text-white bg-crunchyBlue sm:block">
        <div className="max-w-[1540px] m-auto">
          <div
            id="topNav"
            className="items-center justify-between hidden sm:flex h-11"
          >
            <h1
              onClick={() => (window.location.href = "/")}
              className="text-3xl font-Fruktur cursor-pointer"
            >
              Crunchy
            </h1>
            &nbsp;
            <Search />
            <div className="flex justify-between w-1/3 ml-1 mr-2 md:w-3/12">
              <NavDropdown
                buttonContent={
                  <>
                    help&nbsp;
                    <HiChevronDown size={22} />
                  </>
                }
              >
                <div className="bg-white p-7">
                  <div className="flex justify-center m-auto ">
                    Get help from our experts 24/7
                  </div>
                  <Link
                    to=""
                    className="flex justify-center text-3xl font-medium text-crunchyOrange-light hover:underline"
                  >
                    1-800-555-5555
                  </Link>
                </div>
                <div className="flex bg-gray-50">
                  <div className="flex items-center justify-center flex-1 p-5 text-blue-500 border">
                    <HiChatAlt2 size={30} />
                    &nbsp;
                    <Link to="" className="hover:underline ">
                      Chat Live
                    </Link>
                  </div>
                  <div className="flex items-center justify-center flex-1 p-5 text-blue-500 border">
                    <HiMail size={30} />
                    &nbsp;
                    <Link to="" className="hover:underline">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between px-6 py-4 text-blue-500 ">
                  <Link to="/" className="hover:underline">
                    Track Order
                  </Link>
                  -
                  <Link to="/" className=" hover:underline">
                    FAQs
                  </Link>
                  -
                  <Link to="/" className=" hover:underline">
                    Shipping Info
                  </Link>
                </div>
              </NavDropdown>

              <div className="border-r border-opacity-30" />

              <NavDropdown
                buttonContent={
                  <>
                    <div>
                      {user.firstName ? (
                        <div className="whitespace-nowrap">{`Hi, ${_.startCase(
                          user.firstName
                        )}`}</div>
                      ) : null}
                      account
                    </div>
                    &nbsp;
                    <HiChevronDown />
                  </>
                }
              >
                <div className="overflow-y-auto max-h-80">
                  <div className="p-3 border-b ">
                    <Link to="/login">
                      <button className="w-full px-4 py-2 m-auto font-bold text-white bg-crunchyOrange-light rounded">
                        Log In
                      </button>
                    </Link>
                    <div className="flex pt-3 text-xs">
                      <span className="min-w-max">New Customer?</span>
                      &nbsp;
                      <Link
                        to="/signup"
                        className="text-blue-500 min-w-max hover:underline"
                      >
                        Start Here
                      </Link>
                    </div>
                  </div>
                  <Link
                    to=""
                    className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                  >
                    Account
                  </Link>{" "}
                  <Link
                    to=""
                    className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                  >
                    Orders
                  </Link>
                  {user.firstName ? (
                    <div className="flex lock w-full px-3 py-1 items-center">
                      <div className="mr-2 text-crunchyGray-darker text-sm">{`Not ${_.startCase(
                        user.firstName
                      )}?`}</div>
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => {
                          window.localStorage.removeItem("token");
                          setToken(null);
                          setUser({
                            firstName: null,
                            lastName: null,
                            email: null,
                          });
                        }}
                      >
                        Log Out
                      </button>
                    </div>
                  ) : null}
                  {/* <Link
                    to="/login"
                    className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                  >
                    Log Out
                  </Link> */}
                  {/*  <Link
                    to=""
                    className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                  >
                    Favorites
                  </Link>
                  <Link
                    to=""
                    className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                  >
                    Buy Again
                  </Link>
                  <Link
                    to=""
                    className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                  >
                    Connect with a Vet
                  </Link>
                  <Link
                    to=""
                    className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                  >
                    Create a Pet Profile
                  </Link> */}
                </div>
              </NavDropdown>

              <div className="border-r border-opacity-30" />
              <div className="flex items-center ">
                <Link className="relative mr-2" to="/cart">
                  <HiShoppingCart size={27} />
                  <div className="absolute flex items-center justify-center w-5 h-5 text-black rounded-full -top-2 left-3 bg-crunchyYellow">
                    {cart ? cart?.length : 0}
                  </div>
                </Link>

                <NavDropdown
                  buttonContent={
                    <>
                      cart&nbsp;
                      <HiChevronDown size={22} />
                    </>
                  }
                >
                  {cart?.length ? ( // Items in your cart? Show items
                    <div className="overflow-y-auto w-80 max-h-80">
                      <div className="p-4 bg-gray-50">
                        <div className="flex mb-4">
                          <div className="font-bold flex-2">
                            Cart Subtotal:
                            <span className="text-red-700">
                              &nbsp;
                              {cart?.reduce((sum, next) => sum + next.price, 0)}
                            </span>
                          </div>
                          <Link
                            to="/cart"
                            className="flex justify-end flex-1 w-full text-blue-500 hover:underline"
                          >
                            Edit Cart
                          </Link>
                        </div>
                        <button className="w-full px-4 py-2 m-auto font-bold text-white bg-crunchyOrange-light rounded ">
                          <Link to="/checkout">Proceed to Checkout</Link>
                        </button>
                      </div>
                      <div className="flex justify-between px-4 pt-4 font-medium">
                        <span>Recently Added:</span>
                        <span>{`Total Items (${cart?.length})`}</span>
                      </div>
                      {cart?.map((item, index) => (
                        <div key={index} className="p-4 border-b ">
                          <Link to="/cart" className="flex">
                            <img
                              className="w-12 h-12 mt-1"
                              src={`/images/${item.image}`}
                              alt="product"
                            ></img>
                            <div className="ml-4 text-sm">
                              {item.name}
                              <div className="block pt-1">
                                <span className="font-bold text-red-700 ">
                                  {item.price}
                                </span>
                                &nbsp; (Qty:1)
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 w-80">
                      <h1 className="pb-5 font-medium">Your Cart is Empty.</h1>
                      {token ? (
                        <p>
                          When you add items to your cart, you can preview them
                          here.
                        </p>
                      ) : (
                        <p>
                          Something missing?&nbsp;
                          <Link
                            to="/login"
                            className="text-blue-500 hover:underline"
                          >
                            Sign in &nbsp;
                          </Link>
                          to see items you may have added from another computer
                          or device.
                        </p>
                      )}
                    </div>
                  )}
                </NavDropdown>
              </div>
            </div>
          </div>
          <div id="bottomNav" className="hidden w-9/12 mt-4 lg:block ">
            <div className="flex items-center justify-start font-bold space-x-16">
              <NavDropdown
                buttonContent={
                  <>
                    shop&nbsp;
                    <HiChevronDown size={22} />
                  </>
                }
              >
                {categories?.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category?.id}`}
                    className="p-4 block border-t text-crunchyBlue-dark hover:underline w-40"
                  >
                    {category.name}
                  </Link>
                ))}
              </NavDropdown>
              <a href="#brands">brands</a>
              {/* <Link to="/">pharmacy</Link> */}

              {/* <Link to="/">today's deals</Link>
              <Link to="/">crunchy picks</Link> */}
              {/* <Link to="/">give back</Link> */}
            </div>
          </div>
        </div>
      </section>
      <div className="p-1 shadow-md mb-2">
        <div className="flex items-center justify-center w-full">
          <span className="px-2 py-.5 text-xl font-bold text-white bg-crunchyOrange rounded-2xl">
            Save 35%
          </span>
          &nbsp;
          <span className="font-medium text-crunchyBlue-evenDarker">
            on your first
          </span>
          &nbsp; &nbsp;
          <img
            className="w-20"
            src="/images/autoship-logo.svg"
            alt="autoship"
          ></img>
        </div>
      </div>
      {/* ----------------this starts first section AFTER navbar assuming no token--------- */}
      {/* ONLY SHOW THIS SECTION IF USER IS LOGGED IN AND TOKEN
            <div id="afterToggle" className="flex">
                <Link to="" className="flex-1">
                    <div className="flex items-center p-3 text-sm font-medium border text-crunchyGray-dark">
                        <HiSwitchHorizontal size={44} />
                        &nbsp;
                        <div className="block">
                            <span className="block text-crunchyGray-darker">
                                Save 35% Today
                            </span>
                            <span className="block text-crunchyBlue-dark">
                                Set up Autoship
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to="" className="flex-1 border">
                    <span></span>
                    <span></span>
                </Link>
            </div> */}
      {/* css transition groups */}
    </>
  );
};
