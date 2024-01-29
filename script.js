"use strict";

/**
 *  Add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 *  navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

/**
 *  header active when scroll down
 */
const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100
    ? header.classList.add("active")
    : header.classList.remove("active");
};

addEventOnElem(window, "scroll".headerActive); 
