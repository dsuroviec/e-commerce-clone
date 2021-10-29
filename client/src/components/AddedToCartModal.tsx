import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AddedToCartModal = () => {
    interface Product {
        id?: number | null;
        name?: string | null;
        price?: number | null;
        image?: string | null;
        brand?: string | null;
        category?: string | null;
    }

    const { categoryID } = useParams<{ categoryID: string }>();
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        (async () => {
            const products = await fetch(`/api/products/${categoryID}`).then(
                (response) => response.json()
            );
            setProducts(products);
        })();
    }, []);

    return (
        <div className="w-1/2 h-full">
            HELLLOOO THIS IS THE CART CONFIRMATION MODAL
        </div>
    );
};
