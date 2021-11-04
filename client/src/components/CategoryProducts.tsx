import { Products } from "./Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, Category } from "../types";

export const CategoryProducts = () => {
    const { categoryID } = useParams<{ categoryID: string }>();
    const [products, setProducts] = useState<Product[] | null>(null);
    const [category, setCategory] = useState<Category | null>(null);

    // Get category that matches the url param categoryID
    useEffect(() => {
        (async () => {
            const category = await fetch(`/api/categories/${categoryID}`).then(
                (response) => response.json()
            );
            setCategory(category);
        })();
    }, [categoryID]);
    console.group(category);

    // Gets products that match the the category param on the path
    useEffect(() => {
        (async () => {
            const products = await fetch(
                `/api/categoryproducts/${categoryID}`
            ).then((response) => response.json());
            setProducts(products);
        })();
    }, [categoryID]);

    return (
        <>
            {category && (
                <div className="p-4 bg-chewyGray-lighter">
                    <div>
                        <img src={`/images/${category?.banner}`} alt=""></img>
                    </div>
                    <h2 className="py-6 text-2xl text-chewyGray-dark">
                        {category?.title}
                    </h2>
                </div>
            )}
            <Products products={products} category={category} />
        </>
    );
};
