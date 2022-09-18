import React from "react";
import { Box, Grid, Tabs, Tab, Typography, tabsClasses} from "@mui/material";
import sap from './sap.png';
import sierra from './sierra_wireless.jpeg';
import civil_eng from './civil eng.png';
import ubc from './ubc murc.jpeg';
import google from './google.png';
import ubcLogo from './ubc_logo.png';
import cpsn from './cpsn.png';
import bizchina from './bizchina.png';
import stem from './stem.png';
import {FaReact} from 'react-icons/fa'
  
  function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`vertical-tabpanel-${index}`}
		aria-labelledby={`vertical-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ p: 1 }}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
  }

function Experience(){
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const bold = { fontWeight: 600 };
	const marginBottom = { marginBottom: 35 };
	const marginTop = {marginTop: 20};

	return (
		<div className="experience">
			<Box p={15}>
				<Typography variant="h3" align="center" style={{ ...bold, ...marginBottom, ...marginTop }}>Experiences</Typography>
				<Box sx={{marginTop: 10, marginBottom: 10, flexGrow: 1, maxWidth: { xs: 500, sm: 1200 }, bgcolor: 'background.paper',}}>
					<Tabs
						value={value}
						onChange={handleChange}
						variant="scrollable"
						scrollButtons
						aria-label="visible arrows tabs example"
						sx={{
						[`& .${tabsClasses.scrollButtons}`]: {
							'&.Mui-disabled': { opacity: 0.3 },
						},
						}}>
						<Tab label="SWE Intern@SAP" wrapped/>
						<Tab label="SWE Test Intern@Sierra Wireless" wrapped/>
						<Tab label="Web & Communications Assistant (UBC Summer Worklearn)" wrapped/>
						<Tab label="Orientation Leader (UBC Jump Start)" wrapped/>
						<Tab label="CS Research Mentorship Program Scholar@Google" wrapped/>
						<Tab label="Communications & Promotion Co-Director@UBC MURC" wrapped/>
						<Tab label="Web Designer@Canadian Peer Support Network" wrapped/>
						<Tab label="Tech Associate@UBC BizChina" wrapped/>
						<Tab label="VP Internal@UBC STEM Fellowship" wrapped/>
					</Tabs>
					<TabPanel style={{marginTop: 30}} value={value} index={0}>
						<Grid container>
							<img className="experienceImg" src={sap} alt=""></img> 
							<div className="job">
								<Typography variant="h6" style={{fontWeight: 600}}>Software Engineer Intern (Geospatial Analytics Team)</Typography>
								<Typography variant="h7">SAP Canada</Typography>
								<Typography variant="h7">May 2022 - December 2022</Typography>
								<Typography variant="h7">Vancouver, Canada</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Develop geo features 
								using React/Redux framework for Geospatial analytics team 
								in SAP Analytics Cloud(SAC) and responsible for end-to-end 
								delivery with thorough testing and automation</Typography>
								<Typography variant="h7">● Formulate bug fixes to address multiple areas of the code base to deliver an improved and seamless user experience for the customers</Typography>
								<Typography variant="h7">● Improved geo's code coverage to over 95% by writing Jest unit tests</Typography>
								<Typography variant="h7">● Automated multiple actions to test new features by writing Jasmine integration tests and cross-component tests</Typography>
								<Typography variant ="h7">● Faciliate knowledge transfer for the new intern</Typography>
								<p style={{marginTop: 10}}>Skills: TypeScript · JavaScript · React.js · Redux · git · Jenkins · Jest · Jasmine · Jira · Agile Methodology</p>
							</div>
						</Grid>
					</TabPanel>
					<TabPanel style={{marginTop: 30}} value={value} index={1}>
						<Grid container>
							<img className="experienceImg" src={sierra} alt=""></img> 
							<div className="job">
							<Typography variant="h6" style={{fontWeight: 600}}>Software Engineer in Test Intern</Typography>
								<Typography variant="h7">Sierra Wireless</Typography>
								<Typography variant="h7">September 2021 - April 2022</Typography>
								<Typography variant="h7">Vancouver, Canada</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Developed test scripts to automate manual test cases using Python frameworks and libraries (eg, Pywinauto) and an internal library to optimize the efficiency and effectiveness of the testing processes</Typography>
								<Typography variant="h7">● Designed and executed test cases to verify an array of features (eg, 5G mmWave, GNSS accuracy) of multiple 5G IoT modules</Typography>
								<Typography variant="h7">● Closely collaborated with firmware and hardware engineers in terms of bug fixes and reports</Typography>
								<Typography variant ="h7">● Mentored several junior interns and facilitated knowledge transfer by planning, conducting onboarding, and delegating tasks during testing sprints</Typography>
								<p style={{marginTop: 10}}>Skills: Python · Testing · Automation · Project Management · IoT · Computer Networking · Jira · Confluence</p>
							</div>
						</Grid>
					</TabPanel>
					<TabPanel style={{marginTop: 30}} value={value} index={2}>
						<Grid container>
							<img className="experienceImg" src={civil_eng} alt=""></img> 
							<div className="job">
								<Typography variant="h6" style={{fontWeight: 600}}>Web & Communications Assistant (UBC Summer Worklearn)</Typography>
								<Typography variant="h7">UBC Civil Engineering</Typography>
								<Typography variant="h7">May 2021 - September 2021</Typography>
								<Typography variant="h7">Vancouver, Canada</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Developed a new external-facing website for the department using HTML and CSS and CMS shortcode and migrated contents from the previous website to the new one</Typography>
								<Typography variant ="h7">● Assisted professors from the department in developing websites to showcase their research</Typography>
								<Typography variant ="h7">● Updated and made corrections to department web pages in both Drupal and WordPress </Typography>
								<Typography variant ="h7">● Coordinated a project to distribute graduation gifts to the 2021 graduates and acted as a liaison between the department and the 2021 graduates </Typography>
								<Typography variant ="h7">● Curated content for and distributed the undergraduate and graduate student weekly e-newsletters, blog, and Canvas website, as well as monitored and contributed to articles for the department’s website and social media channels </Typography>
								<p style={{marginTop: 10}}>Skills: Web Development · Web Design · Project Management · Bitbucket · Social Media Communications</p>
							</div>
						</Grid>
					</TabPanel>
					<TabPanel style={{marginTop: 30}} value={value} index={3}>
						<Grid container>
							<img className="experienceImg" src={ubc} alt=""></img> 
							<div className="job">
								<Typography variant="h6" style={{fontWeight: 600}}>Orientation Leader (UBC Jump Start)</Typography>
								<Typography variant="h7">UBC Student Involvement & Careers</Typography>
								<Typography variant="h7">August 2021</Typography>
								<Typography variant="h7">Vancouver, Canada</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Acted as a UBC ambassador for student leadership and as a positive and professional representative of the UBC Jump Start and Imagine UBC programs</Typography>
								<Typography variant="h7">● Planned and led workshops for a group of 15-25 first-year students to provide information and answer questions about time management, academic, and campus resources, etc</Typography>
								<Typography variant ="h7">● Facilitated and coordinated learning seminars led by profs from the faculty</Typography>
								<p style={{marginTop: 10}}>Skills: Time Management · Leadership · Public Speaking</p>
							</div>
						</Grid>
					</TabPanel>
					<TabPanel style={{marginTop: 30}} value={value} index={4}>
						<Grid container>
							<img className="experienceImg" src={google} alt=""></img> 
							<div className="job">
								<Typography variant="h6" style={{fontWeight: 600}}>CS Research Mentorship Program Scholar</Typography>
								<Typography variant="h7">Google</Typography>
								<Typography variant="h7">September 2021 - December 2021</Typography>
								<Typography variant="h7">Remote</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Connected with and received mentorship from a Google researcher focusing on machine learning related industrial research to identify a specific research topic of interest, gain exposure and insights into the industry and best practices</Typography>
								<Typography variant="h7">●  Further explored a myriad of areas and topics in computing research by attending networking events, career panels, tech talks, and information sessions about computing research opportunities</Typography>
							</div>
						</Grid>
					</TabPanel>
					<TabPanel style={{marginTop: 30}} value={value} index={5}>
						<Grid container>
							<img className="experienceImg" src={ubcLogo} alt=""></img> 
							<div className="job">
								<Typography variant="h6" style={{fontWeight: 600}}>Communications & Promotion Co-Director at UBC Multidisciplinary Undergraduate Research Conference</Typography>
								<Typography variant="h7">UBC</Typography>
								<Typography variant="h7">October 2021 - April 2022</Typography>
								<Typography variant="h7">Vancouver, Canada</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Curated and delivered a series of promo materials for digital media and physical assets in line with the 2022 MURC theme and branding guidelines</Typography>
								<Typography variant="h7">● Expanded the reach of MURC 2022 amongst the student and faculty body at UBC by designing and creating the MURC 2022 program guide with co-chairs using Adobe InDesign to ensure the content quality and branding consistency</Typography>
								<Typography variant ="h7">● Developed a stakeholder contact list and guide to be used by the MURC Planning Committee, in consultation with the Co-Chairs and staff advisors</Typography>
								<p style={{marginTop: 10}}>Skills: Adobe Indesign · Canva · Graphic Design · Project Management · Social Media Communications</p>
							</div>
						</Grid>
					</TabPanel>
					<TabPanel style={{marginTop: 30}} value={value} index={6}>
						<Grid container>
							<img className="experienceImg" src={cpsn} alt=""></img> 
							<div className="job">
								<Typography variant="h6" style={{fontWeight: 600}}>Web Designer</Typography>
								<Typography variant="h7">Canadian Peer Support Network</Typography>
								<Typography variant="h7">May 2021 - August 2021</Typography>
								<Typography variant="h7">Remote</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Designed and optimized UI elements and tools such as navigation menus, search boxes, tabs, and widgets for the CPSN website based on user feedback and experience</Typography>
								<Typography variant="h7">● Created a French version of the website and allow users to contact certain founders through the website</Typography>
							</div>
						</Grid>
					</TabPanel>
					<TabPanel style={{marginTop: 30}} value={value} index={7}>
						<Grid container>
							<img className="experienceImg" src={bizchina} alt=""></img> 
							<div className="job">
								<Typography variant="h6" style={{fontWeight: 600}}>Tech Associate</Typography>
								<Typography variant="h7">UBC BizChina</Typography>
								<Typography variant="h7">May 2021 - April 2024</Typography>
								<Typography variant="h7">Vancouver, Canada</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Design and implement <a href="https://www.ubcchinaforum.com/" target="_blank" rel="noopener noreferrer">club website</a> to ensure consistent branding and optimize user experience</Typography>
							</div>
						</Grid>
					</TabPanel>
					<TabPanel style={{marginTop: 30}} value={value} index={8}>
						<Grid container>
							<img className="experienceImg" src={stem} alt=""></img> 
							<div className="job">
								<Typography variant="h6" style={{fontWeight: 600}}>VP Internal</Typography>
								<Typography variant="h7">UBC STEM Fellowship</Typography>
								<Typography variant="h7">May 2021 - April 2023</Typography>
								<Typography variant="h7">Vancouver, Canada</Typography>
								<Typography variant="h7" style={{marginTop: 10}}> ● Reached out to and collaborated with UBC profs and industrial professionals to engage more UBC undergrads in research</Typography>
								<Typography variant="h7">● Coordinated REO (Research Explore Opportunity) program where we connected high school students to UBC science labs and introduced them to research at a university level</Typography>
								<Typography variant ="h7">● Planned and hosted club events</Typography>
							</div>
						</Grid>
					</TabPanel>
				</Box>
			</Box>
			{/* <Box p={10}>
			<Typography variant="h3" align="center" style={{ ...bold, ...marginBottom, ...marginTop }}>Experiences</Typography>
			<Box
			sx={{ marginLeft:10, marginTop: 15, marginBottom: 10, flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 350, width: '100%'}}>
			<Tabs
			style={{marginLeft: -50}}
			orientation="vertical"
			variant="scrollable"
			value={value}
			onChange={handleChange}
			sx={{ borderRight: 2, borderColor: 'divider'}}>
			<Tab style={{width: 50}} label="Onetime"  />
			<Tab label="Two" />
			<Tab label="Three" />
			<Tab label="Four"/>
			<Tab label="Five" />
			<Tab label="Six"  />
			<Tab label="Seven" />
			</Tabs>
			<TabPanel value={value} index={0}>
					<Grid container>
						<img className="experienceImg" src={sap} alt=""></img> 
						<div className="job">
							<Typography variant="h6" style={{fontWeight: 600}}>Software Engineer Intern</Typography>
							<p>SAP Canada</p>
							<p>Develop geo features 
							using React/Redux framework for Geospatial analytics team 
							in SAP Analytics Cloud(SAC) and responsible for end-to-end 
							delivery with thorough testing and automation</p>
						</div>
						<div className="time">
							<Typography variant="h7">May 2022 - December 2022</Typography>
							<Typography variant="h7">Vancouver, Canada</Typography>
						</div>
					</Grid>
			</TabPanel>
			<TabPanel value={value} index={1}>
			Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
			Item Three
			</TabPanel>
			<TabPanel value={value} index={3}>
			Item Four
			</TabPanel>
			<TabPanel value={value} index={4}>
			Item Five
			</TabPanel>
			<TabPanel value={value} index={5}>
			Item Six
			</TabPanel>
			<TabPanel value={value} index={6}>
			Item Seven
			</TabPanel>
		</Box>
		</Box> */}
	  </div>
	);
}

export default Experience;