import React from "react";
import ProductProps from "../types/Product";

export const CheckoutProduct: React.FC<ProductProps> = ({
  image,
  quantity,
  price,
  product,
}) => {
  return (
    <div className="flex text-sm h-48 max-w-lg my-4 ml-6 shadow-xl bg-gray-200">
      <img src={image} className="w-48 p-2 rounded-xl" />
      <div className=" flex flex-col text-md p-2">
        <h1 className="font-bold">{product}</h1>
        <p className="italic">{price}</p>
      </div>
    </div>
  );
};
