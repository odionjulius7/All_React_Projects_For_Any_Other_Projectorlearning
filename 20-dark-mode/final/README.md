## Learnt how to develop a dark mode app

# toggle btwn light and dark

## NOTE: we learnt to use momentjs liberal to get time set time and format time for good visual reading

<!--

/*
// CSS CUSTOM VARIABLE
the :root is the root of our document object(html)
and with this any custom variable(color, styling, fontsizing value here
can be accessed any in the body document
i.e u can pass var(--clr-font) any where
*/
:root {
  --clr-bcg: #fff;
  --clr-font: #282c35;
  --clr-primary: #d23669;
}

/*
// CSS CUSTOM VARIABLE
  here come the aspect of a className, the value of the custom variable can't be
  any except by the particular class
const [theme, setTheme] = useState('dark-theme')
  NOTE: document.documentElement.className = theme;// we can use this
  to set and change the className of the html tag itself to make the classNmae take over the root of the html
  & it value used every where in the body element
*/
.dark-theme {
  --clr-bcg: #282c35;
  --clr-font: #fff;
  --clr-primary: #ffa7c4;
}
.light-theme {
  --clr-bcg: #fff;
  --clr-font: #282c35;
  --clr-primary: #d23669;
}

 -->
