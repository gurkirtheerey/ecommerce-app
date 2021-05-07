import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import UserContext from "../context/userContext";
import { useSession, signIn, signOut } from "next-auth/client";
import { FaShoppingCart } from "react-icons/fa";
import { Loader } from "./Loader/Loader";

export const Navigation = () => {
  const { cart } = useContext(UserContext);
  const [length, setLength] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [session, loading] = useSession();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLength(cart?.length || 0);
    }
  }, [cart]);

  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/">
        <button className="p-4 font-bold text-2xl focus:outline-none">
          Starter
        </button>
      </Link>
      <div className="flex justify-around w-1/2">
        <span className="text-black hover:text-indigo-800 font-semibold">
          <Link href="/products">Products</Link>
        </span>
        <span className="text-black hover:text-indigo-800 font-semibold">
          <Link href="/profile">Categories</Link>
        </span>
        <span className="text-black hover:text-indigo-800 font-semibold">
          <Link href="/profile">About</Link>
        </span>
        <span className="text-black hover:text-indigo-800 font-semibold">
          <Link href="/profile">Contact</Link>
        </span>
        <span className="text-black hover:text-indigo-800 font-semibold">
          <Link href="/profile">Blog</Link>
        </span>
      </div>
      {!session ? (
        <div className="flex justify-evenly items-center w-1/6">
          <div className="w-full flex justify-evenly">
            <button
              className="font-semibold text-xl hover:text-indigo-600"
              onClick={() => signIn()}
            >
              Login
            </button>
            <button
              className="bg-indigo-600 py-2 px-4 rounded text-white font-semibold hover:bg-indigo-700"
              onClick={() => signIn()}
            >
              Sign up
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-1/3 justify-center items-center">
          <div
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-1/3 text-center"
          >
            <span className="text-black hover:text-gray-500 font-semibold w-full py-6 cursor-pointer">
              <Link href="/profile">Account</Link>
            </span>
            {hovered && (
              <div
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="bg-white border-2 border-gray-200 shadow-2xl w-64 z-10 absolute mt-4 h-auto flex flex-col rounded-xl transition duration-300 ease"
              >
                <div className="grid grid-cols-2 grid-rows-3 p-4 h-48 text-center place-items-center text-xs">
                  <button
                    className="font-bold text-center hover:text-gray-400"
                    onClick={() => signOut()}
                  >
                    Profile Settings
                  </button>
                  <button className="font-bold text-center hover:text-gray-400">
                    <Link href="/cart">Cart</Link>
                  </button>
                  <button
                    className="font-bold text-center hover:text-gray-400"
                    onClick={() => signOut()}
                  >
                    Contact
                  </button>

                  <button
                    className="font-bold text-center hover:text-gray-400"
                    onClick={() => signOut()}
                  >
                    Products
                  </button>
                  <button
                    className="font-bold text-center hover:text-gray-400"
                    onClick={() => signOut()}
                  >
                    About
                  </button>
                  <button
                    className="font-bold text-center hover:text-gray-400"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
          <Link href="/cart">
            <div className="flex text-black hover:text-indigo-800 font-semibold cursor-pointer p-4">
              <FaShoppingCart color="black" size={25} />
              <span className="text-xs font-semibold mb-1 pl-1 cursor-pointer">
                {length}
              </span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};
