 import React, { Component }  from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/MB-logo.png';
import LinkedIn from '../assets/img/nav-icon1.png';
import Github from '../assets/img/nav-icon2.png';
import Email from '../assets/img/nav-icon3.png';
import Resume from '../assets/font/Resume_pdf.pdf';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router className="top">
      <Navbar expand="md" className={scrolled ? "scrolled" : "main"} sticky="top" >
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="Logo" className='mblogo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contact Me</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="http://linkedin.com/in/marlon-bailey-jr" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="" /></a>
                <a href="https://github.com/Sweatlys" target="_blank" rel="noreferrer"><img src={Github} alt="" /></a>
                <a href='mailto:marlonbbusiness@gmail.com'><img src={Email} alt="" /></a>
              </div>
                <a href={Resume} download="MarlonBaileyJr_Resume" >
                <button className='vvd'><span>Download My Resume</span></button>
                </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
