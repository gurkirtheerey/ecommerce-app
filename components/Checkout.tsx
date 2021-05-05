import React, { useContext } from "react";
import { CheckoutProduct } from "./CheckoutProduct";
import UserContext from "../context/userContext";

export const Checkout = () => {
  const { cart } = useContext(UserContext);

  if (cart.length === 0) {
    return <h1>There's nothing in here!</h1>;
  }

  return (
    <div className="h-screen flex justify-around">
      <div>
        <div className="w-full m-8">
          <h1 className="text-center my-4 font-bold text-3xl">
            Payment Information
          </h1>

          <button className="bg-indigo-600 w-full py-4 text-white hover:bg-indigo-700 mt-4">
            Buy Now
          </button>
        </div>
      </div>
      <div className="w-1/3 m-8">
        <h1 className="text-center my-4 font-bold text-3xl">Order Summary</h1>
        {cart && cart.length && (
          <div className="h-1/2 flex flex-col overflow-y-scroll shadow-lg">
            {cart.map((cart) => (
              <React.Fragment key={cart.id}>
                <CheckoutProduct
                  price={cart.price}
                  quantity={cart.quantity}
                  image={cart.image}
                  product={cart.product}
                />
              </React.Fragment>
            ))}
          </div>
        )}
        <button className="bg-indigo-600 w-full py-4 text-white hover:bg-indigo-700 mt-4">
          Buy Now
        </button>
      </div>
    </div>
  );
};
