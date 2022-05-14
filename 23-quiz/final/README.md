## In <App /> we learn on how to manipulate array items position with generated random number to change where the correct answers appear in each display as not to keep appearing in one position

<!-- const { question, incorrect_answers, correct_answer } = questions[index];
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
  } -->
