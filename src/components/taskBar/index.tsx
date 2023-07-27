"use client";
import Image from "next/image";
import Link from "next/link";
import vscodeIcon from "../../../public/assets/vscodeIcon.svg";
import spotifyIcon from "../../../public/assets/svg-spotify/spotify.png";
import twitter from "../../../public/assets/twitter/twitter.png";

import { TaskBarType, useBarSpotify } from "@/context/barSpotify";
import { Dispatch, SetStateAction } from "react";

interface Props {
  name: string;
  url: string;
  icon: HTMLImageElement;
}

interface PropsMenu {
  menusBar: Array<Props>;
}

export default function TaskBar() {
  const { setState, state } = useBarSpotify();
  const menusBar: Array<Props> = [
    { name: "vscode", url: "/vscode", icon: vscodeIcon },
    { name: "spotify", url: "/", icon: spotifyIcon },
    { name: "twitter", url: "/twitter", icon: twitter },
  ];
  const handleClick = ({ name }: any) => {
    if (name == "spotify") {
      setState((state) => {
        return { ...state, open: !state.open };
      });
    }
  };
  return (
    <div
      className={`flex gap-3 absolute ${
        state.open ? "bottom-24" : "bottom-2"
      } shadow-sm bg-white bg-opacity-30 rounded-2xl p-3 transition-all`}
    >
      {menusBar.map((item, k) => (
        <Link
          key={k}
          href={item.url}
          className="flex items-center justify-center w-12 h-12 bg-white rounded-xl hover:scale-110 transition-all focus:translate-y-[-8px]  active:transition-duration"
          onClick={() => handleClick(item)}
        >
          <Image
            src={item.icon}
            alt={item.name}
            height={32}
            style={{ borderRadius: "50%" }}
          />
        </Link>
      ))}
    </div>
  );
}
