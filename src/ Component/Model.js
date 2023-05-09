import React, { Component } from "react";


function Model(show, onClose) {

if(!show){
    return null;
}



  return (
    <div className="container">
      <div className="model">
        <div className="model-content">

         
         
          <div className="model-header">
            <h1>model</h1>
          </div>

          <div className="model-content">
            <p>content of the model</p>
          </div>

          <div className="model-footer">
            <button onClick={onClose}>close</button>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default Model;
