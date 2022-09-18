import { Box, Typography } from "@mui/material";
import React from "react";
import home from "./home.jpeg";
import TypeWriterEffect from 'react-typewriter-effect';

function Home(){

	return (
		<div className='home' style={{ backgroundImage:`url(${home})`,backgroundSize:"cover", backgroundAttachment: 'fixed', opacity: 0.8}}>
			<Box p={15}>
				<Typography variant="h5" style={{position: 'absolute', top: '40%', fontWeight: 600}}>Hi, I'm</Typography>
				<TypeWriterEffect 
				textStyle={{ position: 'absolute', top: "45%", color: '#0066b2', fontWeight: 600, fontSize: 60}}
            	startDelay={100}
            	cursorColor="#0066b2"
            	text="Sylvia Wang"
            	typeSpeed={200}
				hideCursorAfterText = 'true'
          		/>
				{/* <Typography variant="h2" style={{position: 'absolute', top: '45%', fontWeight: 800, color:"#0066b2"}}>Sylvia Wang</Typography> */}
				<Typography variant="h7" style={{position: 'absolute', top: '56%', fontWeight: 600}}>Software Developer @ SAP</Typography>
				<Typography variant="h7" style={{position: 'absolute', top: '60%', fontWeight: 600}}>Business & Computer Science Student @ UBC</Typography>
				<Typography variant="h7" style={{position: 'absolute', top: '64%', fontWeight: 600}}>Music Aficionado</Typography>
			</Box>
		</div>

	);
}

export default Home;