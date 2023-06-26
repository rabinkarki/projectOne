import React from 'react'
import "../styles/App.scss";
import { Link } from 'react-router-dom';
import "../styles/header.scss"
import { HashLink } from "react-router-hash-link";

 const header = () => {
  return (
    <nav>
      <h1>Microsmart</h1>
      <main>
        <HashLink to="/">Home</HashLink>
        <HashLink to="/contact">Contact</HashLink>
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/#brand">Brand</HashLink>
        <HashLink to="/services">Services</HashLink>
        </main>
    </nav>
  )
}
export default header