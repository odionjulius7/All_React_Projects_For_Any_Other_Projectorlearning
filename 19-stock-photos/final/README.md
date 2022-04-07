# Getting images from unsplash api -> making a get api call to the get random and search endpoint

# search on google for 'cra env variable' or visit: https://create-react-app.dev/docs/adding-custom-environment-variables/ for how to use the naming of the var that holds d api keys

# down here show how to disable the reactjs complaint of a missing dependency if u don't want to add the array

<!-- check the <App /> useEffect that fetch items -->
<!-- React Hook useEffect has a missing dependency: 'loading'. Either include it or remove the dependency array
To ignore, add // eslint-disable-next-line to the line before. -->

<!--
note: you must always prefix the naming with REACT_APP before adding the name of d key e.g REACT_APP_MY_API_NEW_KEY
& to access d key on d app.js(or any src file u need it) u must use process.env.REACT_APP_MY_API_NEW_KEY
 -->

# after creating d .env and adding the key and variable always restart the server

        <!-- Check the .env and gitignore file -->

# when you create a .env file to hide an API key remember to add it to the gitignore file so that when

# you push it to github no one can access ur key(they will be ignore while being pushed)
