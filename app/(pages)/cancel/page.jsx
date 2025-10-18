"use client";

import React from "react";
import { FiXCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-950 text-center px-4">
      <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-2xl p-8 max-w-md w-full">
        <FiXCircle className="text-red-500 text-6xl mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          Payment Failed - Ödeme Başarısız
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Unfortunately, your payment could not be completed. Please try again
          or contact support.
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Page;
