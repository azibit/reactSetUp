import React from 'react';
import {render} from 'react-dom';

class HelloMessage extends React.Component{


	constructor(props){
		super(props);
		this.state = {
			"address" : "Abuja",
			"bounce" : "container animated bounce"
		};

		this.display = this.display.bind(this);
	}

	componentDidMount(){
		this.interval = setInterval(this.display, 2000);
	}

	display(){
		this.forceUpdate();
	}


	render(){
		return (
				<div className = {this.state.bounce}>
					<h1 className = "blue-text text-darken-2">Hello {this.props.name}!!!</h1>
					<h2 className = "green-text text-darken-2">I am {this.props.age} years old</h2>

					<p>Address: {this.state.address}</p>
				</div>
			)
	}
}

export default HelloMessage;