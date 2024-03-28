import Image from "next/image";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <NavBar />
      <main className="flex-grow">
        
      </main>
      <Footer />
    </main>
  );
}
