import ARYA from "../assets/arya.png";
import MainButton from "../components/buttons/MainButton";

import { IoPerson } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <main className="min-h-[93dvh] w-10/12 mx-auto pt-16 pb-32">
      <section className="flex gap-3 items-center mb-20">
        <div className="rounded-full w-24 overflow-hidden">
          <img src={ARYA} alt="" />
        </div>
        <div>
          <p className="font-bold text-xl">Arya Prasetya</p>
          <p className="font-extralight">Ketua KPPS</p>
        </div>
      </section>
      <section className="flex w-full justify-between">
        <div className="flex flex-col gap-8">
          <ul className="grid grid-cols-2 gap-x-36 gap-y-8">
            <li>
              <h2 className="text-xl">
                <strong>TPS</strong>
              </h2>
              <p className="font-light">TPS 037</p>
            </li>
            <li>
              <h2 className="text-xl">
                <strong> Kode TPS</strong>
              </h2>
              <p className="font-light">23678899</p>
            </li>
            <li>
              <h2 className="text-xl">
                <strong> Kelurahan</strong>
              </h2>{" "}
              <p className="font-light">Gading</p>
            </li>
            <li>
              <h2 className="text-xl">
                <strong> Kecamatan</strong>
              </h2>{" "}
              <p className="font-light">Tambaksari</p>
            </li>
            <li>
              <h2 className="text-xl">
                <strong> Kota/Kabupaten</strong>
              </h2>{" "}
              <p className="font-light">Surabaya</p>
            </li>
            <li>
              <h2 className="text-xl">
                <strong> Provinsi</strong>
              </h2>{" "}
              <p className="font-light">Jawa Timur</p>
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <MainButton className={"w-full font-normal text-sm py-3"}>
              Kelola Daftar Hadir
            </MainButton>
            <MainButton className={"w-full font-normal text-sm py-3"}>
              Kelola Tanda Terima & Kejadian Khusus
            </MainButton>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-10">
            <li className="flex flex-col h-full justify-between items-center">
              <h3 className="px-6 py-2 rounded-full border border-neutral-400 text-sm font-bold">
                Pemilihan Kepala Daerah
              </h3>
              <IoPerson size={144} color="#B30000" />
              <Link to={"/candidate"} className="w-full">
                {" "}
                <MainButton className={"w-full font-normal text-sm py-3"}>
                  Input Hasil
                </MainButton>
              </Link>
            </li>
            <li className="flex flex-col gap-8 items-center">
              {" "}
              <h3 className="px-6 py-2 rounded-full border border-neutral-400 text-sm font-bold">
                Pemilihan Kepala Daerah
              </h3>
              <IoIosPeople size={166} color="#B30000" />
              <Link to={"/party"} className="w-full">
                <MainButton className={"w-full font-normal text-sm py-3"}>
                  Input Hasil
                </MainButton>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
