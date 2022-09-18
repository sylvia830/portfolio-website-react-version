import cards from "./cards";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Projects() {
	const bold = { fontWeight: 600 };
	const marginBottom = { marginBottom: 35 };
	const marginTop = {marginTop: 20};
	return (
		<div style={{backgroundColor: "#0066b2"}}>
		<Box p = {8}>
		<Typography variant="h3" align="center" style={{ ...bold, ...marginBottom, ...marginTop, color: "#ffffff" }}>Projects</Typography>
		<Box p = {8}>
		<Grid container spacing = {5}>
		{cards.map((card, i) => {
			return(
				<Grid key={i} item>
					<div style={{ display:'flex', justifyContent:'center' }}>
					<Card sx={{ maxWidth: 345, height: 387}} style={{ justifyContent:"center" }}>
      					<CardActionArea>
        					<CardMedia
          						component="img"
          						height="140"
          						image= {card.image}
        					/>
        					<CardContent>
          						<Typography gutterBottom variant="h5" component="div" textAlign="center">
            					{card.title}
          						</Typography>
          						<Typography variant="body2" color="text.secondary">
            					{card.description}
          					</Typography>
        					</CardContent>
      					</CardActionArea>
      					<CardActions style={{ justifyContent:"center", alignSelf: "flex-end" }}>
							<a href={card.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
        					<Button variant="outlined" size="small" color="primary">
          					View Project
        					</Button>
							</a>
      					</CardActions>
    				</Card>
					</div>
				</Grid>
			);
		})}
		</Grid>
		</Box>
		</Box>
		</div>
	);
}

