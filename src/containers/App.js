import React, {Component} from 'react';
import CardList from '../components/CardList';
import './App.css';
import Slide from '../components/Slide'



class App extends Component{
	constructor(){
		super();
		this.state = {
			robots : [],
			SearchField : ''
		}
	}

	onClickChange = (event) => {
		
		this.setState({SearchField : event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(response => this.setState({robots : response}));
	}



	render(){

		const filteredRobot = this.state.robots.filter((robot) =>{
			return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
		})


		return(

			<div className='tc'>
				<h1> Robotify </h1>
				<input type="search" placeholder="Enter the person name" onChange={this.onClickChange}/>
				<Slide>
					<CardList names={filteredRobot}/>
				</Slide>
			</div>
		)
	}
}

export default App;