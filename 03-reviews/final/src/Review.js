import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);

  // getting a single item to display out of many items in an array
  // just like getting question 1 from questions arrray before moving to question 2
  const { name, job, image, text } = people[index];

  // checking to see if every item position has been reach(let say array that has
  // 4 items get to each position(display))
  //  and stopping your App from breaking(crashing) when the index metric use in getting
  // each position(index)  is more than the length(supercede) or the array
  const checkNumber = (number) => {
    // arrays count from 0 up so the last itm in a 4 item array is 3
    // that's need fron - 1
    if (number > people.length - 1) {
      // if greater then return the numba 0 position(first item)
      return 0;
    }
    if (number < 0) {
      // if less than zero then return last item in the arrray
      return people.length - 1;
    }
    // else return the number we have: NOTE number is the index(useState) metric used in getting the position
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">
        {name}
        {/* <br />
        {name.charAt(0)} */}
      </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
