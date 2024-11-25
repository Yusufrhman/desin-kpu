import { useState } from "react";
import Login from "../components/Auth/Login";
import CaraouselSlider from "../components/caraousel/caraousel";

import hoax2 from "../assets/lawanhoax-2.png";

import img1 from "../assets/rapat.png";
import img2 from "../assets/rapat.png";
import img3 from "../assets/rapat.png";
import { MdHowToVote } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoIosMegaphone } from "react-icons/io";
import { FaChartColumn } from "react-icons/fa6";
import { HiMiniNewspaper } from "react-icons/hi2";
import FeatureCard from "../components/cards/FeatureCard";

import hoax1 from "../assets/lawanhoax-1.png";
import MainButton from "../components/buttons/MainButton";

import berita1 from "../assets/berita-1.png";
import berita2 from "../assets/berita-2.png";
import berita3 from "../assets/berita-3.png";
import berita4 from "../assets/berita-4.png";
import berita5 from "../assets/berita-5.png";
import berita6 from "../assets/berita-6.png";

const data = [
  {
    image: img1,
    text: "Rapat Pengesahan Peraturan Pemilihan Kepala Daerah 2024",
  },
  { image: img2, text: "Pengesahan Peraturan Pemilihan Kepala Daerah 2024" },
  { image: img3, text: "Persiapan Pemilihan Kepala Daerah 2024" },
];

const dataForLawanHoax = [
  {
    image: hoax1,
    title:
      "Hoax! Paslon A Menyebarkan Uang untuk Memengaruhi Pemilih di Pilkada 2024",
  },
  {
    image: hoax2,
    title: "Tudingan Palsu: Berita Hoax Tentang Penggelembungan Suara Paslon B",
  },
  {
    image: hoax1,
    title:
      "Hoax Pilkada: Isu Paslon C Menggunakan Praktik SARA untuk Menarik Pemilih",
  },
  {
    image: hoax2,
    title: "Viral! Foto Palsu Kampanye Hitam Paslon D Beredar di Media Sosial",
  },
  {
    image: hoax1,
    title:
      "Berita Hoax: Paslon E Dituduh Menyogok Petugas TPS, Klarifikasi Resmi Dikeluarkan",
  },
];

const beritaTerbaru = [
  {
    id: 1,
    title: "Debat Publik Pilgub Jatim",
    description:
      "Komisi Pemilihan Umum Provinsi Jawa Timur (KPU Jatim) sukses menggelar debat publik pertama untuk calon gubernur dan wakil gubernur. Debat ini menjadi ajang bagi para kandidat untuk memaparkan visi, misi, serta program unggulan mereka dalam membangun Jawa Timur ke depan. Acara ini juga diikuti oleh antusiasme masyarakat yang menyaksikannya secara langsung maupun daring.",
    date: "11/11/2024",
    time: "09:10 WIB",
    image: berita1,
    link: "/berita/debat-pilgub-jatim",
  },
  {
    id: 2,
    title: "Gelar Rakor Pelaksanaan",
    description:
      "KPU Jatim menggelar Rapat Koordinasi (Rakor) dengan seluruh pemangku kepentingan terkait pelaksanaan pemilu. Rakor ini membahas berbagai aspek teknis, seperti kesiapan logistik, pengamanan, hingga distribusi perlengkapan ke setiap daerah. Dengan rakor ini, diharapkan seluruh proses pemilu dapat berjalan lancar dan minim kendala di lapangan.",
    date: "13/11/2024",
    time: "09:10 WIB",
    image: berita2,
    link: "/berita/rakor-pelaksanaan",
  },
  {
    id: 3,
    title: "Gelar Rakor Persiapan",
    description:
      "Komisi Pemilihan Umum (KPU) Jawa Timur melaksanakan Rapat Koordinasi (Rakor) persiapan pemilu 2024. Dalam agenda ini, dibahas strategi pemantapan distribusi logistik, persiapan petugas di Tempat Pemungutan Suara (TPS), dan pengamanan di setiap tahapan pemilu. Rakor ini menjadi langkah penting dalam memastikan pelaksanaan pemilu yang kredibel dan transparan.",
    date: "15/09/2024",
    time: "09:10 WIB",
    image: berita3,
    link: "/berita/rakor-persiapan",
  },
  {
    id: 4,
    title: "Pelaksanaan Election",
    description:
      "Tahapan pelaksanaan pemilu di Jawa Timur telah memasuki puncaknya dengan digelarnya proses pemungutan suara di seluruh wilayah. Antusiasme masyarakat terlihat tinggi, dengan tingkat partisipasi yang meningkat dibandingkan pemilu sebelumnya. Proses ini diharapkan dapat menjadi tonggak penting dalam memperkuat demokrasi di Indonesia.",
    date: "15/09/2024",
    time: "09:10 WIB",
    image: berita4,
    link: "/berita/pelaksanaan-election",
  },
  {
    id: 5,
    title: "Pemungutan Suara",
    description:
      "Pemungutan suara pada 15 September 2024 berlangsung dengan sukses di seluruh Tempat Pemungutan Suara (TPS) di Jawa Timur. Proses ini berjalan aman dan tertib, dengan pengawasan ketat dari petugas pemilu dan aparat keamanan. Warga Jawa Timur tampak antusias memberikan suaranya, menunjukkan tingginya semangat partisipasi dalam menentukan masa depan daerah.",
    date: "15/09/2024",
    time: "09:10 WIB",
    image: berita5,
    link: "/berita/pemungutan-suara",
  },
  {
    id: 6,
    title: "Persiapan Debat Publik",
    description:
      "Komisi Pemilihan Umum Provinsi Jawa Timur (KPU Jatim) tengah mempersiapkan debat publik kedua bagi para kandidat. Berbagai persiapan teknis, termasuk penataan panggung, penyusunan materi debat, dan pengamanan lokasi, telah dilakukan. Acara ini diharapkan dapat menjadi forum diskusi yang memberikan gambaran kepada masyarakat tentang kemampuan dan gagasan para kandidat.",
    date: "15/09/2024",
    time: "09:10 WIB",
    image: berita6,
    link: "/berita/persiapan-debat-publik",
  },
];


export default function LandingPage() {
  return (
    <main className="min-h-[93dvh] ">
      <CaraouselSlider data={data} />
      <section className="my-10">
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
            <FeatureCard
              icon={<IoPeople color="white" size={120} />}
              text={"Calon Kepala Daerah"}
            />
          </li>
          <li className="h-full">
            <FeatureCard
              icon={<FaChartColumn color="white" size={110} />}
              text={"Hitung Cepat"}
            />
          </li>
          <li className="h-full">
            <FeatureCard
              icon={<IoIosMegaphone color="white" size={120} />}
              text={"#LawanHoax"}
            />
          </li>
        </ul>
      </section>
      <section className="my-28">
        <div className="text-center flex flex-col gap-2 w-2/6 mx-auto mb-8">
          <h2 className="text-center font-bold text-4xl flex items-center justify-center gap-2 text-black">
            <IoIosMegaphone size={32} fontWeight={700} />
            #LawanHoax
          </h2>
          <p className="font-extralight text-sm">
            Kumpulan berita palsu yang dipatahkan oleh ahli
          </p>
        </div>
        <section className="flex my-4 group overflow-hidden">
          <section className="flex h-fit w-fit gap-8  pl-8 animate-scroll group-hover:[animation-play-state:paused]">
            {dataForLawanHoax.map((hoax) => (
              <div
                key={hoax.title}
                className="w-[20rem] aspect-[3/2] rounded-md overflow-hidden relative"
              >
                <span className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
                <img
                  src={hoax.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-3">
                  <p className="text-white font-semibold text-sm text-ellipsis overflow-hidden line-clamp-2">
                    {hoax.title}
                  </p>
                </div>
              </div>
            ))}
          </section>
          <section className="flex h-fit w-fit gap-8 pl-8 animate-scroll group-hover:[animation-play-state:paused]">
            {dataForLawanHoax.map((hoax) => (
              <div
                key={hoax.title}
                className="w-[20rem] aspect-[3/2] rounded-md overflow-hidden relative"
              >
                <span className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
                <img
                  src={hoax.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-3">
                  <p className="text-white text-ellipsis text-sm font-semibold overflow-hidden line-clamp-2">
                    {hoax.title}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>
        <div className="w-fit mx-auto">
          <MainButton className={"text-sm"}>View More...</MainButton>
        </div>
      </section>
      <section className="my-28">
        <div className="text-center flex flex-col gap-2 w-2/6 mx-auto mb-8">
          <h2 className="text-left font-bold text-4xl flex items-center justify-center gap-2 text-black">
            <HiMiniNewspaper size={32} fontWeight={700} />
            Berita Terbaru
          </h2>
        </div>
        <section className="grid grid-cols-2 gap-8 justify-items-start w-fit mx-auto">
          {beritaTerbaru.map((berita) => {
            return (
              <div key={berita.title} className="flex gap-4 w-[35rem]">
                <div className="h-[10rem] aspect-video object-cover object-center overflow-clip rounded-lg">
                  <img src={berita.image} alt="" className="w-full h-full" />
                </div>
                <div>
                  <p className="font-thin tracking-wider text-sm">
                    {berita.time + " " + berita.date}
                  </p>
                  <h3 className="font-bold text-lg">{berita.title}</h3>
                  <p className="font-extralight line-clamp-3">
                    {berita.description}
                  </p>
                  <p className="text-sm font-bold hover:cursor-pointer">Selengkapnya...</p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
}
