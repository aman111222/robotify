import React from 'react';
import Card from './Card';



const CardList = ({names}) => {
	return (
		<div>
			{
				names.map((user, i) => {
					return (
						<Card 
							id={names[i].id}
							name={names[i].name}
							email={names[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;