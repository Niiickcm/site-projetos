"use client";
import React from "react";
import StickyBox from "react-sticky-box";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Henrique Santos"
                nickname="@henriquesantos"
                key={1}
              />,
              <FollowSuggestion
                name="Rodolfo Baguare"
                nickname="@rodolfobaguare"
                key={2}
              />,
              <FollowSuggestion
                name="Diego Magalhes"
                nickname="@diego_magalhaes"
                key={3}
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News key={4} />,
              <News key={5} />,
              <News key={6} />,
              <News key={7} />,
              <News key={8} />,
              <News key={9} />,
              <News key={10} />,
              <News key={11} />,
              <News key={12} />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
