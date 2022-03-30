import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./Button";
import CartContext from "../contexts/CartContext";
import TokenContext from "../contexts/TokenContext";
import _ from "lodash";
import { HiTruck } from "react-icons/hi";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext)!;
  const { token } = useContext(TokenContext)!;

  // react-router history for keep shopping button
  let navigate = useNavigate();

  return (
    <>
      {!cart ? (
        <>
          <h1 className="text-2xl text-center mt-20">Your cart is empty.</h1>
          <img className="m-auto" src="/images/empty-cart.png" alt=""></img>

          <Button
            className="block m-auto my-6 bg-crunchyOrange"
            onClick={() => {
              navigate("/");
              console.log(navigate, "history");
            }}
          >
            Continue Shopping
          </Button>
        </>
      ) : (
        <div className="max-w-[700px] mx-auto">
          <h1 className="px-4 pt-4 pb-1 text-2xl font-medium">
            Your Shopping Cart
          </h1>

          <div className="p-4 border-t bg-crunchyGray-lighter">
            <span className="flex items-center justify-center text-crunchyGray-darkest text-crunchyGray-dark">
              <strong>
                {`$${Math.max(
                  50.0 -
                    cart.reduce((total, product) => total + product.price, 0),
                  0
                ).toFixed(2)}`}
              </strong>
              &nbsp; until Free shipping &nbsp;
              <HiTruck size="24" />
            </span>

            <div className="flex items-center justify-between">
              <span>Subtotal ({cart?.length} items):</span>
              <span className="flex text-lg font-bold text-crunchyRed">
                {`$${cart
                  .reduce((total, product) => total + product.price, 0)
                  .toFixed(2)}`}
              </span>
            </div>

            <Link to={token ? "/checkout" : "/logIn"}>
              <Button className="block w-full mt-4 bg-crunchyOrange">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
          {_.sortBy(_.uniqBy(cart, "id"), "id")?.map((product, index) => (
            <div className="p-4 border-b rounded-lg" key={product.id}>
              <div className="flex gap-5">
                <div className="grid gap-2">
                  <img
                    className="block w-20 m-auto mt-1"
                    src={`/images/${product.image}`}
                    alt=""
                  ></img>
                  <span className="test-sm text text-crunchyGreen">
                    In&nbsp;Stock
                  </span>
                </div>
                <div className="grid ">
                  <div>
                    <strong>{product.brand}</strong>
                    &nbsp;
                    {product.name}
                  </div>
                  <span className="text-lg font-bold text-crunchyRed">
                    ${product.price}
                  </span>
                </div>
              </div>
              <div className="mt-3 border-t ">
                <div className="flex my-4 text-sm">
                  <img
                    className="w-20"
                    src="/images/autoship-logo.svg"
                    alt=""
                  ></img>
                  &nbsp; - Save 5% on future Autoship orders
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <label htmlFor="quantity">Quantity:</label>
                    &nbsp;
                    <select
                      defaultValue={_.countBy(cart, "id")[product.id]}
                      onChange={({ target: { value } }: any) => {
                        // Remove all products that match id of modified product
                        const newCart = cart?.filter(
                          (item) => item.id !== product.id
                        );

                        // Add the quantity of modified product back to the array
                        _.times(value, () => newCart.push(product));
                        setCart(newCart);
                      }}
                      name="quantity"
                      className="w-8"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>6</option>
                    </select>
                  </div>
                  <Button
                    className="bg-crunchyBlue-darker "
                    onClick={() => {
                      const updatedCart = [...cart].filter(
                        (item) => item.id !== product.id
                      );
                      if (updatedCart.length) {
                        setCart([...updatedCart]);
                      } else {
                        setCart(null);
                      }
                    }}
                  >
                    Remove Items
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
