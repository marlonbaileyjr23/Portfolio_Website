import {useState, useEffect} from 'react';
import React, { Component }  from 'react';
import { Row,Container,Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Software Engineer', 'Full Stack Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta]=useState(300-Math.random()*100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta )

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta=>prevDelta/2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }


    return(
        <section className='banner' id='home'> 
            <div className='blurry-bg'></div>
            <div className='info'>
                <Container className='words-logo'>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className='tagline'>Welcome to my Portfolio Website</span>
                            <h1>
                                {"Hi I'm a \n"}
                                <span className='wrap'>{text}</span> 
                            </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Image" />
                        </Col>
                    </Row>
                </Container>
            </div>    
        </section>
    )
}