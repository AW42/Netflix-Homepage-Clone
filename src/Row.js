import React, { useState, useEffect } from "react";
import "./styles.css";
import axiosReq from "./axios";

const url1 = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const sendIt = await axiosReq.get(fetchUrl);
      console.log(sendIt.data.results);
      setMovies(sendIt.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="posterRow">
        <h1 className="titleRow">{title}</h1>
        <div className="poster_image">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`posterImg ${isLarge && "poster_img_large"}`}
              src={`${url1}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
