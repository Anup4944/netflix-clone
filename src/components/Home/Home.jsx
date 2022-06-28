import React, { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

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
  const [nowPlayings, setNowPlayings] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [genre, setGenre] = useState([]);

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
      setNowPlayings(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRate(results);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopulars(results);
    };

    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchTopRated();
    fetchPopular();
    getAllGenre();
  }, []);
  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: populars[0]
            ? `url(${`${imgUrl}/${populars[0].poster_path}`})`
            : "",
        }}
      >
        {populars[0] && <h1>{populars[0].original_title}</h1>}

        {populars[0] && <p>{populars[0].overview}</p>}

        <div>
          <button>
            Play <BiPlay />{" "}
          </button>
          <button>
            My List
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <Row title={"Upcoming"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayings} />
      <Row title={"Top Rated"} arr={topRate} />
      <Row title={"Popular"} arr={populars} />

      <div className="genreBox">
        {genre.map((item) => (
          <Link to={`/genre/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
