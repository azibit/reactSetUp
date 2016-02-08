import React, { Component } from 'react';
import ChooseTable from './ChooseTable';

export default (props) => {
  return (
    <div className = "container ">
      <div className = "row">
        <ChooseTable table = "2"/>&nbsp;
        <ChooseTable table = "3"/>&nbsp;
        <ChooseTable table = "4"/>&nbsp;
        <ChooseTable table = "5"/>&nbsp;
            </div>
            <div className = "row">
            <ChooseTable table = "6"/>&nbsp;
            <ChooseTable table = "7"/>&nbsp;
            <ChooseTable table = "8"/>&nbsp;
            <ChooseTable table = "9"/>&nbsp;
                  </div>
                  <div className = "row">
                  <ChooseTable table = "10"/>&nbsp;
                    <ChooseTable table = "11"/>&nbsp;
                    <ChooseTable table = "12"/>&nbsp;
                      </div>
      </div>
  );
}
