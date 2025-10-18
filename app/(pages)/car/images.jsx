import React from "react";
import Image from "next/image";
import Car1 from "../../assets/images/car1.png";
import Car2 from "../../assets/images/car2.png";
import Car3 from "../../assets/images/car3.png";
import Car4 from "../../assets/images/car4.png";

const Images = ({ url }) => {
  const thumbs = [Car1, Car2, Car3, Car4];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-3">
      {/* Ana görsel */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[460px] lg:h-[560px] rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden shadow-sm">
        <Image
          src={url}
          alt="vehicle"
          fill
          className="object-contain"
          sizes="(min-width:768px) 50vw, 100vw"
          unoptimized
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 
                     bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06)_0%,transparent_60%)]"
        />
      </div>

      {/* Küçük görseller */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-rows-2 md:h-full">
        {thumbs.map((src, i) => (
          <div
            key={i}
            className="
              relative rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm
              w-full aspect-square 
              mx-auto max-w-[140px] sm:max-w-[180px]   /* küçük ekranda daha ufak */
              md:max-w-none md:aspect-auto md:h-full  /* md+ ekranda sol sütunla aynı toplam yükseklik */
            "
          >
            <Image
              src={src}
              alt={`thumbnail-${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
