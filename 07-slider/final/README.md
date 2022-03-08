# all this explanation is from the video from youtube (code 15 react project-complete course) by john smila 8:55minutes upward for git, netlify and redirect 

## NOTE: there is always an issue with using react-router and netlify, where when u refresh a link page the netlify with tell you page not found

# 1: to fix that netlify complain create a _redirects file in the public folder and insert this into it 
 /*    /index.html   200 
## exactly /*    /index.html   200 into the _redirect file of public folder

# 3: in package.json always change the "build": "react-scripts build" to "build": "CI= react-scripts build" cos of the the build error netliy always encounter and it always help you rebuild in netlify when you push changes to github 

# 4: finally u can use the github icon at the left side of the editor(vscode) under the file, under the searcg icon to commit and push changes to ur github repo neatly 



# react-projects-7-slider

## watch the video: code 15 react projects-complete course @ 2:30:00 to get more understanding of the

<!-- slider functionality
     it uses useEffect and map() with two params and
     get the className of each position to set nextSlide, activeSlide and lastSlide
     of each items and (className set up the overflow, tranform:translateX
     with the container
 -->

#### IN ACTION

[Gatsby-Airtable Project](https://gatsby-airtable-design-project.netlify.app/)
