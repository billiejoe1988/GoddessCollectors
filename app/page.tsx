import React from "react";
import BasicCards from "../components/ui/BasicCards";
import CustomCard from "../components/ui/CustomCard";
import ImgBanner from "../components/ui/ImgBanner";

export const metadata = {
  title: "Goddess Collectors",
  description: "For Collectors from Collectors",
  keywords: [
    "Arbelaiz.Dev",
    "Goddess Collectors",
    "tgc",
    "collectors",
    "pokemon",
    "one piece",
    "prime 1 studios",
    "Next Js",
  ],
  openGraph: {
    title: "Goddess Collectors",
    description: "For Collectors by Collectors",
    image:
      "https://imgs.search.brave.com/KXshxOTgYnCxWGQ8RtlXdx2aD9KEFkBVXRdzwyUh3Qo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzAwLzc1Lzg3/LzM2MF9GXzUwMDc1/ODc2NV81NHZFWk4y/ek9RRW9paWREY1JV/ZmlhdXlSRlJoWEtN/WC5qcGc",
    url: "https://goddess-collectors.vercel.app/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <main className="flex-grow w-full px-3 py-12">
          <div>
            <ImgBanner src="/b01.png" alt="BannerPokemon"  />
          </div>
        <section className="my-10 py-10">
          <h2 className="text-4xl font-semibold mt-6 text-orange-400">Best Sellers</h2>
          <BasicCards />
        </section>
        <div className="my-10">
            <ImgBanner src="/b0000.jpg" alt="BannerSculp"  />
        </div>
        <h2 className="text-4xl font-semibolde mt-6 text-orange-400">Next Arrived</h2>
        <section className="my-20 py-20">
          <CustomCard />
        </section>
        <div className="mt-20 pt-20">
            <ImgBanner src="/b2.jpg" alt="BannerSculp"  />
        </div>
      </main>
    </div>
  );
}
