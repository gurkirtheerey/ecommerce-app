import React, { useContext } from "react";
import { CheckoutProduct } from "./CheckoutProduct";
import UserContext from "../context/userContext";
import { loadStripe } from "@stripe/stripe-js";
import { Navigation } from "./Navigation";
import Link from "next/link";
import useStripeCheckout from "../hooks/useStripeCheckout";

const stripePromise = loadStripe("pk_test_XOf0XArkLI9qQDKK7unsnEXB00YZwpLBn7");

export const Checkout = () => {
  const { cart, setCart } = useContext(UserContext);

  if (cart.length === 0) {
    return (
      <div>
        <Navigation />
        <button className="h-screen flex items-center justify-center w-full cursor-default border-none focus:outline-none">
          <Link href="/products">
            <span className="cursor-pointer font-semibold">
              It's empty in here... add some items to your cart!
            </span>
          </Link>
        </button>
      </div>
    );
  }

  const handleCheckout = async () => {
    await useStripeCheckout("/api/hello", cart);
  };

  const removeFromCart = async (product: any) => {
    const found = cart.filter((p) => p.product !== product.product);
    setCart(found);
  };

  return (
    <>
      <div className="h-screen flex justify-around">
        <div>
          <div className="w-full m-8">
            <h1 className="text-center my-4 font-bold text-3xl">
              Payment Information
            </h1>

            <button
              onClick={handleCheckout}
              className="bg-indigo-600 w-full py-4 text-white hover:bg-indigo-700 mt-4"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-1/3 m-8">
          <h1 className="text-center my-4 font-bold text-3xl">Order Summary</h1>
          {cart && cart.length && (
            <div className="h-1/2 flex flex-col overflow-y-scroll shadow-lg">
              {cart.map((product, i) => (
                <React.Fragment key={product.product}>
                  <CheckoutProduct
                    price={product.price}
                    quantity={product.quantity}
                    image={product.image}
                    product={product.product}
                    onClick={() => removeFromCart(product)}
                  />
                </React.Fragment>
              ))}
            </div>
          )}
          <button
            onClick={() => handleCheckout()}
            className="bg-indigo-600 w-full py-4 text-white hover:bg-indigo-700 mt-4"
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="flex">you might also like...</div>
    </>
  );
};
