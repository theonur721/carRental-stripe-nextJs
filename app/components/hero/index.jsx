import Image from "next/image";
import React from "react";
import { models } from "../../contants";

const Hero = () => {
  return (
    <div className="h-[80vh] grid place-items-center text-white bg-[linear-gradient(#00000094,#00000094),url('../assets/images/car-bg.jpg')] bg-center bg-cover">
      <div className="text-center flex flex-col gap-8">
        <p>Yakındaki kiralık araçları keşfet</p>

        <h1 className="text-4xl md:text-5xl font-bold">
          Kendin için Mükemmel aracı bul
        </h1>

        <p>Kendine uygun modeli belirle</p>

        <div className="flex gap-4 justify-center flex-wrap">
          {models.map((item) => (
            <button
              className="px-3 py-1 rounded-full bg-gray-100/25 flex gap-2 items-center hover:bg-gray-500"
              key={item.name}
            >
              <Image src={item.icon} alt="car icon" />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
