import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  // this useEffect is for the btns setIndex( increase or decrease)
  useEffect(() => {
    const lastIndex = people.length - 1;
    // if any of this matches
    if (index < 0) {
      // when use btns setIndex(decrease) set to last item
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      // when we use btns setIndex( increase ) set to 1st item
      setIndex(0);
    }
  }, [index, people]); // the two values in our dependency array allow the useEffect to run when either of d 2 changes

  // now we set the time it wiltake to automatically change index number
  // the clean up func helps clear the setInterval func so when we click
  // on that onClick event and increase or decrease the timer start 5minutes after that click to avoid glitch
  useEffect(() => {
    // for the automative slider
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    }; // the clearInterval is the clean up funct we ne to clear the setInterval
    // (if the clearIterval function is set at 5 second the index changes and that function is clear  to start all
    // over again to avoid automatic glitch(of keep adding up))
  }, [index]); // it update when the index change and clear( for clean up like componentWillUnmount)

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          // the className position of our individual article
          // where all the slide come from
          let position = "nextSlide";
          if (personIndex === index) {
            // the centered slide(the one in focus)
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            // the previous the id less that the personIndex position(when it increases)
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
