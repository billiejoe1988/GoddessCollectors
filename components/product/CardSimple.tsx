import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

interface Item {
  title: string;
  description: string;
  instock: number;
  price: number;
  slug: string;
  img: string;
  type: string;
}

interface CardSimpleProps {
  item: Item;
}

const CardSimple: React.FC<CardSimpleProps> = ({ item }) => {
  return (
    <Card className="py-4 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-1rem)] mx-auto mb-8 bg-white bg-opacity-75 rounded-lg shadow-md mt-5">
      <div className="flex flex-col md:flex-row">
        <CardBody className="overflow-visible py-2 flex-1">
          <Image
            alt={item.title}
            className="object-cover rounded-l-lg"
            src={item.img}
            width={270}
          />
        </CardBody>
        <div className="flex-1 p-4">
          <CardHeader className="pb-2">
            <p className="text-tiny uppercase font-bold">{item.title}</p>
          </CardHeader>
          <CardBody className="overflow-visible">
            <small className="text-default-500">{item.description}</small>
            <h4 className="font-bold text-large">Price: ${item.price}</h4> 
          </CardBody>
          <CardFooter className="mt-auto">
            <Link href={`/pages/Detail/${item.slug}`}>
              <Button className="text-tiny text-white bg-gradient-to-tr from-pink-500 to-yellow-500 hover:bg-black/30 transition duration-300 p-2" variant="flat" color="default" radius="lg" size="xl">
                View More
              </Button>
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default CardSimple;

