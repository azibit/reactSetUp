import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class Users extends React.Component{
	constructor(props){
		super(props);
		this.state = {users: []};
	}

	render(){
		return (
			<div>
				<h1>Users</h1>
				<div className = "container">
					<ul>
						{this.state.users.map(user => (
								<li key = {user.id}>
									<Link to = {'/user/${user.id}'}>
										{user.name}
									</Link>
								</li>
							))}
					</ul>
				</div>

				<div className = "container">
					{this.props.children}
				</div>

			</div>
			)
	}
}