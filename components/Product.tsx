import Link from "next/link";
import React, { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import ProductProps from "../types/Product";

export const Product: React.FC<ProductProps> = ({
  product,
  price,
  quantity,
  image,
}) => {
  const { cart, setCart } = useContext(UserContext);

  const addToCart = async (product: ProductProps) => {
    setCart([...cart, product]);
  };
  return (
    <div className="hover:bg-gray-100 shadow hover:shadow-xl rounded-lg transition duration-200 ease-in h-96 w-64 flex flex-col items-center justify-between">
      <Link href={`/products/${encodeURIComponent(product)}`}>
        <a>
          <img src={image} className="h-64 w-full rounded-lg" />
          <h4 className="italic text-sm hover:text-indigo-600 m-4">
            {product}
          </h4>
          <div className="w-full flex flex-col text-xs px-4 font-bold">
            {quantity < 10 && <span>{quantity} left!</span>}
          </div>
        </a>
      </Link>

      <button
        onClick={() => addToCart({ product, price, quantity, image })}
        className="p-2 w-full bg-indigo-300 hover:bg-indigo-400 text-white focus:outline-none rounded-top-leftlg"
      >
        Add
      </button>
    </div>
  );
};
