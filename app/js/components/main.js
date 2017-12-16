import React from "react";
import ReactRouter from "react-router";

import Pattern from "./containers/pattern.component";
import Jsongenerator from "./containers/jsonGenerator.component.js";
import Header from "./containers/header.component";

class Main extends React.Component {
  constructor(props) {
    super(props);

    // get Data
    this.data = new Promise((resolve, reject) => {
      jQuery.ajax("/data/pattern.json", {
        success: function(result, status) {
          //   console.log("Ajax Complete: ", status);
          //   console.log(result);
          resolve(result);
        }
      });
    });
    this.data.then(
      function(jsonData) {
        this.setState({ data: jsonData });
      }.bind(this)
    );

    //set state
    this.state = {
      data: {},
      showGen: "closed"
    };

    // Function Bindings
    this.showJsonGenerator = this.showJsonGenerator.bind(this);
  }

  showJsonGenerator(event) {
    console.log("Show Json Clicked");
    if (this.state.showGen == "closed") {
      this.setState({ showGen: "open" });
    }
    if (this.state.showGen == "open") {
      this.setState({ showGen: "closed" });
    }
  }

  render() {
    // console.log("Main Comp", this.state.data);

    return (
      <div>
        <Header />
        <Pattern className="container" data={this.state.data[1]} />
        <Jsongenerator isOpen={this.state.showGen} data={this.state.data} />
        <div className="openJsonButton" onClick={this.showJsonGenerator}>
          <i className="fa fa-chevron-circle-up" aria-hidden="true" />
        </div>
        <div className="openPatternInfo">
          <i className="fa fa-file-code-o" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Main;
