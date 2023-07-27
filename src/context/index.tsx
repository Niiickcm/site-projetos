import React from "react";
import { BarSpotifyContextProvider } from "./barSpotify";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const GlobalContext = ({ children }: Props) => {
  return <BarSpotifyContextProvider>{children}</BarSpotifyContextProvider>;
};

export default GlobalContext;
