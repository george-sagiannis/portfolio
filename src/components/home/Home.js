import React from "react";
import "./home.css";
import Social from "./Social";
import { summary } from "../../Data";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/files/GEORGE SAGIANNIS CV.pdf";
    link.setAttribute("download", "GEORGE SAGIANNIS CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home" id="home">
      <div className="home__container  grid">
        <div className="home__content grid">
          <div className="home__content--data">
            <Social />
            {summary.map((item) => (
              <div className="home__data" key={item.id}>
                <h1 className="home__title">{item.title}</h1>

                {item.subtitle === "Front End Developer" ? (
                  <h3 className="home__subtitle">{item.subtitle}</h3>
                ) : (
                  <h3 className="home__subtitle">{item.subtitle}</h3>
                )}

                <p className="home__description">{item.description}</p>

                <button onClick={handleDownload} className="button button--flex">
                  {item.buttonLabel}
                </button>
              </div>
            ))}
          </div>
          <div className="home__img"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
