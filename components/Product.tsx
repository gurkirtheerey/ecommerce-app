import Link from "next/link";
import React, { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import ProductProps from "../types/Product";
// import { Modal } from "./Modal/Modal";
import Cookie from "js-cookie";
import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";

export const Product: React.FC<ProductProps> = ({
  product,
  price,
  quantity,
  image,
}) => {
  const [width, height] = useWindowSize();
  const { cart, setCart } = useContext(UserContext);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product: ProductProps) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <div
        className={`m-2 w-full h-72 shadow hover:shadow-2xl md:rounded-2xl lg:rounded-2xl transition 
          duration-200 ease-in md:h-96 lg:h-96 lg:w-64 lg:m-2 flex md:flex-col lg:flex-col items-center justify-between p-2
          md:justify-between lg:justify-between cursor-default`}
      >
        <Link href={`/products/${encodeURIComponent(product)}`}>
          <a className="flex flex-col items-center justify-center">
            <Image
              width={200}
              height={200}
              src="/shoe.jpeg"
              className="rounded-full"
            />

            <h4 className="italic text-sm font-semibold hover:text-indigo-600 md:m-2 lg:m-4 pt-4">
              {product}
            </h4>
            <div className=" flex flex-col text-xs md:px-4 lg:px-4 font-bold">
              {quantity < 10 && <span>{quantity} left!</span>}
            </div>
          </a>
        </Link>
        <button
          disabled={
            cart &&
            cart.length > 0 &&
            cart.filter((c) => c.product === product).length > 0
          }
          onClick={() => addToCart({ product, price, quantity, image })}
          className="self-end text-4xl px-4 py-2 rounded-none md:p-4 lg:p-4 md:w-full lg:w-ful hover:bg-black hover:text-white transition duration-500 ease-in focus:outline-none md:rounded-b-2xl lg:rounded-b-2xl disabled:opacity-50 disabled:cursor-not-allowed active:bg-red-300"
        >
          +
        </button>
      </div>
    </>
  );
};
