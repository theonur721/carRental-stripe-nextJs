"use client";

import Loader from "@/app/components/loader";
import { useState } from "react";

const Orderbutton = ({ car }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    // ödeme oturumu için backend'e satın alınacak araç bilgisi gönderilir
    fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => (window.location.href = data.url))
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleClick}
      className="
        w-full rounded-lg
        bg-blue-500 hover:bg-blue-600
        text-white font-semibold py-2.5 transition
      "
    >
      {isLoading ? <Loader /> : "Sipariş Et"}
    </button>
  );
};

export default Orderbutton;
