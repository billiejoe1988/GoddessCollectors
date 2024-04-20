import { data } from "@/data/db.js";
import { NextResponse } from "next/server"

const sleep = (timer) => {
   return new Promise((resolve) => setTimeout (resolve, timer))
}

export async function GET (_, { params }) {
    const { slug } = params
    const items = data.find(item => item.slug === slug)

    await sleep(1000)

    return NextResponse.json(items)
}