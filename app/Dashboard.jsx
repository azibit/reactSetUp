import React from 'react';
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link} from 'react-router'
import Loader from './Loader.jsx';
import ChooseTablesOption from './ChooseTablesOption';


export default (props) => {
    return (
      <div>
      <div className="center">
        <div className="container row ">
          <br/>
          <div className="col s3"><Loader/></div>
          <div className="col s3"><Loader/></div>
          <div className="col s3"><Loader/></div>
          <div className="col s3"><Loader/></div>

        </div>

        <h4 className="animated bounce">Choose a Multiplication Table to Continue</h4>
          <ChooseTablesOption />
      </div>

      <div className = "container ">
      <Link to="/" activeClassName="active" className="waves-effect waves-light red btn"
        >   GO BACK
      </Link>
      </div>
      </div>
    )
}
