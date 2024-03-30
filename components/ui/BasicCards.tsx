'use client'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "/c1.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/c2.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/c3.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/c5.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/c4.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/c08.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/c7.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/c09.png",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-1 grid grid-cols-2 sm:grid-cols-8 py-8">
      {list.map((item, index) => (
        <Card shadow="lg" key={index} isPressable onPress={() => console.log("item pressed")} radius="sm">
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
          <CardFooter className="text-small justify-between bg-white/75 rounded">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
