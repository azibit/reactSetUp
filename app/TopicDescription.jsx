import React from 'react';
export default class TopicDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <div className="col s4 m4">
          <div className="card-panel white">
            <div className="card-panel green lighten-2">
              <h3>{this.props.name}</h3>
            </div>
            <span className="black-text">
              {this.props.body}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
