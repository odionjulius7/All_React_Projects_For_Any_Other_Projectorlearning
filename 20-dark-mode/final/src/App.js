import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme = "light-theme"; // with dis the app will break, so set the default for localStorage
  // just setting a default value for the theme in locale storage
  // just incase there is no value or variable as such
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      // the state value should have the same exact name of the classNme in the css
      // for it to work accordingly
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    // pass theme(state) to the html as className to use the value as :root
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); // set theme to locale storage
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
