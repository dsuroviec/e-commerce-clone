import { Products } from "./Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";

export const CategoryProducts = () => {
    const { categoryID } = useParams<{ categoryID: string }>();
    const [products, setProducts] = useState<Product[] | null>(null);

    // Gets products that match the the category param on the path
    useEffect(() => {
        (async () => {
            const products = await fetch(`/api/products/${categoryID}`).then(
                (response) => response.json()
            );
            setProducts(products);
        })();
    }, [categoryID]);

    return <Products products={products} />;
};
