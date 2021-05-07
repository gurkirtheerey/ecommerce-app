import { signIn } from "next-auth/client";
import React from "react";

export const LoginPage = () => {
  return (
    <div className="h-screen grid place-items-center bg-black">
      <button
        className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700"
        onClick={() => signIn()}
      >
        Sign in to continue
      </button>
    </div>
  );
};
