import { NextResponse } from "next/server";
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from '@/app/firebase/config';

export async function GET(_, { params }) {
    const { slug } = params;

    const docRef = doc(db, "products", slug);

    const docSnapshot = await getDoc(docRef);

    return NextResponse.json(docSnapshot.data());
}
