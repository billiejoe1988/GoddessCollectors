import React from "react";
import BasicCards from "../components/ui/BasicCards";
import CustomCard from "../components/ui/CustomCard";
import ImgBanner from "../components/ui/ImgBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <main className="flex-grow w-full px-3 py-12">
          <div>
            <ImgBanner src="/b01.png" alt="BannerPokemon" />
          </div>
        <section>
          <h2 className="text-2xl font-semibold my-6">Best Sellers</h2>
          <BasicCards />
        </section>
        <div className="my-10">
            <ImgBanner src="/b0000.jpg" alt="BannerSculp" />
        </div>
        <h2 className="text-2xl font-semibold m-6">Pre-Sales</h2>
        <section className="my-20 py-20">
          <CustomCard />
        </section>
        <div className="mt-20 pt-20">
            <ImgBanner src="/b2.jpg" alt="BannerSculp" />
        </div>
      </main>
    </div>
  );
}
