import React from "react";
import ProductProps from "../types/Product";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";

export const CheckoutProduct: React.FC<ProductProps> = ({
  image,
  quantity,
  price,
  product,
  onClick,
}) => {
  return (
    <div className="flex text-sm max-h-48 m-4 shadow hover:shadow-xl transition duration-500 ease-in-out">
      <Image
        src="/shoe.jpeg"
        height={200}
        width={200}
        className="w-48 p-2 rounded-xl"
      />
      <div className=" flex flex-col text-md p-2 w-full">
        <div className="flex justify-between">
          <h1 className="font-bold">{product}</h1>
          <FaTrashAlt onClick={onClick} size={18} className="cursor-pointer" />
        </div>
        <p className="italic">{price}</p>
      </div>
    </div>
  );
};
