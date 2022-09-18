import React, {useRef} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import {
	Alert,
	Box,
	Button,
	ButtonGroup,
	Grid,
	IconButton,
	TextField,
	Typography, 
} from "@mui/material";
import { 
	FaGithub,
	FaLinkedin, 
	FaGoogle,
	FaFileDownload,
 } from "react-icons/fa";

 import CloseIcon from '@mui/icons-material/Close';

 const validationSchema = yup.object({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup.string().email("Please enter a valid email").required("Email is required"),
	message: yup.string().required("A message is required")
 });

function Contact(){
	const bold = { fontWeight: 600 };
	const marginBottom = { marginBottom: 60 };

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: ""
		},
		onSubmit: (values) => {
			console.log(JSON.stringify(values));
			try{
				emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
					.then((result) => {
					console.log(result.text);
					console.log("message sent");
					setSuccess(true);
					});
			   }
			   catch {
				setError(true);
			  }
		},
		validationSchema: validationSchema
	});

	const [success, setSuccess] = React.useState(false);

	const [error, setError] = React.useState(false);

	const form = useRef();

	return (
		<div className="contact">
			<Box p = {15}>
			<Typography variant="h3" align="center" style={{ ...bold, ...marginBottom}}>Contact</Typography>
			<Box p = {10}>
			<Grid container spacing = {5}>
				<div>
				<Typography variant="h6" style={{...bold}}>Let's get in touch!</Typography>
				<p>Feel free to connect with me on LinkedIn or via email</p>
				<div className="info">
					<b>Sylvia Wang</b>
					<p style={{marginBottom: 20}}>sylviawang830@gmail</p>
					<Grid>
						<ButtonGroup variant="outlined" aria-label="outlined button group">
							<Button startIcon={<FaLinkedin />} href="https://www.linkedin.com/in/sylviawang8307/" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
							<Button startIcon={<FaGithub />} href="https://github.com/sylvia830" target="_blank" rel="noopener noreferrer">GitHub</Button>
							<Button startIcon={<FaGoogle />} href="mailto:sylviawang830@gmail.com" target="_blank" rel="noopener noreferrer">Email</Button>
							<Button startIcon={<FaFileDownload />} href="https://sylvia830.github.io/Sylvia_Wang_Resume/" target="_blank" rel="noopener noreferrer">Resume</Button>
						</ButtonGroup>
					</Grid>
				</div>
				</div>

				<form onSubmit={formik.handleSubmit} ref={form}>
					<TextField id="firstName" name="firstName" label="First Name" margin="normal" size="small" 
					value={formik.values.firstName} onChange={formik.handleChange} 
					error={formik.touched.firstName && Boolean(formik.errors.firstName)}
					helperText={formik.touched.firstName && formik.errors.firstName} onBlur={formik.handleBlur}/>
					<TextField id="lastName" name="lastName" label="Last Name" margin="normal" size="small" 
					value={formik.values.lastName} onChange={formik.handleChange}
					error={formik.touched.lastName && Boolean(formik.errors.lastName)}
					helperText={formik.touched.lastName && formik.errors.lastName} onBlur={formik.handleBlur}/>
					<TextField id="email" name="email" label="Email Address" margin="normal" size="small" 
					value={formik.values.email} onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email} onBlur={formik.handleBlur}/>
					<TextField id="message" name="message" label="Message" margin="normal" size="medium" 
					value={formik.values.message} onChange={formik.handleChange}
					error={formik.touched.message && Boolean(formik.errors.message)}
					helperText={formik.touched.message && formik.errors.message} onBlur={formik.handleBlur}/>
					<Button type="submit" variant="contained" style={{marginTop: 20}}>Submit</Button>
					{success? <Alert style ={{marginTop: 20}} action={
					<IconButton aria-label="close" color="inherit" size="small" 
					onClick={() => {setSuccess(false);}}>
						<CloseIcon fontSize="inherit" />
					</IconButton>}severity="success" sx={{ width: '100%' }}>Message sent! Thanks for reaching out :)</Alert> : <></>}
					{error? <Alert style ={{marginTop: 10}} action={
					<IconButton aria-label="close" color="inherit" size="small" 
					onClick={() => {setError(false);}}>
						<CloseIcon fontSize="inherit" />
					</IconButton>}severity="error" sx={{ width: '100%' }}>Please fill out the form first before submitting</Alert> : <></>}
				</form>
				</Grid>
				</Box>
				</Box> 
				</div>
	);
}

export default Contact;