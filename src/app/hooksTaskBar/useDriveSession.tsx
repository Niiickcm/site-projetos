import React, { useEffect, useState } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const useDriveSession = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const driverObj = driver({
    showProgress: true,
    onDestroyed: () => disableSteps(),
    steps: [
      {
        element: "#taskbar",
        popover: {
          title: "Projetos",
          description: "Aqui estão alguns projetos de portfólio",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#vscode",
        popover: {
          title: "Vscode",
          description: "Este projeto é um clone do vscode",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#spotify",
        popover: {
          title: "Spotify",
          description: "Este projeto é um clone da sidebar do Spotify",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#twitter",
        popover: {
          title: "Twitter",
          description: "Este é um clone do Twitter",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#netflix",
        popover: {
          title: "Netflix",
          description: "Este é um clone da Netflix",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#google_ia",
        popover: {
          title: "ChatBot",
          description:
            "Este projeto é um chatbot de conversa e reconhecimento de imagem. Nele foi utilizado umas das utimas IAS desenvolvida pela google que é a gemini-pro-vision",
          side: "top",
          align: "start",
        },
      },
    ],
  });

  const disableSteps = () => {
    setIsActive(false);
    sessionStorage.setItem("isActiveDriverTaskBar", "true");
  };

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      const isActiveDriverTaskBar = Boolean(
        sessionStorage.getItem("isActiveDriverTaskBar")
      );
      setIsActive(isActiveDriverTaskBar);
    }
  }, [isActive]);
  useEffect(() => {
    if (!isActive) {
      driverObj.drive();
    }
  }, [isActive]);

  return <div></div>;
};

export default useDriveSession;
