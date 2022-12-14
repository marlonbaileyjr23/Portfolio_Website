import React, { Component }  from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import movieLandimg from "../assets/img/project-img1.png";
import {ProjectCard} from "./ProjectCard";
import comingsoon from "../assets/img/comingsoon.png";




export const Projects = () => {
    const projects1 = [
        {
            title: "Movie Land",
            description: "API, Design, Development",
            imgUrl: movieLandimg,
          },
        ];

    return(
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>My Current Projects</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                            </Nav.Item>
                                <Nav.Item>
                            <Nav.Link eventKey="second">Landing Pages</Nav.Link>
                                </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects1.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                    key={index}
                                                    {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">        
                                <Row>
                                    <h1>Coming Soon</h1>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}