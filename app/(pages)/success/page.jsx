"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-950 text-center px-4">
      <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-2xl p-8 max-w-md w-full">
        <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          Payment Successful - Ödeme Başarılı
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Your payment has been processed successfully. Thank you for your
          purchase!
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Page;
