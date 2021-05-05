import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import UserContext from "../context/userContext";
import { useSession, signIn } from "next-auth/client";
import { FaShoppingCart } from "react-icons/fa";

export const Navigation = () => {
  const { cart } = useContext(UserContext);
  const [length, setLength] = useState(0);
  const [session] = useSession();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLength(cart.length);
      console.log(length);
    }
  }, [cart]);

  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/">
        <button className="p-4 font-bold text-2xl focus:outline-none">
          Starter
        </button>
      </Link>
      <div className="flex justify-around w-1/3">
        <span className="text-black hover:text-indigo-800 font-semibold">
          <Link href="/products">Products</Link>
        </span>
        <span className="text-black hover:text-indigo-800 font-semibold">
          <Link href="/profile">My Account</Link>
        </span>
        <span className="text-black hover:text-indigo-800 font-semibold">
          <Link href="/products">Blog</Link>
        </span>
      </div>
      <div className="w-48 flex justify-around items-center">
        {!session ? (
          <>
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
          </>
        ) : (
          <Link href="/cart">
            <div className="flex text-black hover:text-indigo-800 font-semibold cursor-pointer">
              <FaShoppingCart color="black" size={25} />
              <span className="text-xs font-semibold mb-1 pl-1 cursor-pointer">
                {length}
              </span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};
