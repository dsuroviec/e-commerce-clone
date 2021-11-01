import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./Button";
import { AddedToCartModal } from "./AddedToCartModal";
import CartContext from "../contexts/CartContext";
import _ from "lodash";
export const Products = () => {
    interface Category {
        name: string;
        title: string;
        banner: string;
        id: number;
    }
    const { cart, setCart } = useContext(CartContext)!;
    const { categoryID } = useParams<{ categoryID: string }>();
    const [products, setProducts] = useState<any>(null);
    const [category, setCategory] = useState<Category | null>(null);
    const [showAddedToCartModal, setShowAddedToCartModal] = useState(false);

    console.log(cart, "cart in products");

    // Gets categories for category section and cards
    useEffect(() => {
        (async () => {
            const category = await fetch(`/api/categories/${categoryID}`).then(
                (response) => response.json()
            );
            setCategory(category);
        })();
    }, []);

    // Gets products that match the path
    useEffect(() => {
        (async () => {
            const products = await fetch(`/api/products/${categoryID}`).then(
                (response) => response.json()
            );
            setProducts(products);
        })();
    }, []);

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
                                    quantityOfSelectedProductAlreadyInCart > 2
                                ) {
                                    return alert(
                                        `There's a order limit of ${quantityOfSelectedProductAlreadyInCart} for this item`
                                    );
                                } else {
                                    setShowAddedToCartModal(true);
                                    cart
                                        ? setCart([...cart, product])
                                        : setCart([product]);
                                }
                            }}
                        >
                            Add To Cart
                        </Button>
                        {showAddedToCartModal && <AddedToCartModal />}
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
                            <img src="/images/rating.svg"></img>&nbsp;
                            <span className=" text-chewyGray">48</span>
                        </div>
                        <span className="text-xs">
                            FREE 1-3 day shipping over $49
                        </span>
                    </div>
                </div>
            ))}
            <Footer />
        </>
    );
};
