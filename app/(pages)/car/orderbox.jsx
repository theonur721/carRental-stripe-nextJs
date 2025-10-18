"use client";

import Image from "next/image";
import pp from "../../assets/images/pp.png";
import loc from "../../assets/icons/loc.svg";
import tel from "../../assets/icons/tel.svg";
import Orderbutton from "./orderbutton";

const Orderbox = ({ car }) => {
  return (
    <aside
      className="
        w-full max-xl:mt-10 xl:col-span-1
        border border-gray-200/70 bg-white dark:bg-neutral-900
        shadow-sm rounded-2xl p-5
        xl:sticky xl:top-24
      "
    >
      {/* Galeri başlığı */}
      <div className="flex items-center gap-4">
        <Image
          src={pp}
          alt="profile"
          width={56}
          height={56}
          className="rounded-full"
          priority
        />
        <div className="text-base">
          <h2 className="font-semibold leading-tight">Bizim Galeri</h2>
          <p className="text-sm text-gray-500">İstanbul, Moda</p>
        </div>
      </div>

      {/* İletişim kısa yolları */}
      <div
        className="
          grid grid-cols-2 gap-2 my-5
          text-sm
        "
      >
        <button
          type="button"
          className="
            group inline-flex items-center justify-center gap-2
            rounded-lg border border-gray-200 px-3 py-2
            hover:bg-gray-50 dark:hover:bg-neutral-800 transition
          "
        >
          <Image src={loc} alt="Lokasyon" width={18} height={18} />
          <span className="font-medium">Lokasyonu Gör</span>
        </button>

        <a
          href="tel:+9055577777887"
          className="
            group inline-flex items-center justify-center gap-2
            rounded-lg border border-gray-200 px-3 py-2
            hover:bg-gray-50 dark:hover:bg-neutral-800 transition
          "
        >
          <Image src={tel} alt="Telefon" width={18} height={18} />
          <span className="font-medium">+90 555 777 77 87</span>
        </a>
      </div>

      {/* Kiralama butonu */}
      <Orderbutton car={car} />

      {/* WhatsApp butonu */}
      <button
        type="button"
        className="
          w-full mt-3 rounded-lg
          bg-green-500 hover:bg-green-600
          text-white font-semibold py-2.5 transition
        "
        aria-label="WhatsApp ile iletişime geç"
      >
        WhatsApp
      </button>
    </aside>
  );
};

export default Orderbox;
