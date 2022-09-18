import React from "react";
import { 
	Box,
	Button, 
	Grid,
	Typography,
	ThemeProvider
} from "@mui/material";
import about from './about.jpeg';
import {
	FaFileDownload
 } from "react-icons/fa";

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
	black: {
	  main: '#000000',
	  contrastText: '#0066b2',
	}
  },
});

function About(){
	const bold = { fontWeight: 600 };
	const marginBottom = { marginBottom: 35 };
	const marginTop = {marginTop: 20};
	
	return (
		<div className="contact" style={{background: '#0066b2'}}>
			<Box p={8}>
			<Typography variant="h3" align="center" style={{ ...bold, ...marginBottom, ...marginTop }}>About Me</Typography>
			<Box p={8}>
				<Grid container spacing={5}>
					<img className="aboutImg" src={about} alt=""></img>
					<div className="intro">
						<Typography variant="h6" style={{fontWeight: 600}}>I'm Sylvia and currently a 3rd-year student pursuing a degree in Business and Computer Science at UBC.</Typography>
						<p style = {{marginTop: 15}}>I'm passionate about the multifarious applications of technology in business sectors that elevate our lifestyle. I enjoy working in team settings where there's so 
						much to learn from each other. I'm beyond thrilled to work in the tech-business industry and embrace all learning opportunities! </p>
						<p>I LOVE music big time and have dedicated quite a few hours a day curating my playlists. I also write some pieces but it's just too awkward to put them out there :) Outside of work and classes, I'm 
						most likely to be seen with my headphones on bopping to some tunes as I normally spend my waking hours exploring/discovering new music/genres. 
						My music heroes are ye, Frank Ocean, Solange, Kendrick Lamar, Bon Iver and FKA Twigs. Having discussions about music makes my brain tingle with serotonin. I also love 
						watching sitcoms, indie films and collecting vinyl records.</p>
						<div className="resume">
							<ThemeProvider theme={theme}>
								<Button color="black" variant="contained" startIcon={<FaFileDownload />} href="https://sylvia830.github.io/Sylvia_Wang_Resume/" target="_blank" rel="noopener noreferrer" style={{marginTop:15}}>Resume</Button>
							</ThemeProvider>
						</div>
					</div>
				</Grid>
			</Box>
			</Box>
		</div>
	);
}

export default About;