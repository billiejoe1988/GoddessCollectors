import React from "react";
import Link from 'next/link';
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function CustomCard() {
  return (
    <div className="flex justify-center items-center h-screen mt-9">
      <div className="max-w-[1200px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer relative" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <Link href="/pages/Sculpture">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/bzSD.avif"
            />
          </Link>
          <CardHeader className="absolute top-1 left-1 right-1 z-10 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Next Arrived</p>
            <h4 className="text-white font-medium text-large">Guntz 1/6</h4>
          </CardHeader>
          <CardFooter className="absolute bottom-1 left-1 right-1 z-10 p-4 bg-black bg-opacity-50 text-white text-small" style={{ backdropFilter: "blur(8px)" }}>
            Discover the new Guntz 1/6 statue, now available for pre-order! Limited edition, don't miss out!
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer relative" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <Link href="/pages/Sculpture">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/hqSD.avif"
            />
          </Link>
          <CardHeader className="absolute top-1 left-1 right-1 z-10 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Coming Soon</p>
            <h4 className="text-white font-medium text-large">Harley Queen Sideshow 1/6</h4>
          </CardHeader>
          <CardFooter className="absolute bottom-1 left-1 right-1 z-10 p-4 bg-black bg-opacity-50 text-white text-small" style={{ backdropFilter: "blur(8px)" }}>
            Be ready to meet the stunning Harley Queen Sideshow 1/6 statue! Pre-order now and add it to your collection!
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer relative" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <Link href="/pages/Sculpture">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/jkSD.avif"
            />
          </Link>
          <CardHeader className="absolute top-1 left-1 right-1 z-10 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">New Arrival</p>
            <h4 className="text-white font-medium text-large">Joker Prime 1 1/4</h4>
          </CardHeader>
          <CardFooter className="absolute bottom-1 left-1 right-1 z-10 p-4 bg-black bg-opacity-50 text-white text-small" style={{ backdropFilter: "blur(8px)" }}>
            Introducing the breathtaking Joker Prime 1 1/4 statue! Get ready to experience the madness!
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer relative" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <Link href="/pages/Sculpture">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/grSD.avif"
            />
          </Link>
          <CardHeader className="absolute top-1 left-1 right-1 z-10 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Exclusive Edition</p>
            <h4 className="text-white font-medium text-large">Grogu 1/10 Iron Studios</h4>
          </CardHeader>
          <CardFooter className="absolute bottom-1 left-1 right-1 z-10 p-4 bg-black bg-opacity-50 text-white text-small" style={{ backdropFilter: "blur(8px)" }}>
            Unveiling the exclusive edition Grogu 1/10 Iron Studios statue! A must-have for any collector!
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer relative" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <Link href="/pages/Sculpture">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/lolSD.avif"
            />
          </Link>
          <CardHeader className="absolute top-1 left-1 right-1 z-10 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Coming Soon</p>
            <h4 className="text-white font-medium text-large">Ahri League of Legend 1/4</h4>
          </CardHeader>
          <CardFooter className="absolute bottom-1 left-1 right-1 z-10 p-4 bg-black bg-opacity-50 text-white text-small" style={{ backdropFilter: "blur(8px)" }}>
            Prepare to embark on an epic journey with the Ahri League of Legend 1/4 statue! Coming soon, stay tuned!
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer relative" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <Link href="/pages/Sculpture">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/srSD.avif"
            />
          </Link>
          <CardHeader className="absolute top-1 left-1 right-1 z-10 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Limited Edition</p>
            <h4 className="text-white font-medium text-large">Saruman Wepa 1/4</h4>
          </CardHeader>
          <CardFooter className="absolute bottom-1 left-1 right-1 z-10 p-4 bg-black bg-opacity-50 text-white text-small" style={{ backdropFilter: "blur(8px)" }}>
            Don't miss out on the limited edition Saruman Wepa 1/4 statue! A collector's dream, order now!
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
