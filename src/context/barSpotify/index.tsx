"use client";

import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

export type TaskBarType = {
  open: Boolean;
};

type PropsTaskBarSelect = {
  state: TaskBarType;
  setState: Dispatch<SetStateAction<TaskBarType>>;
};

const DEFAULT_STATE = {
  state: {
    open: false,
  },
  setState: () => {},
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const BarSpotifyContext = createContext<PropsTaskBarSelect>(DEFAULT_STATE);

const BarSpotifyContextProvider: any = ({ children }: Props) => {
  const [state, setState] = useState<any>(DEFAULT_STATE.state);
  return (
    <BarSpotifyContext.Provider value={{ state, setState }}>
      {children}
    </BarSpotifyContext.Provider>
  );
};

export const useBarSpotify = () => {
  const context = useContext(BarSpotifyContext);
  if (!context) throw new Error("shoulbe use with CategoryContextProvider");
  const { state, setState } = context;
  return {
    state,
    setState,
  };
};

export { BarSpotifyContextProvider };
export default BarSpotifyContext;
