import React, { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";

const apiKey = "8a217ad1fba928a82bffaf48c81d0841";

const url = "https://api.themoviedb.org/3";

const upcoming = "upcoming";

const nowPlaying = "now_playing";

const popular = "popular";

const topRated = "top_rated";

const imgUrl = "https://image.tmdb.org/t/p/original/";

const Card = ({ img }) => {
  return <img src={img} alt="cover" className="card" />;
};

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, i) => (
        <Card img={`${imgUrl}/${item.poster_path}`} key={i} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };

    fetchUpcoming();
  }, []);
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Upcoming on Netflix"} arr={upcomingMovies} />
      <Row title={"Recently viewed"} />
      <Row title={"TV Shows"} />
      <Row title={"Movies"} />
    </section>
  );
};

export default Home;
