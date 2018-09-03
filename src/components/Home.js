import React from 'react';
import { fetchDog } from '../actions';

const Home = (props) => {
   return (
	    <div>
	      	{props.params.loading 
	         ? <p>Loading...</p> 
	         : props.params.error
	            ? <p>Error, try again</p>
	            : props.params.url 
	            	? <p><img src={props.params.url} alt="Random Dog"/></p>
	            	: <p>Click the button, please</p>}
	      <button onClick={() => props.params.dispatch(fetchDog())}>Show Dog</button>
	 	</div>
    )
  };

 export default Home;