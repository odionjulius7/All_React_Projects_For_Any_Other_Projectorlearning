
# all this explanation is from the video from youtube (code 15 react project-complete course) by john smila 8:55minutes upward for git, netlify and redirect 

## NOTE: there is always an issue with using react-router and netlify, where when u refresh a link page the netlify with tell you page not found

# 1: to fix that netlify complain create a _redirects file in the public folder and insert this into it 
 /*    /index.html   200 
## exactly /*    /index.html   200 into the _redirect file of public folder

# 3: in package.json always change the "build": "react-scripts build" to "build": "CI= react-scripts build" cos of the the build error netliy always encounter and it always help you rebuild in netlify when you push changes to github 

# 4: finally u can use the github icon at the left side of the editor(vscode) under the file, under the searcg icon to commit and push changes to ur github repo neatly 


## on the video from youtube (code 15 react project-complete course) by John Smilga

# HERE, we get the <CartItem /> Increase the number of item, reduce the number of that particular item
# get the total amount of each item, Get the total amount of items in cart
# get the to total price of all items in the cart (bonus: get price of each item too)

# We made used of CONTEXT API Together with useReducer(reducer, action) and useEffect to make an API call fr items  