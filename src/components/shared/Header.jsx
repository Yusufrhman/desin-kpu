import LOGO from "../../assets/logokpu.svg";
import MainButton from "../buttons/MainButton";
import NavLink from "../navigation/NavLink";
import { MdHowToVote } from "react-icons/md";

export default function Header({}) {
  return (
    <header className="w-full bg-gradient-to-r from-custom-red to-custom-red p-4 flex items-center justify-around">
      <div id="logo" className="flex items-center justify-center gap-2">
        <img src={LOGO} alt="LOGO KPU" />
        <p className="font-bold text-sm">
          Komisi Pemilihan Umum <span className="block">Jawa Timur</span>
        </p>
      </div>
      <ul className="text-white flex gap-5">
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
              <MdHowToVote size={18}/>
              <p>Pilkada 2024</p>
            </div>
          </NavLink>
        </li>
      </ul>
      <div className="button"><MainButton>Log in</MainButton></div>
    </header>
  );
}
