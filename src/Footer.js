import React from 'react';
import {
  MDBFooter
} from 'mdb-react-ui-kit';
import { 
	FaGithub,
	FaLinkedin, 
	FaGoogle
 } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const marginLeft = {marginLeft: '0.5rem'};
  const textDecoration = {textDecoration: "none"};
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
	  Sylvia Wang | Copyright © {currentYear}
		<a style={{ marginLeft: '2rem' }} href="https://www.linkedin.com/in/sylviawang8307/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
		<a href="mailto:sylviawang830@gmail.com" style={{ marginLeft: '0.7rem' }} target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
		<a href="https://github.com/sylvia830" style= {{...textDecoration, ...marginLeft}} target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
      </div>
    </MDBFooter>
  );
}