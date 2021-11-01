import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./Button";
import { AddedToCartModal } from "./AddedToCartModal";
import CartContext from "../contexts/CartContext";
import _ from "lodash";
import { Transition } from "@headlessui/react";
import { HiCheck } from "react-icons/hi";
export const Products = () => {
    interface Category {
        name: string;
        title: string;
        banner: string;
        id: number;
    }

    interface Product {
        id: number;
        name: string;
        price: number;
        image: string;
        brand: string;
        category: string;
    }
    const { cart, setCart } = useContext(CartContext)!;
    const { categoryID } = useParams<{ categoryID: string }>();
    const [products, setProducts] = useState<any>(null);
    const [category, setCategory] = useState<Category | null>(null);
    const [productAddedToCart, setProductAddedToCart] =
        useState<Product | null>(null);

    // Get categories that match path
    useEffect(() => {
        (async () => {
            const category = await fetch(`/api/categories/${categoryID}`).then(
                (response) => response.json()
            );
            setCategory(category);
        })();
    }, [categoryID]);

    // Gets products that match the path
    useEffect(() => {
        (async () => {
            const products = await fetch(`/api/products/${categoryID}`).then(
                (response) => response.json()
            );
            setProducts(products);
        })();
    }, [categoryID]);

    return (
        <>
            <Header />
            <div className="p-4 bg-chewyGray-lighter">
                <div>
                    <img src={`/images/${category?.banner}`} alt=""></img>
                </div>
                <h2 className="py-6 text-2xl text-chewyGray-dark">
                    {category?.title}
                </h2>
            </div>
            {products?.map((product: any) => (
                <>
                    <div
                        key={product.id}
                        className="flex gap-5 p-4 bg-white border-t"
                    >
                        <div className="inline-grid w-5/12 gap-y-6 ">
                            <img
                                src={`/images/${product?.image}`}
                                className="w-20 m-auto mt-1"
                                alt=""
                            ></img>
                            <Button
                                className="block m-auto bg-chewyOrange"
                                onClick={() => {
                                    const quantityOfSelectedProductAlreadyInCart =
                                        _.countBy(cart, "id")[product.id];
                                    if (
                                        quantityOfSelectedProductAlreadyInCart >
                                        4
                                    ) {
                                        return alert(
                                            `There's a order limit of ${quantityOfSelectedProductAlreadyInCart} for this item`
                                        );
                                    } else {
                                        setProductAddedToCart(product);
                                        cart
                                            ? setCart([...cart, product])
                                            : setCart([product]);
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
                            <span className="font-semibold text-chewyRed ">
                                {`$${product.price}`}
                            </span>
                            <div className="flex items-center">
                                <img src="/images/rating.svg" alt=""></img>
                                &nbsp;
                                <span className=" text-chewyGray">48</span>
                            </div>
                            <span className="text-xs">
                                FREE 1-3 day shipping over $49
                            </span>
                        </div>
                    </div>
                </>
            ))}
            <Transition
                show={productAddedToCart ? true : false}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0 "
                leaveTo="translate-x-full"
            >
                <div
                    className="fixed inset-0 overflow-hidden"
                    aria-labelledby="slide-over-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                            aria-hidden="true"
                        ></div>
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="relative w-screen max-w-md">
                                <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                                    <button
                                        onClick={() =>
                                            setProductAddedToCart(null)
                                        }
                                        type="button"
                                        className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <span className="sr-only">
                                            Close panel
                                        </span>
                                        {/* <!-- Heroicon name: outline/x --> */}
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex items-center justify-center px-4 text-chewyGreen sm:px-6">
                                        <HiCheck size={26} />
                                        &nbsp;
                                        <h2
                                            className="text-lg font-medium "
                                            id="slide-over-title"
                                        >
                                            Added to Cart
                                        </h2>
                                    </div>
                                    <div className="relative flex-1 px-4 mt-6 sm:px-6">
                                        <div className="flex items-center gap-6 p-4 bg-white border-b-1 ">
                                            <img
                                                className="w-20"
                                                src={`/images/${productAddedToCart?.image}`}
                                                alt=""
                                            ></img>
                                            <div className=" text-chewyGray-dark">
                                                <strong>
                                                    {productAddedToCart?.brand}
                                                </strong>
                                                &nbsp;
                                                {productAddedToCart?.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Footer />
        </>
    );
};
