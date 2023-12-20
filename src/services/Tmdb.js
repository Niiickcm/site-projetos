const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTgwY2Q3MmUyM2IyNGUxYmMxOGQ2NGZlYmYwNzFmYyIsInN1YiI6IjVmNTkzZGY0N2FkMDhjMDAzOTRmYWQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hoNdN9ywnoTAV5BRhVZ5veANMeOOObOb30gsk0034p4";
const API_URL = "https://api.themoviedb.org/3";

/*
Originais Netflix
recomendados (trending)
em alta (top rated)
açao 
comédia
terror
romance
documentário
 */

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_URL}${endpoint}`, options);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR`),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(`/trending/all/week?language=pt-BR`),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(`/movie/top_rated?language=pt-BR`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR`
        ),
      },
      {
        slug: "romace",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(`/movie/${movieId}?language=pt-BR`);
          break;
        case "tv":
          info = await basicFetch(`/tv/${movieId}?language=pt-BR`);
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
