import Container from "@/app/components/container";
import Header from "@/app/components/header";
import React from "react";
import Breadcrumb from "../breadcrumb";
import Title from "../title";
import Images from "../images";
import Overview from "../overview";
import Orderbox from "../orderbox";

const getDetail = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/vehicles/${id}`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    throw Error(error.message);
  }
};

const Page = async ({ params }) => {
  const data = await getDetail(params.id);

  return (
    <div className="bg-white dark:bg-neutral-950">
      <Header designs={"bg-black text-white"} />

      <div className="px-5">
        <div className="max-w-7xl mx-auto w-full">
          <Breadcrumb car={data.vehicle} />
          <Title car={data.vehicle} />

          {/* Üst görsel */}
          <Images url={data.vehicle.imageUrl} />

          {/* İçerik + Sağ Panel */}
          <div className="mt-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            {/* Sol ana içerik */}
            <div className="xl:col-span-8 min-w-0 space-y-6">
              <Overview car={data.vehicle} />
              {/* İstersen burada açıklama, özellikler vb. ek bloklar olabilir */}
            </div>

            {/* Sağ yan panel (sticky kart) */}
            <div className="xl:col-span-4 min-w-0">
              <div className="xl:sticky xl:top-24">
                <Orderbox car={data.vehicle} />
              </div>
            </div>
          </div>

          <Container designs={"mt-5"} />
        </div>
      </div>
    </div>
  );
};

export default Page;
