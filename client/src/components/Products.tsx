import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./Button";

export const Products = () => {
    interface Product {
        id?: number;
        name?: string;
        price?: number;
        image?: string;
        brand?: string;
        category?: string;
    }
    interface RouteParamData {
        name: string;
        title: string;
        banner: string;
        id: number;
    }

    const { categoryID } = useParams<{ categoryID: string }>();
    const [products, setProducts] = useState<Product[] | null>(null);
    const [category, setCategory] = useState<RouteParamData | null>(null);

    useEffect(() => {
        (async () => {
            const category = await fetch(`/api/categories/${categoryID}`).then(
                (response) => response.json()
            );
            setCategory(category);
        })();
    }, []);

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
            <div>
                <img src={`/images/${category?.banner}`} alt=""></img>
            </div>
            <h2>{category?.title}</h2>
            {products?.map((product: Product) => (
                <div key={product.id} className="flex gap-5 p-6 border-t">
                    <div className="inline-grid w-5/12 gap-y-6 ">
                        <img
                            src={`/images/${product?.image}`}
                            className="w-20 m-auto mt-1"
                            alt=""
                        ></img>
                        <Button className="block m-auto bg-chewyOrange">
                            AddToCart
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
                            <img src="/images/rating.svg"></img>&nbsp;
                            <span className=" text-chewyGray">
                                {Math.ceil(Math.random() * 100)}
                            </span>
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
