import AnimalsPage from "@/components/animal/AnimalsPage";
import Banner from "@/components/home/Banner";
import Fetured from "@/components/home/Fetured";
import Navbar from "@/components/shered/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar variant="light"></Navbar>
    <Banner/>
    <Fetured></Fetured>
    <div>
      <h1 className='text-3xl text-[#c3923c] font-bold my-10 text-center '>All Our Qurbani's</h1>
    </div>
    

      
      <AnimalsPage></AnimalsPage>
      
    </>
  );
}
