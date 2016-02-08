import React, { Component } from 'react';
import { Link } from 'react-router';
import { getTimesTable } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChooseTable extends Component{

  constructor(props){
    super(props);

    this.linkButtonClicked = this.linkButtonClicked.bind(this);
  }

  linkButtonClicked(){
    console.log("Testing Link Click");
    this.props.getTimesTable(this.props.table);
  }

  render(){
    return (
      <Link className="waves-effect waves-light btn-large" to = "multiplication_table"
        onClick = {this.linkButtonClicked}>
        {this.props.table} Times Table
      </Link>
     );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTimesTable}, dispatch);
}

export default connect(null, mapDispatchToProps)(ChooseTable);
