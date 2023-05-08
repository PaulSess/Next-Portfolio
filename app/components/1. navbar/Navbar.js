import Image from 'next/image'
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './navbar.css'


export default function Navbar() {

  if (typeof window !== 'undefined') {
    const navbar = document.getElementById("navbar");
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else if (currentScrollPos > 100) {
        navbar.style.top = "-82px";
      }
      prevScrollpos = currentScrollPos;
    }
}


  return (
    <>
      <nav id="navbar">
        <i id="dev-tag" class="fa-solid fa-code navcodeicon hiddenleft"></i>
        <a id="nav-projects" class="navlink hiddenleft" href="#projects">
          <i id='nav-i' class="fa-solid fa-angles-right"></i>
          Projects
        </a>
        {/* <!-- <a class="github-nav" target="_blank" href="https://github.com/PaulSess"><img src="./images/github.svg" alt="github link"></a> -->
        <!-- ----------  --> */}
        {/* <script src="./JavaScript files/navbar.js"></script> */}
      </nav>
    </>
  )
}
