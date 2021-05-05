import React from "react";
import Link from "next/link";

export const Modal = ({ toggleOff, item }) => {
  const { product } = item;
  console.log(item);
  return (
    <div className="absolute z-10 bg-gray-200 opacity-75 h-screen w-screen">
      <div className="flex flex-col justify-around items-center h-full">
        <h1 className="text-4xl">Successfully added {product} to your cart!</h1>
        <div className="flex w-1/2 justify-around items-center">
          <button
            onClick={toggleOff}
            className="bg-blue-600 px-12 py-6 text-white rounded-xl hover:bg-blue-700  focus:outline-none"
          >
            Keep Shopping
          </button>
          <Link href="/cart">
            <button className="bg-red-600 px-12 py-6 text-white rounded-xl hover:bg-red-700 focus:outline-none">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
