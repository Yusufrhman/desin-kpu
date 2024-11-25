import { useState } from "react";
import Login from "../components/Auth/Login";
import CaraouselSlider from "../components/caraousel/caraousel";
import img1 from "../assets/rapat.png";
import img2 from "../assets/rapat.png";
import img3 from "../assets/rapat.png";
import { MdHowToVote } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoIosMegaphone } from "react-icons/io";
import { FaChartColumn } from "react-icons/fa6";

const data = [
  {
    image: img1,
    text: "Rapat Pengesahan Peraturan Pemilihan Kepala Daerah 2024",
  },
  { image: img2, text: "Pengesahan Peraturan Pemilihan Kepala Daerah 2024" },
  { image: img3, text: "Persiapan Pemilihan Kepala Daerah 2024" },
];

export default function LandingPage() {
  return (
    <main className="min-h-[93dvh] ">
      <CaraouselSlider data={data} />
      <section className="min-h-[90vh] my-10">
        <div className="text-center flex flex-col gap-2 w-2/6 mx-auto mb-8">
          <h2 className="text-center font-bold text-4xl flex items-center justify-center gap-2 text-black">
            <MdHowToVote size={32} fontWeight={700} />
            Pilkada 2024
          </h2>
          <p className="font-extralight text-sm">
            Meliput semua hal yang terjadi di Pemilihan Kepala Daerah Jawa Timur
            2024
          </p>
        </div>
        <ul className="grid grid-cols-3 justify-self-center gap-8 text-white">
          <li className="h-full">
            <div className="bg-red-600 p-4 flex flex-col items-center gap-2 justify-center rounded-xl h-full">
              <IoPeople color="white" size={120} />
              <p className="font-bold">Calon Kepala Daerah</p>
            </div>
          </li>
          <li className="h-full">
            <div className="bg-red-600 p-4 flex flex-col items-center gap-2 justify-center rounded-xl h-full">
              <FaChartColumn color="white" size={110} />
              <p className="font-bold">Calon Kepala Daerah</p>
            </div>
          </li>
          <li className="h-full">
            <div className="bg-red-600 p-4 flex flex-col items-center gap-2 justify-center rounded-xl h-full">
              <IoIosMegaphone color="white" size={120} />
              <p className="font-bold">#LawanHoax</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
