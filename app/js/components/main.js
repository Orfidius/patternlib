import React from "react";
import ReactRouter from 'react-router';

import Pattern from "./containers/pattern.component";
import Jsongenerator from "./containers/jsonGenerator.component.js"
import Jsongenerator from "./containers/jsonGenerator/jsonGenerator.component.js"


class Main extends React.Component {
  constructor(props) {
    super(props);

     this.data = new Promise((resolve, reject) => {
        this.state = { data: {}};
      jQuery.ajax("/data/pattern.json", {
        success: function(result, status) {
          //   console.log("Ajax Complete: ", status);
          //   console.log(result);
          resolve(result);
        }
      });
    });
    this.state.data = {};
        this.data.then((function(jsonData){
        this.setState({data: jsonData});
    }).bind(this));

    
  };

  componentWillMount() {

  }

  render() {
    console.log("Main Comp", this.state.data);
    return (
      <div className="container">
        <h1> Hello </h1>
        <div>
          <p> This is the main Component </p>
          <div className="row">
          <Pattern data={this.state.data} />
          </div>
          <div className="row">
            <Jsongenerator data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
