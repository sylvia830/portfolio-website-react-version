import React from "react";

import { Navbar, Nav } from 'react-bootstrap';

import { LinkContainer } from "react-router-bootstrap";

function NavbarComp(){
	return (
		<div>
			<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  			<Navbar.Brand href="#home"><b>Sylvia Wang</b></Navbar.Brand>
  			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="responsive-navbar-nav">
    		<Nav className="ms-auto">
				<LinkContainer to ="/">
				<Nav.Link>Home</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/aboutme">
      			<Nav.Link>About Me</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/experience">
      			<Nav.Link>Experience</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/projects">
				<Nav.Link>Projects</Nav.Link>
				</LinkContainer>
				<LinkContainer to="contact">
				<Nav.Link>Contact</Nav.Link>
				</LinkContainer>	
    		</Nav>
  			</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComp;