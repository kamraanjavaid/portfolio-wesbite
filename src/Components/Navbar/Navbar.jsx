<<<<<<< HEAD
import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
=======
import React, { useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {
  const [menu, setMenu] = useState('menu');
>>>>>>> color-update
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
<<<<<<< HEAD
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logoImg" />
      <img src={menu_open} alt="" className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          className="nav-mob-close"
          id="close-menu"
          onClick={closeMenu}
        />

        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={underline} className="underline_img" />
          ) : (
            <></>
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? (
            <img src={underline} className="underline_img" />
          ) : (
            <></>
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src={underline} className="underline_img" />
          ) : (
            <></>
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? (
            <img src={underline} className="underline_img" />
          ) : (
            <></>
          )}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src={underline} className="underline_img" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
=======
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logoImg' />
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className='nav-mob-close' id='close-menu' onClick={closeMenu} />

        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === 'home' ? <img src={underline} className='underline_img' /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')}>About</p></AnchorLink>{menu === 'about' ? <img src={underline} className='underline_img' /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('services')}>Services</p></AnchorLink>{menu === 'services' ? <img src={underline} className='underline_img' /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu === 'portfolio' ? <img src={underline} className='underline_img' /> : <></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} className='underline_img' /> : <></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
>>>>>>> color-update
