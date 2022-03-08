import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null); // giving the ref the div node a ref that can be used to get it height, length, value
  const linksRef = useRef(null); // ref point to the node ul with an initial value of null
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    // ul: ref-> getting the height of the li container(ul)
    const linksHeight = linksRef.current.getBoundingClientRect().height; // javascript method to get node height
    // console.log(linksContainerRef.current.getBoundingClientRect()) the height here will be 0px
    if (showLinks) {
      // if showLink is true pass the height of the ul.link to it parent div
      linksContainerRef.current.style.height = `${linksHeight}px`;
      // here we point to the cuurent node which is div to get the style height and pass it the childNode (ul) height
      // to make a dinamic height when more links are added to link(data array) the height automatically increase itself
      // console.log(linksContainerRef.current.getBoundingClientRect()) the height is dependent on ul:dislay block height
    } else {
      linksContainerRef.current.style.height = "0px"; // goes back to it 0px set in index.css
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* ref={linksContainerRef} here point to the div (just like get element by id, tagName etc) */}
        <div className="links-container" ref={linksContainerRef}>
          {/* ref={linksRef} here point to the ul list (just like get element by id, tagName etc) */}
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
