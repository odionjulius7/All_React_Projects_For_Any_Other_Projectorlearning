
# all this explanation is from the video from youtube (code 15 react project-complete course) by john smila 8:55minutes upward for git, netlify and redirect 

## NOTE: there is always an issue with using react-router and netlify, where when u refresh a link page the netlify with tell you page not found

# 1: to fix that netlify complain create a _redirects file in the public folder and insert this into it 
 /*    /index.html   200 
## exactly /*    /index.html   200 into the _redirect file of public folder

# 3: in package.json always change the "build": "react-scripts build" to "build": "CI= react-scripts build" cos of the the build error netliy always encounter and it always help you rebuild in netlify when you push changes to github 

# 4: finally u can use the github icon at the left side of the editor(vscode) under the file, under the searcg icon to commit and push changes to ur github repo neatly 

## 3: in <Context /> fetchDrink()
// when there is an issue/conplain in the console that react useEffect() is missing a dependency(array)
// always use useCallback() hook to resolve the issue
// i.e only if the searchTerm changes that when to create/run the fetchDrink from scratch
// and if it doesn't then don't created from scratch : that will resolve the issue 



## Search Form -> uncontrolled form
<!-- React.useEffect(() => {
    //everytime we enter the home page the cursor 
    // should focus(i.e the typing cursor should highlight the serach bar)
    searchValue.current.focus() 
  }, []) -->

  <!-- function handleSubmit(e) {
    e.preventDefault() // to prevent automatic page reloading when the user press enter key 
    // even without searching any thing in search bar 
  } -->

```

