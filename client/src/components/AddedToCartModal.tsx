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
        <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
            <div className="px-4 sm:px-6">
                <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                >
                    Panel title
                </h2>
            </div>
            <div className="relative flex-1 px-4 mt-6 sm:px-6">
                {/* <!-- Replace with your content --> */}
                <div>Hello</div>
                {/* <!-- /End replace --> */}
            </div>
        </div>
    );
};
