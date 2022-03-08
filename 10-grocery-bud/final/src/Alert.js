import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  // when something changes frm our list(array) we clear(clearTimeout) the alert
  // and restart the useEffect to the new Alert option ( that is why we added [list] array with value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout); // to clear our timeout variable
  }, [list]); // the useEffect will re-run only when the list items/item is update
  // so if u add item the success item added and if u immediately delete an item the alert danger pops
  // up and start its it on countdown to clear
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
