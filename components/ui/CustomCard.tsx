import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function CustomCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[1200px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/bzSD.avif"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
            <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/hqSD.avif"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
            <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/jkSD.avif"
          />
        </Card>

        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/grSD.avif"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
            <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/lolSD.avif"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[500px] p-4 cursor-pointer" data-hover="true" data-focus="true" style={{ border: "solid 2px transparent" }}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start" style={{ backdropFilter: "blur(8px)" }}>
            <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
            <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/srSD.avif"
          />
        </Card>
      </div>
    </div>
  );
}
