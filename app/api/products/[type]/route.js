import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
    const { type } = params;
    const productsRef = collection(db, "products");

    let q = productsRef;
    if (type !== 'all') {
        q = query(productsRef, where('type', '==', type));
    }
    
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map(doc => doc.data()); 

    return NextResponse.json(docs);

}