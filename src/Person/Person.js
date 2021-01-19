import React from 'react'
import './Person.css';

function Person(props) {
	return (
		<div className='Person'>
			<p>My name is {props.name}. I'm {props.age}</p>
			<p>Or TypeIn - My name:
			<input className='person-name' type="input" onChange={props.typeInName}/> Age: <input className='person-age' type="input" onChange={props.typeInAge}/></p>
			{props.children}
		</div>
	);
}

export default Person;