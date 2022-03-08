# all this explanation is from the video from youtube (code 15 react project-complete course) by john smila 8:55minutes upward for git, netlify and redirect 

## NOTE: there is always an issue with using react-router and netlify, where when u refresh a link page the netlify with tell you page not found

# 1: to fix that netlify complain create a _redirects file in the public folder and insert this into it 
 /*    /index.html   200 
## exactly /*    /index.html   200 into the _redirect file of public folder

# 3: in package.json always change the "build": "react-scripts build" to "build": "CI= react-scripts build" cos of the the build error netliy always encounter and it always help you rebuild in netlify when you push changes to github 

# 4: finally u can use the github icon at the left side of the editor(vscode) under the file, under the searcg icon to commit and push changes to ur github repo neatly 



## <App /> Getting a specific number of items from inputting the exact number items in the input box

<!-- e.g u need 5 items then input d number 5 -->

<!-- import data from "./data";
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
}; -->
