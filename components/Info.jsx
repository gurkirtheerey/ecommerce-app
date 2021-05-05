import React from "react";

export const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 w-full">
      <h1 className="text-4xl font-semibold my-4">
        Trusted by over 5000+ innovators
      </h1>
      <p className="text-gray-600 my-2">
        We look forward to seeing your art and creative design change the world.
        <strong> For the better.</strong>
      </p>
      <div className="flex justify-evenly w-full my-8">
        <div className="flex flex-col items-center">
          <span className="text-indigo-300 text-3xl font-bold my-4">
            $500k+
          </span>
          <p className="font-semibold ">Revenue</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-indigo-300 text-3xl font-bold my-4">200+</span>
          <p className="font-semibold ">Products</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-indigo-300 text-3xl font-bold my-4">15</span>
          <p className="font-semibold ">Categories</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-indigo-300 text-3xl font-bold my-4">1</span>
          <p className="font-semibold ">Employee</p>
        </div>
      </div>
    </div>
  );
};
