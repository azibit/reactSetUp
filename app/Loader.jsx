import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
export default class Loader extends React.Component {

  render() {
    return (
        <div className="preloader-wrapper big active">
     <div className="spinner-layer spinner-blue">
       <div className="circle-clipper left">
         <div className="circle">123</div>
       </div><div className="gap-patch">
         <div className="circle">456</div>
       </div><div className="circle-clipper right">
         <div className="circle">789</div>
       </div>
     </div>

     <div className="spinner-layer spinner-red">
       <div className="circle-clipper left">
         <div className="circle">123</div>
       </div><div className="gap-patch">
         <div className="circle">456</div>
       </div><div className="circle-clipper right">
         <div className="circle">789</div>
       </div>
     </div>

     <div className="spinner-layer spinner-yellow">
       <div className="circle-clipper left">
         <div className="circle">123</div>
       </div><div className="gap-patch">
         <div className="circle">456</div>
       </div><div className="circle-clipper right">
         <div className="circle">789</div>
       </div>
     </div>


   </div>
    )
  }
}
