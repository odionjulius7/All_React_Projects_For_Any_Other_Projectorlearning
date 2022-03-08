import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// setting up our Category item? query by category
// const allCategories = new set(items.map(item=> item.category))
// what we did is push each item(items[category]) to a new variable
// but Note: that there're some category that appears more than once in
// our items array(e.g lunch appears 3 tims) new set() help get the unique items
// so everyone that appears more than once, that set() will choose the 1st of it kind
// but we don't have item[category] of value all(which is not possible)
// we created an new array with "ALL" as the first value and destructured the value of the set() method
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // NOTE: the useState(menuItems) value is changeable to either display all items or by categories
  //  but the main won't that's y we used it to get the allCategories
  // and just in case another category is added so that new one will still added to the allcategories
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items); //push items to menuItems
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems); // push all that matching item[categories] to menuItems
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
