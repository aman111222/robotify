import React from 'react'

const Slide = (props) =>{

	return (
		<div style={{overflowY : 'scroll', border : '1px solid black', height : '900px'}}>

		 {props.children}

		 </div>
	);
}



export default Slide;