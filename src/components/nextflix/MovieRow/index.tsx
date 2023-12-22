import React, { useState } from "react";
import "./styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  title: String;
  items: {
    results: [PropsItems];
  };
}

interface PropsItems {
  poster_path: String;
}

const MovieRow = ({ title, items }: Props) => {
  const [scrollX, setScrollX] = useState(0);
  //lógica para a lista de filmes ir para a esquerda
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  //lógica para a lista de filmes ir para a direita
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--Left" onClick={handleLeftArrow}>
        <ChevronLeft size={50} />
      </div>
      <div className="movieRow--Right" onClick={handleRightArrow}>
        <ChevronRight size={50} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results?.length * 150,
          }}
        >
          {items.results?.length > 0 &&
            items.results.map((item: PropsItems, k: number) => (
              <div key={k} className="movieRow--item">
                <Image
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt="filme-nextflix"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieRow;
