import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "./Products";
import { Product, Brand } from "../types";

export const BrandProducts = () => {
  const { brandID } = useParams<{ brandID: string }>();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [brand, setBrand] = useState<Brand | null>(null);

  // Gets the brand name of the selected products
  useEffect(() => {
    (async () => {
      const brand = await fetch(`/api/brand/${brandID}`).then((response) =>
        response.json()
      );
      setBrand(brand);
    })();
  }, [brandID]);

  // Gets products that match the the category param on the path
  useEffect(() => {
    (async () => {
      const products = await fetch(`/api/brandproducts/${brandID}`).then(
        (response) => response.json()
      );
      setProducts(products);
    })();
  }, [brandID]);

  return (
    <div className="md:w-10/12 mx-auto">
      {brand && <h1 className="p-4 text-xl">{brand.name}&nbsp;Products</h1>}
      <Products products={products} />
    </div>
  );
};
