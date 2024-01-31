"use client";

import React from "react";
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Vuejs } from "@styled-icons/boxicons-logos/Vuejs";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Reduxsaga } from "@styled-icons/simple-icons/Reduxsaga";
import { Storybook } from "@styled-icons/simple-icons/Storybook";
import { Mui } from "@styled-icons/simple-icons/Mui";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Vite } from "@styled-icons/simple-icons/Vite";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Framer } from "@styled-icons/simple-icons/Framer";
import MinhaImagem from "../../../public/assets/portfolio/minha-imagem.jpg";
import Image from "next/image";
import "animate.css";

const Portfolio = () => {
  const stacks = [
    {
      icon: (
        <ReactLogo
          className="animate__animated animate__fadeInDown"
          size={40}
          color={"#fff"}
        />
      ),
      name: "ReactJS/React Native",
    },
    {
      icon: (
        <Nextdotjs
          className="animate__animated animate__fadeInUp"
          size={40}
          color={"#fff"}
        />
      ),
      name: "NextJS",
    },
    {
      icon: (
        <Vite
          className="animate__animated animate__fadeInDown"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Vite",
    },
    {
      icon: (
        <Vuejs
          className="animate__animated animate__fadeInUp"
          size={40}
          color={"#fff"}
        />
      ),
      name: "VueJS",
    },
    {
      icon: (
        <Redux
          className="animate__animated animate__fadeInDown"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Redux/Redux Toolkit",
    },
    {
      icon: (
        <Reduxsaga
          className="animate__animated animate__fadeInUp"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Redux Saga",
    },
    {
      icon: (
        <Storybook
          className="animate__animated animate__fadeInDown"
          size={40}
          color={"#fff"}
        />
      ),
      name: "StoryBook",
    },
    {
      icon: (
        <Mui
          className="animate__animated animate__fadeInUp"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Material UI",
    },
    {
      icon: (
        <TailwindCss
          className="animate__animated animate__fadeInDown"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Tailwind Css",
    },
    {
      icon: (
        <Css3
          className="animate__animated animate__fadeInUp"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Css",
    },
    {
      icon: (
        <Styledcomponents
          className="animate__animated animate__fadeInDown"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Styled Components",
    },
    {
      icon: (
        <Bootstrap
          className="animate__animated animate__fadeInUp"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Bootstrap",
    },
    {
      icon: (
        <Framer
          className="animate__animated animate__fadeInDown"
          size={40}
          color={"#fff"}
        />
      ),
      name: "Framer Motion",
    },
  ];

  var ano_atual = new Date().getFullYear();
  var ano_informado = 2000;
  var anos = ano_atual - ano_informado;

  return (
    <div className="relative flex gap-5 flex-col p-4 w-full max-w-3xl h-auto  bg-[#12121a] rounded-lg mt-0 mb-[12vh] md:mt-[3vh] ">
      <div className="flex gap-5 items-center flex-col w-full ">
        <div className="w-28 h-28 rounded-full bg-[#cd5ff8] overflow-hidden animate__animated animate__flipInY  ">
          <Image src={MinhaImagem} alt="eu" />
        </div>
        <p className="text-[#f5f5f5] text-lg animate__animated  animate__zoomIn ">
          Thiago Miguel
        </p>{" "}
        <div>
          <p className="text-[#f5f5f5] text-lg mb-3">Tecnologias:</p>
          <div className="flex gap-3 flex-wrap">
            {stacks.map((item, k) => (
              <span
                data-toggle="tooltip"
                data-placement="top"
                title={item.name}
                className="animate-pulse hover:animate-bounce"
                key={k}
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full font-normal overflow-auto scrollbar scrollbar-thumb-[#cd5ff8] scrollbar-thin scrollbar-track-slate-50">
        <h1 className="text-[#cd5ff8] text-3xl animate__animated animate__slideInLeft ">
          Sobre mim
        </h1>
        <p className="text-[#f5f5f5] m-5 animate__animated animate__slideInRight">
          Olá! me chamo Thiago, tenho {anos} anos e sou apaixonado por
          tecnologia desde que entrei na faculdade de Análise e Desenvolvimento
          de Sistemas aos 18 anos. Gosto Muito de sair com os amigos, estudar
          sobre novas linguagens e jogar.
        </p>
        <h2 className="text-[#cd5ff8] text-3xl animate__animated animate__slideInLeft">
          Jornada Acadêmica
        </h2>
        <p className="text-[#f5f5f5] m-5 animate__animated animate__slideInRight">
          Minha jornada acadêmica foi marcada por um projeto de conclusão de
          curso que me cativou profundamente: desenvolvemos um estádio
          inteligente, uma inovação que conquistou o segundo lugar e despertou
          minha paixão por automações utilizando Arduino. Esse projeto abriu
          caminho para meu interesse crescente na área.
          <br />
          <br />
          Desde então, mergulhei de cabeça no mundo da tecnologia, explorando
          diferentes stacks e linguagens para encontrar meu caminho. Foi quando
          um amigo me apresentou o ReactJS, um framework que se tornou não
          apenas meu foco profissional, mas também minha paixão. Trabalhar com
          ele tem sido uma jornada incrível, permitindo-me desenvolver soluções
          inovadoras e desafiadoras.
        </p>
        <h2 className="text-[#cd5ff8] text-3xl animate__animated animate__slideInLeft">
          Mercado de Trabalho
        </h2>
        <p className="text-[#f5f5f5] m-5 animate__animated animate__slideInRight">
          Meus últimos três anos na FASTERS foram fundamentais para minha
          evolução profissional. Nesta empresa de software, tive a oportunidade
          de mergulhar em diversos projetos desafiadores, aprimorando
          constantemente meu conhecimento e habilidades com a stack. Cada
          projeto foi uma oportunidade única de aprendizado, onde pude
          contribuir com meu conhecimento e crescer como profissional.
          <br />
          <br />
          Na FASTERS, tive a oportunidade de contribuir e liderar diversos
          projetos, cada um representando um desafio empolgante e uma
          oportunidade de crescimento profissional. Abaixo estão alguns dos
          projetos significativos em que estive envolvido:
          <br />
          <br />
          <strong className="text-xl text-[#cd5ff8]">APP - EU VENDO</strong>
          <br />
          <br />
          <strong>Tecnologias:</strong>{" "}
          <span className="text-[#cd5ff8]">
            React Native, Context API, Styled Components{" "}
          </span>
          <br />
          Este aplicativo foi desenvolvido para facilitar as vendas ao oferecer
          aos clientes uma nova maneira de interagir. Ao permitir que eles
          enviem fotos de produtos de interesse e seus contatos via WhatsApp, a
          equipe administrativa pode responder com ofertas personalizadas,
          aumentando exponencialmente as chances de venda.
        </p>{" "}
        <p className="text-[#f5f5f5] m-5">
          <strong className="text-xl text-[#cd5ff8]">
            SITE - MINHA CASA MINHA VIDA
          </strong>
          <br />
          <br />
          <strong>Tecnologias:</strong>{" "}
          <span className="text-[#cd5ff8]">VueJS, Redux, CSS</span>
          <br />
          Participei ativamente do desenvolvimento deste site, proporcionando
          aos usuários uma plataforma amigável para buscar casas para compra,
          com foco na experiência do usuário e na eficiência da busca.
        </p>
        <p className="text-[#f5f5f5] m-5">
          <strong className="text-xl text-[#cd5ff8]">
            SITE - PORTAS ABERTAS
          </strong>
          <br />
          <br />
          <strong>Tecnologias:</strong>{" "}
          <span className="text-[#cd5ff8]">
            Next JS, Redux, Material UI, CSS, Storybook
          </span>
          <br />
          Este projeto teve como objetivo oferecer um portal de doações para
          ajudar cristãos ao redor do mundo. Destaquei-me no desenvolvimento,
          especialmente na implementação de estratégias avançadas de SEO para
          ampliar o alcance e a visibilidade do site.
        </p>
        <p className="text-[#f5f5f5] m-5">
          <strong className="text-xl text-[#cd5ff8]">
            SITE - CLIMA AO VIVO
          </strong>
          <br />
          <br />
          <strong>Tecnologias:</strong>{" "}
          <span className="text-[#cd5ff8]">
            Next JS, Context API, Styled Components
          </span>
          <br />
          Desenvolvi este site para fornecer previsões meteorológicas, notícias
          sobre o clima e streaming ao vivo de condições climáticas em várias
          regiões do Brasil. Destaquei-me na otimização do site para mecanismos
          de busca, garantindo uma visibilidade excepcional por meio de
          estratégias de SEO.
        </p>
        <p className="text-[#f5f5f5] m-5">
          <strong className="text-xl text-[#cd5ff8]">SISTEMA - ADIAS</strong>
          <br />
          <br />
          <strong>Tecnologias:</strong>{" "}
          <span className="text-[#cd5ff8]">
            ReactJS, Redux, Redux Saga, Styled Components, Testing Library, Jest
            e PHP
          </span>
          <br />
          Participei ativamente do desenvolvimento deste sistema completo,
          equipado com um CRM robusto, processos para vendas de ar condicionado
          e placas solares, registro de leads, geração de PDFs personalizados
          para clientes e um dashboard dinâmico para controle de processos com
          base no Trello.
        </p>
        <p className="text-[#f5f5f5] m-5">
          Esses projetos foram oportunidades incríveis para expandir meu
          conhecimento técnico, aprimorar minhas habilidades de desenvolvimento
          e liderança, além de fortalecer minha compreensão sobre a importância
          de uma implementação eficiente e estratégica.
        </p>
        <h2 className="text-[#cd5ff8] text-3xl ">Objetivo</h2>
        <p className="text-[#f5f5f5] m-5">
          Meu objetivo é continuar expandindo meu conhecimento e habilidades na
          área de desenvolvimento, contribuindo com minha paixão pela inovação e
          minha experiência adquirida ao longo desses anos.
        </p>
        <h2 className="text-[#cd5ff8] text-3xl ">Atualmente</h2>
        <p className="text-[#f5f5f5] m-5">
          No momento, estou me dedicando ao estudo avançado não apenas em
          <strong> ReactJS</strong>, mas também em backend com{" "}
          <strong>Node.js</strong>. Paralelamente, estou imerso no universo das{" "}
          <strong>inteligências artificiais</strong>, buscando informações e
          aprofundando <strong>meus conhecimentos</strong> nessa área em
          constante evolução. Além disso,{" "}
          <strong>
            integro ativamente esses aprendizados em projetos pessoais
          </strong>
          , visando aplicar na prática o que absorvo nos estudos.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
