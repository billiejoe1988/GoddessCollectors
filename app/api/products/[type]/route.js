import { data } from "@/data/db.js";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request, { params }) {
    const { type } = params;
    const items = type === 'all' ? data : data.filter(item => item.type === type);

    await sleep(1000);

    revalidateTag("products");

    return NextResponse.json(items);
}
