"use client";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import vscodeIcon from "../../../public/assets/vscode/vscodeIcon.png";
import spotifyIcon from "../../../public/assets/svg-spotify/spotify.png";
import twitter from "../../../public/assets/twitter/twitter.png";
import netflix from "../../../public/assets/netflix/netflix.png";
import googleIa from "../../../public/assets/google-ia/google-ia.png";
import { TaskBarType, useBarSpotify } from "@/context/barSpotify";
import { Dispatch, SetStateAction } from "react";
import useDriveSession from "@/app/hooksTaskBar/useDriveSession";

interface Props {
  name: string;
  url: string;
  icon: StaticImageData;
  id: string;
}

interface PropsMenu {
  menusBar: Array<Props>;
}

export default function TaskBar() {
  const { setState, state } = useBarSpotify();
  useDriveSession();
  const menusBar: Array<Props> = [
    { name: "vscode", url: "/vscode", icon: vscodeIcon, id: "vscode" },
    { name: "spotify", url: "", icon: spotifyIcon, id: "spotify" },
    { name: "twitter", url: "/twitter", icon: twitter, id: "twitter" },
    { name: "netflix", url: "/netflix/browser", icon: netflix, id: "netflix" },
    { name: "google IA", url: "/chatIA", icon: googleIa, id: "google_ia" },
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
      id="taskbar"
      className={`flex gap-3 absolute ${
        state.open ? "bottom-24" : "bottom-2"
      } shadow-sm bg-white bg-opacity-30 rounded-2xl p-3 transition-all`}
    >
      {menusBar.map((item, k) => (
        <a
          key={k}
          id={item.id}
          href={item.url ? item.url : "#!"}
          className="flex items-center justify-center w-12 h-12 bg-white rounded-xl hover:scale-110 transition-all focus:translate-y-[-8px]  active:transition-duration"
          onClick={() => handleClick(item)}
        >
          <Image
            src={item.icon}
            alt={item.name}
            height={32}
            style={{ borderRadius: "50%" }}
          />
        </a>
      ))}
    </div>
  );
}
