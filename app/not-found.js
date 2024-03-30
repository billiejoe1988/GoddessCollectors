'use client'
import { useRouter } from "next/navigation";
import Button from "../components/ui/Button";

export default function NotFound() {
    const router = useRouter();
    return(
        <>
         <main className=" container text-center">
           <h1 className="text-4xl text-yellow-600 my-4"> Page Not Found </h1>
           <hr/>
           <p className="text-base mt-4 pb-4"> To access the path you want, it doesn't exist. </p>

           <Button onClick={() => router.back()}>
              Back
           </Button>
         </main>
        </>
    );
}