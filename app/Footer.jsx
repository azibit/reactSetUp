import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router, Route, Link} from 'react-router';

export default (props) =>  {
    return (
      <div className="">
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Essence</h5>
                <p className="grey-text text-lighten-4">This website is an Initiative to help
                  promote the study of mathematics among the Nigerian Youth.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">Facebook</a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">Instagram</a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">Google+</a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">Gmail</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2016 Azibit
              <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </div>
    )
}
