import React from "react";
import MainContainerSVG from "./SVG/MainContainerSVG";
import { signIn } from "next-auth/client";

export const Main = () => {
  return (
    <div className="flex items-center justify-evenly self-center w-4/5 m-auto">
      <div>
        <h4 className="text-4xl font-bold my-4">Create. Inspire. Grow</h4>
        <p className="text-gray-700 mb-2">
          Upload your design, art, or creation and <strong>flourish</strong>.
        </p>
        <p className="text-gray-700 mb-4">
          Small businesses like you need a middle ground. Here's where we come
          in.
        </p>
        <button
          onClick={() => signIn()}
          className="bg-indigo-600 py-4 px-8 text-white hover:bg-indigo-700 rounded"
        >
          Sign Up To Shop!
        </button>
      </div>
      <MainContainerSVG />
    </div>
  );
};
