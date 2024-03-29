import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list"); // get that list we set to the local storage
  if (list) {
    // check to see if it has value // if yes return the value
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    // if not return an empty array
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value"); // it alert when name is empty
    } else if (name && isEditing) {
      // we need name to have value to be able to edit item in list
      setList(
        list.map((item) => {
          // check to see if the item to be edited match that of any one in list array
          // if it matches then push the item(both id and new edited title to list array of object)
          if (item.id === editID) {
            return { ...item, title: name }; // return everything about the particular item and the changed title
          }
          return item; // else return same item an values
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  // always uses this js es6 format for method that needs argument added by each componen/function using it
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id); // find the id to edit
    setIsEditing(true); // isEditing will bcom true
    setEditID(id); // pass the id to editId
    setName(specificItem.title); // pass the title of that id to name(controlled form value(name) to display)
  };
  useEffect(() => {
    // firstly we set the localStorage to run when ever the list is updated
    // that mean we set our array to the local storage and when any changes to the array or object
    // it clears the old data and return new on
    localStorage.setItem("list", JSON.stringify(list)); // the name of our array is list and need to be stringify for JSON
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
