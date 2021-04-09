// import Logo from '../Ritvick.png';
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Colour change for navbar on scrolling code.

const navbarScroll = () => {
 window.addEventListener("scroll", () => {
  let distance = window.scrollY;
  if (distance > 80) {
   document.querySelector(".rvp-navbar").classList.add("rvp-scroll-background");
  } else {
   document
    .querySelector(".rvp-navbar")
    .classList.remove("rvp-scroll-background");
  }
 });
};

// Navbar individual letter transformation code.

const navAnimation = function () {
 let blinkTextMenuLinks = document.querySelectorAll(".nav-item");
 blinkTextMenuLinks.forEach((link) => {
  let letters = link.textContent.split("");
  link.textContent = "";
  letters.forEach((letter, i) => {
   let span = document.createElement("span");
   let letterOut = document.createElement("span");
   letterOut.textContent = letter;
   letterOut.classList.add("rvp-out");
   span.append(letterOut);
   let letterIn = document.createElement("span");
   letterIn.textContent = letter;
   letterIn.classList.add("rvp-in");
   span.append(letterIn);
   link.append(span);
  });
 });
};

// function for opening and closing of navbar in mobile view

const toggleNavDefinition = () => {
 const threeNavBars = document.querySelectorAll(".rvp-button-bars");
 const classNames = threeNavBars[1].classList;
 let buttonClicked = false;
 classNames.forEach((name) => {
  if (name === "rvp-disappear") {
   buttonClicked = true;
  }
 });
 if (!buttonClicked) {
  threeNavBars.forEach((nav, i) => {
   if (i % 2 !== 0) {
    nav.classList.add("rvp-disappear");
   } else {
    if (i < 1) nav.classList.add("rvp-rotate-nav-bars-Clockwise");
    else nav.classList.add("rvp-rotate-nav-bars-anticlockwise");
   }
  });

  document
   .querySelector(".rvp-mobile-nav")
   .classList.add("rvp-mobile-nav-appear");
 } else {
  threeNavBars.forEach((nav, i) => {
   if (i % 2 !== 0) {
    nav.classList.remove("rvp-disappear");
   } else {
    if (i < 1) nav.classList.remove("rvp-rotate-nav-bars-Clockwise");
    else nav.classList.remove("rvp-rotate-nav-bars-anticlockwise");
   }
  });

  document
   .querySelector(".rvp-mobile-nav")
   .classList.remove("rvp-mobile-nav-appear");
 }
};

// Closing navbar upon clicking of a link function

const closeNavDefinition = () => {
 const threeNavBars = document.querySelectorAll(".rvp-button-bars");

 threeNavBars.forEach((nav, i) => {
  if (i % 2 !== 0) {
   nav.classList.remove("rvp-disappear");
  } else {
   if (i < 1) nav.classList.remove("rvp-rotate-nav-bars-Clockwise");
   else nav.classList.remove("rvp-rotate-nav-bars-anticlockwise");
  }
 });

 document
  .querySelector(".rvp-mobile-nav")
  .classList.remove("rvp-mobile-nav-appear");
};

// Main Navbar jsx code

const Navbar = () => {
 const toggleNav = toggleNavDefinition;
 const NavbarColourToggler = navbarScroll;
 const closeNav = closeNavDefinition;
 const animate = navAnimation;
 useEffect(() => {
  animate();
  NavbarColourToggler();
 });

 return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top rvp-navbar">
   <h1 className="navbar-brand ml-auto d-lg-none">
    <NavLink className="navbar-brand" to="/">
     RITVICK PANDEY
    </NavLink>
   </h1>
   <button
    className="rvp-toggler d-block d-lg-none ml-auto"
    type="button"
    onClick={toggleNav}
   >
    <div className="rvp-button-bars"></div>
    <div className="rvp-button-bars"></div>
    <div className="rvp-button-bars"></div>
   </button>
   <div className="container-fluid rvp-mobile-nav d-lg-none">
    <div className="rvp-mobile-nav-body text-center">
     <NavLink exact className="nav-item nav-link" to="/" onClick={closeNav}>
      Home
     </NavLink>

     <NavLink className="nav-item nav-link" to="contact" onClick={closeNav}>
      Contact
     </NavLink>

     <NavLink className="nav-item nav-link" to="projects" onClick={closeNav}>
      Projects
     </NavLink>

     <NavLink
      className="nav-item nav-link"
      to="certifications"
      onClick={closeNav}
     >
      Certifications
     </NavLink>
    </div>
   </div>
   <div
    className="collapse navbar-collapse rvp-title-center"
    id="navbarNavAltMarkup"
   >
    <div className="navbar-nav m-auto">
     <NavLink exact className="nav-item nav-link" to="/">
      Home
     </NavLink>

     <NavLink className="nav-item nav-link" to="certifications">
      Certifications
     </NavLink>

     <NavLink className="navbar-brand" to="/">
      <img src="../portfolio-logo-ritvick.svg" alt="logo" height="30px" />
     </NavLink>

     <NavLink className="nav-item nav-link" to="projects">
      Projects
     </NavLink>

     <NavLink className="nav-item nav-link" to="contact">
      Contact
     </NavLink>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
