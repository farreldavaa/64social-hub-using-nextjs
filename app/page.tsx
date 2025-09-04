import ContentPage from "@/components/ContentPage";
import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
     <div>
            <Navbar />
            <MainPage/>
            <ContentPage />
            <Footer/>
        </div>
  );
}
