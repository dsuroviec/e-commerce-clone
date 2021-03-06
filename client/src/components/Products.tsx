import { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import CartContext from "../contexts/CartContext";
import TokenContext from "../contexts/TokenContext";
import { Transition, Dialog } from "@headlessui/react";
import _ from "lodash";
import { HiCheck, HiOutlineX } from "react-icons/hi";
import { Product, Category } from "../types";

export const Products = (props: {
  products: Product[] | null;
  category?: Category | null;
}) => {
  const { cart, setCart } = useContext(CartContext)!;
  const { token } = useContext(TokenContext)!;
  const [productAddedToCart, setProductAddedToCart] = useState<Product | null>(
    null
  );

  return (
    <>
      {props.products?.map((product: any) => (
        <div key={product.id}>
          <div className="flex gap-5 p-4 bg-white border-t">
            <div className="inline-grid w-5/12 gap-y-6 ">
              <img
                src={`/images/${product?.image}`}
                className="w-20 m-auto mt-1"
                alt=""
              ></img>
              <Button
                className="block m-auto bg-crunchyOrange"
                onClick={() => {
                  const quantityOfSelectedProductAlreadyInCart = _.countBy(
                    cart,
                    "id"
                  )[product.id];
                  if (quantityOfSelectedProductAlreadyInCart > 4) {
                    return alert(
                      `There's a order limit of ${quantityOfSelectedProductAlreadyInCart} for this item`
                    );
                  } else {
                    setProductAddedToCart(product);
                    cart ? setCart([...cart, product]) : setCart([product]);
                  }
                }}
              >
                Add To Cart
              </Button>
            </div>
            <div className="w-7/12">
              <h2>
                <strong>{product.brand}</strong>&nbsp;
                {product.name}
              </h2>
              <span className="font-semibold text-crunchyRed ">
                {`$${product.price}`}
              </span>
              <div className="flex items-center">
                <img src="/images/rating.svg" alt=""></img>
                &nbsp;
                <span className=" text-crunchyGray">48</span>
              </div>
              <span className="text-xs">FREE 1-3 day shipping over $49</span>
            </div>
          </div>
        </div>
      ))}

      <Transition.Root show={productAddedToCart ? true : false} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={() => setProductAddedToCart(null)}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                      <button
                        onClick={() => setProductAddedToCart(null)}
                        className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span className="sr-only">Close panel</span>

                        <HiOutlineX size={28} />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-col h-auto py-6 overflow-y-scroll bg-white shadow-xl">
                    <div className="flex items-center justify-center px-4 text-crunchyGreen sm:px-6">
                      <HiCheck size={26} />
                      &nbsp;
                      <h2
                        className="text-lg font-medium "
                        id="slide-over-title"
                      >
                        Added to Cart
                      </h2>
                    </div>

                    <div className="relative flex-1 mt-6 sm:px-6">
                      {/* Replace with your content */}
                      <div className="flex items-center gap-6 p-4 bg-white border-b-1 ">
                        <img
                          className="w-20"
                          src={`/images/${productAddedToCart?.image}`}
                          alt=""
                        ></img>
                        <div className=" text-crunchyGray-dark">
                          <strong>{productAddedToCart?.brand}</strong>
                          &nbsp;
                          {productAddedToCart?.name}
                        </div>
                      </div>
                      <div className="grid gap-6 p-4 mt-4 bg-crunchyGray-lighter">
                        <div className="flex items-center justify-between">
                          <span className="text-lg text-crunchyGray-dark">
                            <strong>Subtotal</strong>
                            &nbsp; ({cart?.length} items):
                          </span>
                          <span className="flex text-lg font-bold text-crunchyRed">
                            {`$${
                              cart &&
                              cart
                                .reduce(
                                  (total, product) => total + product.price,
                                  0
                                )
                                .toFixed(2)
                            }`}
                          </span>{" "}
                        </div>
                        <div className="flex justify-evenly">
                          <Link to="/cart">
                            <Button className="p-4 bg-white text-crunchyGray-dark">
                              Cart
                            </Button>
                          </Link>
                          <Link to={token ? "/checkout" : "/login"}>
                            <Button className="p-4 bg-crunchyOrange">
                              Proceed to Checkout
                            </Button>
                          </Link>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
