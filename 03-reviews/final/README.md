## on the video from youtube (code 15 react project-complete course)

## carousel: display slide image by clicking a btn to get the next image slide WEB APP <Review />

## const [index, setIndex] = useState(0);

// getting a single item to display out of many items in an array
// just like getting question 1 from questions arrray before moving to question 2

## const { name, job, image, text } = people[index]; // people is our persons array

// checking to see if every item position has been reach(let say array that has
// 4 items get to each position(display))
// and stopping your App from breaking(crashing) when the index metric use in getting
// each position(index) is more than the length(supercede) or the array

## const checkNumber = (number) => {

// arrays count from 0 up so the last itm in a 4 item array is 3
// that's need fron - 1

## if (number > people.length - 1) {

// if greater then return the numba 0 position(first item)

## return 0;

}

## if (number < 0) {

// if less than zero then return last item in the arrray

## return people.length - 1;

}
// else return the number we have: NOTE number is the index(useState) metric used in getting the position

## return number;

};

  <!-- can do so for prevPerson -1 -->

const nextPerson = () => {
setIndex((index) => {
let newIndex = index + 1;

## then check the number gotten before sending to state to avoid crashing d APP is the numba

## gotten is greater total arrylength or less dan 0

return checkNumber(newIndex);
});
};

const randomPerson = () => {
let randomNumber = Math.floor(Math.random() \* people.length);
if (randomNumber === index) {

## to avoid gettin same random numba at the same time

## check if the randomNumba is the same with prev index if so + 1 to get a different number

randomNumber = index + 1;
}
setIndex(checkNumber(randomNumber));
};
