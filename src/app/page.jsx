import AnimalsPage from "@/components/animal/AnimalsPage";
import Banner from "@/components/home/Banner";
import Fetured from "@/components/home/Fetured";
import Tips from "@/components/home/Tips";
import TopBreeds from "@/components/home/TopBreeds";
import Navbar from "@/components/shered/Navbar";
import { getAnimals } from "@/lib/data";
import Image from "next/image";

export default async function  Home() {
  const animals = await getAnimals()
     
     const LowToHigh = [...animals].sort((a, b) => a.price - b.price);
     const highToLow = [...animals].sort((a, b) => b.price - a.price);
  return (
    <>
   
    <Banner/>
    <Fetured></Fetured>
    <div>
      <h1 className='text-3xl text-[#c3923c] font-bold my-10 text-center '>All Our Qurbani's</h1>
    </div>
    

      
      <AnimalsPage animals={animals} LowToHigh={LowToHigh} highToLow={highToLow} ></AnimalsPage>
      <TopBreeds></TopBreeds>
      <Tips></Tips>
    </>
  );
}
