import React, { useState, useEffect } from "react";
import "./home.css";
import Social from "./Social";
import { summary } from "../../Data";

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <h3 className="home__subtitle">{displayText}</h3>;
};

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__content--data">
            <Social />
            {summary.map((item) => (
              <div className="home__data" key={item.id}>
                <h1 className="home__title">{item.title}</h1>

                {item.subtitle === "Front End Developer" ? (
                  <TypingEffect text={item.subtitle} />
                ) : (
                  <h3 className="home__subtitle">{item.subtitle}</h3>
                )}

                <p className="home__description">{item.description}</p>

                <a href="#contact" className="button button--flex">
                  {item.buttonLabel}
                </a>
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
