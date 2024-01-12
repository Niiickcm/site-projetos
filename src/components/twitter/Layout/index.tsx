"use client";
import React, { useEffect, useState } from "react";

import MenuBar from "../MenuBar";
import Main from "../Main";
import SideBar from "../SideBar";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  const [loadingComponet, setLoadingComponet] = useState(true);

  useEffect(() => {
    setLoadingComponet(false);
  }, []);

  return (
    <Container>
      {loadingComponet ? null : (
        <Wrapper>
          <MenuBar />
          <Main />
          <SideBar />
        </Wrapper>
      )}
    </Container>
  );
};

export default Layout;
