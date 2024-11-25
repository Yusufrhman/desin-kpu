import { Link } from "react-router-dom";
import LOGO from "../../assets/logokpu.svg";
import MainButton from "../buttons/MainButton";
import NavLink from "../navigation/NavLink";
import { MdHowToVote } from "react-icons/md";

export default function Header({}) {
  return (
    <header className="w-full bg-custom-black p-4 shadow-xl sticky top-0 z-[99999] text-white">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        {" "}
        <Link
          to={"/"}
          id="logo"
          className="flex items-center justify-center gap-2"
        >
          <img src={LOGO} alt="LOGO KPU" className="h-14" />
          <p className="font-bold text-xs">
            Komisi Pemilihan Umum <span className="block">Jawa Timur</span>
          </p>
        </Link>
        <ul className="text-white text-sm flex gap-8">
          <li>
            <NavLink href={"/"}>Beranda</NavLink>
          </li>
          <li>
            <NavLink href={"/tentang"}>Tentang</NavLink>
          </li>
          <li>
            <NavLink href={"/histori"}>Histori</NavLink>
          </li>
          <li>
            <NavLink href={"/unduhan"}>Unduhan</NavLink>
          </li>
          <li>
            <NavLink href={"/pilkada-2024"}>
              <div className="flex items-center gap-1">
                <MdHowToVote size={18} />
                <p>Pilkada 2024</p>
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="button">
          <MainButton>Log in</MainButton>
        </div>
      </div>
    </header>
  );
}
