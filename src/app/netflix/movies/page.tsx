"use client";
import React, { useEffect, useState } from "react";
import "../../../styles/netflix/browser.css";
import Tmdb from "../../../services/Tmdb";
import MovieRow from "../../../components/nextflix/MovieRow";
import FeaturedMovie from "../../../components/nextflix/FeaturedMovie";
import Image from "next/image";
import loading from "../../../../public/assets/netflix/loading.gif";
interface Props {
  slug: String;
  title: String;
  items: [];
}

const Movies = () => {
  const [movieList, setMovieList] = useState<Props[]>([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // filtrando os filmes originais da api
      let originals = list.filter((i) => i.slug === "toprated");
      // pega um valor aleatorio
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      //busca dentro dos results (que e o array com o numero de cada filme), com o numero do randomChosen
      let chosen = originals[0].items.results[randomChosen];
      // pega as informaçoes do filmes consultado a funçao do tmdb
      let chosenInfo: any = await Tmdb.getMovieInfo(chosen.id, "movie");

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div>
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item: any, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      {movieList.length <= 0 && (
        <div className="loading">
          <Image src={loading} alt="Carregando" />
        </div>
      )}
    </div>
  );
};

export default Movies;
