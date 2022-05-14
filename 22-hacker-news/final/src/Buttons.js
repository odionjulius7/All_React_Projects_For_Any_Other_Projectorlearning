import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      {/* passing the "dec" or "inc" string to the handle for reducer to use for execution */}
      <button
        // disable btn when loading is true, to avoid over clicking
        // the it's enabled after finishing fetching data of the particular page
        disabled={isLoading}
        onClick={() => handlePage("dec")}
      >
        prev
      </button>
      <p>
        {/* we want our 1st page to show 1 instead of d default 0 it starts frm on the API */}
        {page + 1} of {nbPages}
      </p>
      <button
        // disable btn when loading is true, to avoid over clicking
        // the it's enabled after finishing fetching data of the particular page
        disabled={isLoading}
        onClick={() => handlePage("inc")}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
