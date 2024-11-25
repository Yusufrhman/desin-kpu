import { Link } from "react-router-dom";
import LOGO from "../../assets/logokpu.svg";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <footer className=" py-16 h-fit w-full shadow-lg bg-custom-black text-white">
      <section className="w-10/12 mx-auto grid grid-cols-6 justify-between gap-12">
        <section className="w-full col-span-2 flex flex-col gap-2">
          <div id="logo" className="flex items-center gap-4">
            <img src={LOGO} alt="LOGO KPU" className="w-20" />
            <p className="font-bold text-base">
              Komisi Pemilihan Umum <span className="block">Jawa Timur</span>
            </p>
          </div>
          <p className="font-thin text-sm">
            Jl. Asta Tinggi No.99, Kebunagung, Kotasumenep, Kabupaten Sumenep,
            Jawa Timur 69413, Indonesia
          </p>
          <p className="text-custom-yellow underline font-bold underline-offset-4">
            Kontak Kami
          </p>
          <ul className="flex gap-2">
            <li>
              <MdEmail size={24} />
            </li>
            <li>
              <RiInstagramFill size={24} />
            </li>
            <li>
              <IoLogoWhatsapp size={24} />
            </li>
            <li>
              <IoLogoYoutube size={24} />
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-custom-yellow font-bold">Tentang</p>
          <ul className="text-sm flex flex-col gap-4 font-thin">
            <li>
              <p>Sejarah KPU</p>
            </li>
            <li>
              <p>Visi Misi</p>
            </li>
            <li>
              <p>Struktur Organisasi</p>
            </li>
            <li>
              <p>Tugas & Kewenangan</p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-custom-yellow font-bold">Histori</p>
          <ul className="text-sm flex flex-col gap-4 font-thin">
            <li>
              <p>PEMILU 2024</p>
            </li>
            <li>
              <p>PILKADA 2019</p>
            </li>
            <li>
              <p>PILEG 2019</p>
            </li>
            <li>
              <p>PEMILU 2019</p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-custom-yellow font-bold">Unduhan</p>
          <ul className="text-sm flex flex-col gap-4 font-thin">
            <li>
              <p>Berkas Pemilu 2024</p>
            </li>
            <li>
              <p>E-Penyuluhan</p>
            </li>
            <li>
              <p>Peraturan-Peraturan</p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-custom-yellow font-bold">Pilkada</p>
          <ul className="text-sm flex flex-col gap-4 font-thin">
            <li>
              <p>Calon Kepala Daerah</p>
            </li>
            <li>
              <p>Hitung Cepat</p>
            </li>
            <li>
              <p>#LawanHoax</p>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}
