import React from "react";
import "./styles.css";
import Link from "next/link";
import { Bell, Gift, Search } from "lucide-react";
import logo from "../../../../public/assets/netflix/logo.png";
import Image from "next/image";

interface Props {
  black: Boolean;
}

const Header = ({ black }: Props) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <Link href="/netflix/browser">
          <Image width={100} src={logo} alt="Netflix" />
        </Link>
      </div>
      <div className="header--menu">
        <ul>
          <li>
            <Link href="/netflix/browser">Inicio</Link>
          </li>
          <li>
            <Link href="/netflix/series">Séries</Link>
          </li>
          <li>
            <Link href="/netflix/movies">Filmes</Link>
          </li>
          <li>
            <Link href="">Mais recentes</Link>
          </li>
          <li>
            <Link href="">Minha lista</Link>
          </li>
        </ul>
        <div className="header-menu-secondary">
          <div className="header--pesq">
            <div className="header-busca">
              <Search />
            </div>
            <input placeholder="Titulos, gente e gêneros" />
          </div>
          <div className="header--gift">
            <a href="">
              <Gift size={30} color="#fff" />
            </a>
          </div>
          <div className="header--bell">
            <a href="">
              <Bell size={30} color="#fff" />
            </a>
          </div>
          <div className="header--user">
            <a href="">
              <Image
                alt="image"
                src="https://occ-0-1069-1567.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcqBskTCn3DkGQQb75keSWbkb7UvDc5R_1jJvJuDyp6GgGN_TeMbo_kPwlwmE0gwOmeTh2hNyKhotFROEYtkelSkKYmL.png?r=fcc"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
