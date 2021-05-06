import Link from "next/link";
import React, { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import ProductProps from "../types/Product";
import { Provider } from "next-auth/client";
import { Modal } from "./Modal/Modal";

export const Product: React.FC<ProductProps> = ({
  product,
  price,
  quantity,
  image,
  onClick,
}) => {
  const { cart, setCart } = useContext(UserContext);

  const addToCart = async (e: any, product: ProductProps) => {
    e.preventDefault();
    setCart([...cart, product]);
    onClick();
  };

  return (
    <>
      <div className="m-4 shadow hover:shadow-2xl rounded-2xl transition duration-200 ease-in h-96 w-64 flex flex-col items-center justify-between cursor-default">
        <Link href={`/products/${encodeURIComponent(product)}`}>
          <a>
            <img src="shoe.jpeg" className="h-48 lg:64 w-full rounded-lg" />
            <h4 className="italic text-sm hover:text-indigo-600 m-4">
              {product}
            </h4>
            <div className="w-full flex flex-col text-xs px-4 font-bold">
              {quantity < 10 && <span>{quantity} left!</span>}
            </div>
          </a>
        </Link>

        <button
          disabled={cart.filter((c) => c.product === product).length > 0}
          onClick={(e) => addToCart(e, { product, price, quantity, image })}
          className="p-4 w-full hover:bg-black hover:text-white transition duration-500 ease-in focus:outline-none rounded-b-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
    </>
  );
};
