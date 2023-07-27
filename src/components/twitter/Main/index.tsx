"use client";
import React from "react";

import ProfilePage from "../ProfilePage";

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./styles";
import Link from "next/link";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        {" "}
        <Link href="/">
          <button>
            <BackIcon />
          </button>
        </Link>
        <ProfileInfo>
          <strong>Thiago Miguel</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
