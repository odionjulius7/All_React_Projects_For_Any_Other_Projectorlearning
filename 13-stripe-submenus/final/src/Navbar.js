import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    // console.log(e.target.getBoundingClientRect());
    // here we are trying to get the center of the submenu to the text.targetted// 
    // text hovered on
    const page = e.target.textContent;// get the text content of the menu/ html tag hovered over

    const tempBtn = e.target.getBoundingClientRect(); // to get height, width, left, right, bttm, top position size of an element

    const center = (tempBtn.left + tempBtn.right) / 2; // center position
    const bottom = tempBtn.bottom - 3; // get the bttom posioton
    openSubmenu(page, { center, bottom });// sent to the text and the location bot 
    //  bottom & center of the text where the SVG/backgroung will be position to it menu hovered on
  };
  const handleSubmenu = (e) => {
    // to close the submenu when we hover over class[ nav / nav-center] areas that is not link-btn 
    if (!e.target.classList.contains('link-btn')) {
      // javascript: classList.contain helps check if the className contains the links-btn
      // if not close the submenu
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
