import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {
            // since we just want to show fewer chararters in our info &{info}
            // and the value of &{info} is string we use the substring() method to cut
            // out the few/limited data needed to be shown at first
            // starting from zero cut 200 charact and show it.
            readMore ? info : `${info.substring(0, 200)}...`
          }
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        {/* 
      ## if the readMore is true that means the full info value will display 
        and the show less button will show to toggle it */}
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
