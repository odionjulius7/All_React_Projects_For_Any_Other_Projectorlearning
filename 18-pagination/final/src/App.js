import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0); // to get the index of the arrays in the paginated data
  const [followers, setFollowers] = useState([]); //push each index position to a <follower /> to display

  //oue useEffect will rerun and setFollowers (only when data is fetched) i.e loading becomes false
  // that is the need for our dependency array of loading to avoid error
  // note: when ever page value chnges den rerender the page
  useEffect(() => {
    // to avoid error when the data initially start fetching and it still loading
    // if (loading) then return nothing
    if (loading) return;
    setFollowers(data[page]); //after fetching, setfollowers' data-> pages base on the page index we want
  }, [loading, page]); // when page value changes den rerun useEffect and passed d value to setFollowers index
  //when loading value changes(i.e until loading becomes false and data fetched before setFollowers pages)

  // like our slider app
  const nextPage = () => {
    // we set next page to add 1 to page's old value to go forward
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        // if next increases to more than last value in our data return 0,(i.e 1st page)
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index); // pass each click index position to page and change followers array
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {
          // if loading is true don't display these btn of pages we have from the arrays of array(data)
          !loading && (
            <div className="btn-container">
              <button className="prev-btn" onClick={prevPage}>
                prev
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    }`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                    {/* if we don't add 1 to our index the pages btn will start as follow 0, 1, 2, 3.. */}
                  </button>
                );
              })}
              <button className="next-btn" onClick={nextPage}>
                next
              </button>
            </div>
          )
        }
      </section>
    </main>
  );
}

export default App;
