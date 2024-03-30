import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import BasicCards from "../components/ui/BasicCards";
import CustomCard from "../components/ui/CustomCard";
import BackgroundSVG from "../components/ui/BackgroundSVG";
import ImgBanner from "../components/ui/ImgBanner";
import CardSimple from "../components/ui/CardSimple"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <main className="flex-grow w-full px-3 py-12">
        <section>
          <div>
            <ImgBanner src="/exp3P.jpg" alt="BannerPokemon" />
          </div>
          <BasicCards />
        </section>
        <section className="my-20 py-20">
          <div>
            <ImgBanner src="/faceSD.jpg" alt="BannerPokemon" />
          </div>
          <CustomCard />
        </section>
        <section className="my-20 py-20">
           <div>
            <ImgBanner src="/expP5.jpg" alt="BannerPokemon" />
          </div>
        </section>
      </main>
    </div>
  );
}

