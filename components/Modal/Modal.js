import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Modal.module.css";
import Image from "next/image";

export const Modal = ({ toggleOff, item }) => {
  const { product, image } = item;
  const inputRef = useRef();
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      inputRef.current.focus();
    }
  }, []);

  window.addEventListener("resize", () => {
    setSize(document.body.scrollHeight);
  });

  console.log(document.body.scrollHeight);

  return (
    <div
      className={styles.container}
      style={{ height: document.body.scrollHeight }}
    >
      <div className={styles.screen}>
        <div className={`${styles.modal} overflow-y-hidden`}>
          <div className="flex flex-col justify-evenly items-center h-full">
            <Image
              src="/shoe.jpeg"
              width={200}
              height={200}
              className="rounded-full h-6 w-6"
            />
            <h1 className="text-xs md:text-sm lg:text-lg font-semibold text-center">
              <strong>{product}</strong> added to your cart!
            </h1>
            <div className="flex flex-col w-1/2 justify-around items-center">
              <button
                ref={inputRef}
                onClick={toggleOff}
                className="bg-black px-6 py-3 mb-2 text-white focus:outline-none focus:animate-pulse"
              >
                Keep Shopping
              </button>
              <Link href="/cart">
                <button className=" px-6 py-3 text-gray-300 focus:outline-none font-semibold underline">
                  Go to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
