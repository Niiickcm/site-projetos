import React from "react";
import "./styles.css";
import Link from "next/link";
import { Bell, Gift } from "lucide-react";

interface Props {
  black: Boolean;
}

const Header = ({ black }: Props) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <Link href="/netflix/browser">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix"
          />
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
            <input
              className="header-busca"
              placeholder="Titulos, gente e gêneros"
            />
          </div>
          <div className="header--gift">
            <a href="">
              <Gift size={30} color="grey" />
            </a>
          </div>
          <div className="header--bell">
            <a href="">
              <Bell size={30} color="grey" />
            </a>
          </div>
          <div className="header--user">
            <a href="">
              <img src="https://occ-0-1069-1567.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcqBskTCn3DkGQQb75keSWbkb7UvDc5R_1jJvJuDyp6GgGN_TeMbo_kPwlwmE0gwOmeTh2hNyKhotFROEYtkelSkKYmL.png?r=fcc" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
