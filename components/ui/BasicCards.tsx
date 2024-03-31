'use client'
import Link from 'next/link';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Gengar EX",
      img: "/c1.png",
      price: "$522.50",
    },
    {
      title: "Morti",
      img: "/c2.png",
      price: "$13.00",
    },
    {
      title: "Ferrotesta",
      img: "/c3.png",
      price: "$110.00",
    },
    {
      title: "Cinturon",
      img: "/c5.png",
      price: "$115.30",
    },
    {
      title: "Pokochos",
      img: "/c4.png",
      price: "$1115.70",
    },
    {
      title: "Drampa",
      img: "/c08.png",
      price: "$118.00",
    },
    {
      title: "Lickitung",
      img: "/c7.png",
      price: "$227.50",
    },
    {
      title: "Farigraf",
      img: "/c09.png",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-1 grid grid-cols-2 sm:grid-cols-8 py-8">
      {list.map((item, index) => (
        <Link key={index} href="/pages/TGCPokemon">
          <Card shadow="lg" isPressable onPress={() => console.log("item pressed")} radius="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                height="100%"
                alt={item.title}
                className="w-full object-cover h-[240px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between bg-white/75 rounded">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
