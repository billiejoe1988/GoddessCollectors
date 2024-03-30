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
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{item.title}</p>
        <small className="text-default-500">{item.description}</small>
        <h4 className="font-bold text-large">Price: ${item.price}</h4> 
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={item.title}
          className="object-cover rounded-xl"
          src={item.img}
          width={270}
        />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Link href={`/pages/Detail/${item.slug}`}>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            View More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardSimple;
