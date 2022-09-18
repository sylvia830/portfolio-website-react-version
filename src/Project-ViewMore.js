//refer to this logic when implementing "view more cards"
import React, {useState} from 'react';
import cards from "./cards";

function Project() {
  const [noOfCard, setNoOfCard] = useState(4);
  const [isEverything, setText] = useState(false);
  const loadCards = () =>{
	  if (noOfCard===4 && noOfCard!==cards.length){
		  setNoOfCard(noOfCard + noOfCard);
		  setText(true);
	  }else if (noOfCard===cards.length){
		  const num = noOfCard - 4; 
		  setNoOfCard(noOfCard-num);
		  setText(false);
	  }
  }
  const slice = cards.slice(0, noOfCard);
  return (
	<section className='project'>
	
	{slice.map((props) => {
		return (<div className='card'>
		<div className='card-body'>
			<img className='card-img' height='150px' width='240px'
			src={props.image} alt ='img'/>
			<h2 className='card-title'>{props.title}</h2>
			<p className='card-description'>{props.description}</p>
		</div>
		<a className='card-btn' href={props.link} target="_blank" rel="noreferrer">
		<button className='card-button'>View Project</button>
        </a>	
	</div>);
	})}

	<div className='btn-load'>
	<button 
	className='card-btn-centre'
	onClick={()=>loadCards()}
	>{isEverything? "See Less": "See More"}</button>
	</div>
	
	</section>
	
  );
}

export default Project;