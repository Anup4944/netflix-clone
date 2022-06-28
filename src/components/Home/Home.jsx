import React from "react";
import "./Home.scss";

const Card = ({ img }) => {
  return <img src={img} alt="cover" className="card" />;
};

const Row = ({ title }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
      <Card
        img={
          "https://www.thestreambible.com/wp-content/uploads/2022/02/peaky-F-758x405.jpg"
        }
      />
    </div>
  </div>
);
const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Popular on Netflix"} />
    </section>
  );
};

export default Home;
