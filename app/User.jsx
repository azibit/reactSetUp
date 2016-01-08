import React from 'react';
import {render} from 'react-dom';
export default class User extends React.Component{
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
}