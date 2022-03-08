import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // we need convert the input in are input box to a numba/interger
    // NOTE: number inputed in the form are mostly string so always convert to numba
    // you know you can change state directly
    let amount = parseInt(count); // passed count state to a new variable to be able to change the value
    if (count <= 0) {
      // once number is 0 give us 1 item
      amount = 1;
    }
    if (count > 8) {
      // even when we get inputted number above array lenght give us the last array(8 here)
      amount = 8;
    }
    // we are passing data to our text array and setin the amount of paragraph
    // in the new array that should be display based on the number we inputed in the form
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
