# all this explanation is from the video from youtube (code 15 react project-complete course) by john smila 8:55minutes upward for git, netlify and redirect 

## NOTE: there is always an issue with using react-router and netlify, where when u refresh a link page the netlify with tell you page not found

# 1: to fix that netlify complain create a _redirects file in the public folder and insert this into it 
 /*    /index.html   200 
## exactly /*    /index.html   200 into the _redirect file of public folder

# 3: in package.json always change the "build": "react-scripts build" to "build": "CI= react-scripts build" cos of the the build error netliy always encounter and it always help you rebuild in netlify when you push changes to github 

# 4: finally u can use the github icon at the left side of the editor(vscode) under the file, under the searcg icon to commit and push changes to ur github repo neatly 





## on the video from youtube (code 15 react project-complete course)

# react-projects-5-menu <Menu /> <Categories />

## teaches on how to get unique items in array

## import items from "./data";

// setting up our Category item? query by category
// const allCategories = new set(items.map(item=> item.category))
// what we did is push each item(items[category]) to a new variable
// but Note: that there're some category that appears more than once in
// our items array(e.g lunch appears 3 tims) new set() help get the unique items
// so everyone that appears more than once, that set() will choose the 1st of it kind.
// but we don't have item[category] of value all (which is not possible since we only have specifics)
// we created a new array with "ALL" as the first value and use SPRREAD operator copy the values of the set() method

## const allCategories = ["all", ...new Set(items.map((item) => item.category))]; // instead of getting an object we made it an array

## function App() {

// NOTE: the useState(menuItems) value is changeable to either display all items or by categories
// but the main won't that's y we used it to get the allCategories
// and just in case another category is added so that new one will still added to the allcategories

## const [menuItems, setMenuItems] = useState(items);

## const [categories, setCategories] = useState(allCategories);

const filterItems = (category) => {
if (category === "all") {
setMenuItems(items); //push items to menuItems
return;
}
const newItems = items.filter((item) => item.category === category);
setMenuItems(newItems); // push all that matching item[categories] to menuItems

## };
