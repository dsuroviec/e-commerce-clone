import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Products = () => {
    interface Product {
        id?: number;
        name?: string;
        price?: number;
        image?: string;
        brand?: string;
    }
    interface RouteParamData {
        name: string;
        title: string;
        banner: string;
        id: number;
    }

    const { categoryName } = useParams<{ categoryName: string }>();
    const [products, setProducts] = useState<Product[] | null>(null);
    const [routeParamData, setRouteParamData] = useState<RouteParamData | null>(
        null
    );
    useEffect(() => {
        (async () => {
            const routeParamData = await fetch("/api/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ categoryName }),
            }).then((response) => response.json());
            setRouteParamData(routeParamData);
        })();
    }, []);
    console.log("routeParamData", routeParamData);
    useEffect(() => {
        (async () => {
            const products = await fetch("/api/products").then((response) =>
                response.json()
            );
            setProducts(products);
        })();
    }, []);

    console.log(products);

    return (
        <>
            <Header />
            <div>
                <img src="" alt=""></img>
            </div>
            <h2>{routeParamData?.title}</h2>
            {products?.map((product: Product) => (
                <div key={product.id} className="flex gap-5 p-6 border-t">
                    <div className="w-5/12 ">
                        <img
                            src={product.image}
                            className="w-20 m-auto mt-1"
                            alt=""
                        ></img>
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
                            <img src="rating.svg"></img>&nbsp;
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
