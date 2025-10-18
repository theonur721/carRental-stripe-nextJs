import Image from "next/image";
import React from "react";
import gas from "../../assets/icons/gas.svg";
import mile from "../../assets/icons/mile.svg";
import transmission from "../../assets/icons/transmission.svg";
import arrow from "../../assets/icons/arr.svg";
import Link from "next/link";

const Card = ({ car }) => {
  const arr = [
    {
      icon: mile,
      name: car.mileage + " Miles",
    },
    {
      icon: gas,
      name: car.fuelType,
    },
    {
      icon: transmission,
      name: car.transmission,
    },
  ];
  return (
    <div className="border border-gray-200 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden">
      {/* Araç resmi */}
      <div className="relative h-[250px] bg-gray-50">
        <Image
          src={car.imageUrl}
          alt={`${car.make} ${car.model}`}
          fill
          className="object-contain p-4"
          unoptimized
        />
      </div>

      {/* İçerik */}
      <div className="py-6 px-8 sm:px-5">
        <h2 className="text-2xl font-bold text-gray-800">
          {car.make} {car.model}
        </h2>

        <hr className="border-gray-200 mt-3 mb-5" />

        {/* Özellikler */}
        <div className="flex justify-between">
          {arr.map((item, idx) => (
            <div
              key={item.name || idx}
              className="flex flex-col items-center gap-2 text-gray-700"
            >
              <Image src={item.icon} alt={item.name} className="w-6 h-6" />
              <p className="text-base sm:text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 mt-5 mb-5" />

        {/* Fiyat & Detay */}
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-gray-900">${car.price}</p>

          <Link
            className="text-blue-600 text-lg sm:text-base flex items-center gap-2 hover:text-blue-800 transition-colors font-semibold"
            href={`car/${car._id}`}
          >
            Detay
            <Image src={arrow} alt="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
