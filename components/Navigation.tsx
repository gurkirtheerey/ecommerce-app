import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import UserContext from "../context/userContext";
import { useSession, signIn, signOut } from "next-auth/client";

export const Navigation = () => {
  const { cart } = useContext(UserContext);
  const [length, setLength] = useState(0);
  const [session, loading] = useSession();
  if (session) {
    console.log("in session: ", session);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLength(cart.length);
      console.log(length);
    }
  }, [cart]);

  return (
    <nav className="flex bg-indigo-300 justify-between items-center p-4">
      <Link href="/">
        <button className="p-4 font-bold text-2xl focus:outline-none">
          Starter
        </button>
      </Link>
      <div className="flex justify-around w-1/3">
        <span className="hover:text-pink-300 font-semibold">
          <Link href="/products">Products</Link>
        </span>
        <span className="hover:text-pink-300 font-semibold">
          <Link href="/products">Blog</Link>
        </span>
        <span className="hover:text-pink-300 font-semibold">
          <Link href="/products">Contact</Link>
        </span>
        <span className="hover:text-pink-300 font-semibold">
          <Link href="/products">Portfolio</Link>
        </span>
        <span>
          <Link href="/cart">
            <div className="flex hover:text-pink-300 font-semibold">
              <span className="cursor-pointer">Cart</span>
              <span className="text-xs font-semibold mb-1 pl-1 cursor-pointer">
                {length}
              </span>
            </div>
          </Link>
        </span>
      </div>
      <div className="w-48 flex justify-around items-center">
        <button onClick={() => signIn()}>Login</button>
        <button className="bg-indigo-600 py-2 px-4 rounded text-white font-semibold hover:bg-indigo-700">
          Sign up
        </button>
      </div>
    </nav>
  );
};
