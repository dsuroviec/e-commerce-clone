import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "./NavDropdown";
// import TokenContext from "../contexts/TokenContext";
// import UserContext from "../contexts/UserContext";
import CartContext from "../contexts/CartContext";
import { Input } from "./Input";
import {
  HiMail,
  HiChatAlt2,
  HiShoppingCart,
  HiChevronDown,
  // HiSun,
  // HiMoon,
  HiMenu,
  HiSearch,
  HiUser,
} from "react-icons/hi";

export const Header = () => {
  // const { token, setToken } = useContext(TokenContext)!;
  // const { user } = useContext(UserContext)!;
  // const [theme, setTheme] = useState(localStorage.theme || "light");
  const { cart } = useContext(CartContext)!;

  return (
    <>
      <section
        id="mobile-nav"
        className="w-full p-1 font-medium text-white bg-chewyBlue sm:hidden "
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
              <div className="p-4 border-t text-chewyGray-darker w-80">
                Fish
              </div>
              <div className="p-4 border-t text-chewyGray-darker w-80">
                Fish
              </div>
              <div className="p-4 border-t text-chewyGray-darker w-80">
                Fish
              </div>
            </NavDropdown>
          </div>
          &nbsp;&nbsp;
          <h1
            onClick={() => (window.location.href = "/")}
            className="text-3xl font-Fruktur"
          >
            Crunchy
          </h1>
          <div className="flex">
            &nbsp;&nbsp;
            <Link to="/logIn">
              <HiUser size={27} />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="relative mr-2" to="/cart">
              <HiShoppingCart size={27} />
              <div className="absolute flex items-center justify-center w-5 h-5 text-black rounded-full -top-2 left-3 bg-chewyYellow">
                {cart ? cart?.length : 0}
              </div>
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
      {/* END MOBILE NAV */}
      <section className="hidden h-auto p-3 text-lg text-white bg-blue-500 sm:block">
        <div
          id="topNav"
          className="items-center justify-between hidden sm:flex h-11"
        >
          <NavDropdown
            buttonContent={
              <>
                <HiMenu size={50} />
              </>
            }
          >
            <div className="p-4 border-t text-chewyGray-darker w-80">Fish</div>
            <div className="p-4 border-t text-chewyGray-darker w-80">Fish</div>
            <div className="p-4 border-t text-chewyGray-darker w-80">Fish</div>
            <div className="p-4 border-t text-chewyGray-darker w-80">Fish</div>
            <div className="p-4 border-t text-chewyGray-darker w-80">Fish</div>
          </NavDropdown>

          <h1
            onClick={() => (window.location.href = "/")}
            className="text-3xl font-Fruktur"
          >
            Crunchy
          </h1>

          <div className="relative flex items-center w-1/3 md:w-7/12">
            <HiSearch
              className="absolute text-chewyBlue-dark right-3"
              size={24}
            />
            <Input
              className=" placeholder-gray-500 ml-2 w-full h-10 pl-1.5 pr-10"
              placeholder="Search"
            ></Input>
          </div>
          <div className="flex justify-between w-1/3 ml-1 mr-2 md:w-3/12">
            <NavDropdown
              buttonContent={
                <>
                  help
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
                  className="flex justify-center text-3xl font-medium text-yellow-600 hover:underline"
                >
                  1-800-672-4399
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
                <Link
                  // onBlur={() => {
                  //     setHoverHelpOptions(false);
                  //     setHoverHelpLink(false);
                  // }}
                  to="/"
                  className=" hover:underline"
                >
                  Shipping Info
                </Link>
              </div>
            </NavDropdown>

            <div className="border-r border-opacity-30" />

            <NavDropdown
              buttonContent={
                <>
                  account
                  <HiChevronDown />
                </>
              }
            >
              <div className="overflow-y-auto max-h-80">
                <div className="p-3 border-b ">
                  <button className="w-full px-4 py-2 m-auto font-bold text-white bg-yellow-500 rounded">
                    <Link to="" />
                    Sign In
                  </button>
                  <div className="flex pt-3 text-xs">
                    <span className="min-w-max">New Customer?</span>
                    &nbsp;
                    <Link
                      to=""
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
                </Link>
                <Link
                  to=""
                  className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                >
                  Orders
                </Link>
                <Link
                  to=""
                  className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                >
                  Manage Autoship
                </Link>
                <Link
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
                  Perscriptions
                </Link>
                <Link
                  to=""
                  className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                >
                  My Pet Health
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
                  My Resources
                </Link>
                <Link
                  to=""
                  className="block w-full px-3 py-1 text-blue-500 border-b hover:underline"
                  // onBlur={() => {
                  //     setHoverAccountOptions(false);
                  //     setHoverAccountLink(false);
                  // }}
                >
                  Create a Pet Profile
                </Link>
              </div>
            </NavDropdown>

            <div className="border-r border-opacity-30" />
            <div className="flex ">
              <Link className="relative mr-2" to="/cart">
                <HiShoppingCart size={27} />
                <div className="absolute flex items-center justify-center w-5 h-5 text-black rounded-full -top-2 left-3 bg-chewyYellow">
                  {cart ? cart?.length : 0}
                </div>
              </Link>

              <NavDropdown
                buttonContent={
                  <>
                    cart
                    <HiChevronDown size={22} />
                  </>
                }
              >
                {true ? ( // Items in your cart? Show items
                  <div className="overflow-y-auto w-80 max-h-80">
                    <div className="p-4 bg-gray-50">
                      <div className="flex mb-4">
                        <div className="font-bold flex-2">
                          Cart Subtotal:
                          <span className="text-red-700">&nbsp; $80.80</span>
                        </div>
                        <Link
                          to="/"
                          className="flex justify-end flex-1 w-full text-blue-500 hover:underline"
                        >
                          Edit Cart
                        </Link>
                      </div>
                      <button className="w-full px-4 py-2 m-auto font-bold text-white bg-yellow-500 rounded ">
                        <Link to="/">Proceed to Checkout</Link>
                      </button>
                    </div>
                    <div className="flex justify-between px-4 pt-4 font-medium">
                      <span>Recently Added:</span>
                      <span>{`Total Items (${"3"})`}</span>
                    </div>
                    {[2, 3, 4, 5].map((item, index) => (
                      <div key={index} className="p-4 border-b ">
                        <Link to="/" className="flex">
                          <img
                            className="w-12 h-12 mt-1"
                            src="https://d1e4pidl3fu268.cloudfront.net/4eed2f6d-4fe3-48a2-bc3f-709ff9e20d0a/TEST.jpg"
                            alt="product"
                          ></img>
                          <div className="ml-4 text-sm">
                            This is the desciption of the item and it is really
                            cool because it smells like chicken
                            <div className="block pt-1">
                              <span className="font-bold text-red-700 ">
                                $55.49
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
                    <p>
                      Something missing?&nbsp;
                      <Link to="" className="text-blue-500 hover:underline">
                        Sign in &nbsp;
                      </Link>
                      to see items you may have added from another computer or
                      device.
                    </p>
                  </div>
                )}
              </NavDropdown>
            </div>
          </div>
        </div>
        <div id="bottomNav" className="hidden w-9/12 mt-4 lg:block ">
          <div className="flex items-center justify-between font-bold">
            <NavDropdown
              buttonContent={
                <>
                  shop
                  <HiChevronDown size={22} />
                </>
              }
            >
              <div>Hello!</div>
            </NavDropdown>

            <Link to="/">pharmacy</Link>
            <Link to="/">brands</Link>
            <Link to="/">today's deals</Link>
            <Link to="/">chewy picks</Link>
            <Link to="/">give back</Link>
            <Link to="/">halloween shop</Link>
            <Link to="/">FREE 1-3 DAY SHIPPING OVER $49</Link>
          </div>
        </div>
      </section>
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
            src="/images/autoship-logo.svg"
            alt="autoship"
          ></img>
        </button>
      </div>
      {/* ----------------this starts first section AFTER navbar assuming no token--------- */}
      {/* ONLY SHOW THIS SECTION IF USER IS LOGGED IN AND TOKEN
            <div id="afterToggle" className="flex">
                <Link to="" className="flex-1">
                    <div className="flex items-center p-3 text-sm font-medium border text-chewyGray-dark">
                        <HiSwitchHorizontal size={44} />
                        &nbsp;
                        <div className="block">
                            <span className="block text-chewyGray-darker">
                                Save 35% Today
                            </span>
                            <span className="block text-chewyBlue-dark">
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
