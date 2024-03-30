import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

const CardSimple: React.FC<{
  imageUrl: string;
  altText: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}> = ({ imageUrl, altText, description, buttonText, buttonLink }) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt={altText}
        className="object-cover"
        height={200}
        src={imageUrl}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{description}</p>
        <Link href={buttonLink}>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              {buttonText}
            </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardSimple;
