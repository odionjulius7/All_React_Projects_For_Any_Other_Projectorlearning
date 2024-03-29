import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  // const answers = [...incorrect_answers, correct_answer]
  let answers = [...incorrect_answers]; // giving all spread incorrect answers to answers variable
  const tempIndex = Math.floor(Math.random() * 4); // getting a random number for manipulating
  //  where to put/pusg the correct answers to btwn the incorrect_answers
  if (tempIndex === 3) {
    // if random number is 3 (dat's it is greater than d last number on the incorrect_answers starting from zero)
    answers.push(correct_answer); // push the correct_answer to the end of answers (that has the values of incorrect_answer in it)
  } else {
    // else push the answers( answers[incorrect_answer that has the same index position as our random numba to the end of answers array])
    answers.push(answers[tempIndex]);
    // and put the correct_answer on that position of the above we push to the end(i.e push incorrct to the end and put the correct in it place)
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {/* the above if statement wil take play before diplaying the answers values */}
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
