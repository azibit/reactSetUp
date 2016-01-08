import React from 'react';
import ImageActions from '../actions/ImageActions.js';

export default class ReactReflux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presscount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      presscount: this.state.presscount + 1
    });
  }

  render() {
    return (
      <div><h3>Pressed {this.state.presscount} times </h3><div>
          <a className="waves-effect waves-light btn" onClick={this.handleClick}>Press me</a>
            <a className="waves-effect waves-light btn" onClick={ImageActions.fetchList}>Fetch new images please</a>

        </div>
      </div>
    );
  }
}
