import { NextResponse } from "next/server";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export async function GET(request, { params }) {
    const { type } = params;
    const productsRef = collection(db, "products");

    const q = type === 'all' ? productsRef : query(productsRef, where('type', '==', type));
    
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(doc => doc.data()); 

    return NextResponse.json(docs);
}
