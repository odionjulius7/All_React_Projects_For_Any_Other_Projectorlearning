import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

import Photo from "./Photo";

// clientID gets the api key from yhe .env(accessed like dis process.env)
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

// remove current scroll code
// set default page to 1
// setup two useEffects
// don't run second on initial render
// check for query value
// if page 1 fetch images
// otherwise setPage(1)
// fix scroll functionality

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const mounted = useRef(false);
  const [newImages, setNewImages] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      // to get default pictures frm the unsplash api without searching when we first load the page(useEffect)
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        // note: we need wipe out the old data useEffect() fetched on start but when we query(search)
        // i.e if we serch at first which indicate are page to 1 at the first search
        if (query && page === 1) {
          // we revert page value to default 1 on handleSubmit
          // our search result data are in data.result, not directly in data object
          return data.results;
        } else if (query) {
          // here after searching result of first page items(of search result) and when scroll t the end of body document
          // the old search result is spread and the new data.result of page to is fetch automatically for that same
          // searched item searched for initial for page 1, page 2 populate more
          return [...oldPhotos, ...data.results];
        } else {
          // when we scroll to the end of our body we start fetch new items
          // spreading the older ones(useEffect got us) and adding the new ones to the end of the list on page value change
          return [...oldPhotos, ...data];
        }
      });
      setNewImages(false);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      setNewImages(false);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]); // we fetch new items at d end of the body based on page value change

  //
  // we want to use ths use effect to only update on the second rendering
  // and not on the first time the app loads
  useEffect(() => {
    if (!mounted.current) {
      // if this dis isn't true then the code snippet underneath won't run
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
  }, [newImages]);

  //
  //
  // this event variable helps us get the height of our scroll in y-axis,
  // the body height(i.e how big the body is) and the height of the window object
  const event = () => {
    // checking to see if the window height added to the scroll y-axis is equal or greater than the
    // body height // if true then the newImages state bcoms true for useEffect to fetch new data and
    // append to the end of the last document and then populate
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      // the minus 2 to the body height here reduces d height of body so we can quick fetch
      // new item & display before we scroll to the extreme end of the body height
      setNewImages(true);
    }
  };

  //
  //
  // this is used for get/fetch more data when we get to the tail end of (d body document last item)
  // or the tail end of the items we got initially when the app loaded
  // so to keep populating for more items underneath
  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  //
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return; // if not input in d input box and we clikt the search btn reurn nothing
    if (page === 1) {
      // only return somthing when page is equal s 1 and there is input in d input box
      fetchImages();
    }
    setPage(1); // we set page value back to it default of 1 we we at first search
    // but will get new plus the searched old value value when we scroll down to change the page to 2 ...
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {
          // to load more items when we scroll to the end of the body document
          loading && <h2 className="loading">Loading...</h2>
        }
      </section>
    </main>
  );
}

export default App;
