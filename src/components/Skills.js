import React, { Component }  from 'react';
import javascript from "../assets/img/meter1.png";
import HTML from "../assets/img/meter2.png";
import CSS from "../assets/img/meter3.png";
import Java from "../assets/img/meter4.png";
import M from "../assets/img/meter5.png";
import Python from "../assets/img/meter6.png";
import ReactJS from "../assets/img/meter7.png";
import API from "../assets/img/meter8.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">  
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={HTML} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={M} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={ReactJS} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={API} alt="Image" />
                                <h5>API</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }