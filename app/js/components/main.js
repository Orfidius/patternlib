import React from "react";
import ReactRouter from "react-router";

import Pattern from "./containers/pattern.component";
import Jsongenerator from "./containers/jsonGenerator/jsonGenerator.component.js";
import Header from "./containers/header.component";
import Display from "./containers/display/display.component.js";

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
        console.log(jsonData);
        this.setState({ data: jsonData });
      }.bind(this)
    );

    //set state
    this.state = {
      data: {},
      showGen: "closed",
      showData: "closed",      
      currentPattern: {}
    };

    // Function Bindings
    this.showJsonGenerator = this.showJsonGenerator.bind(this);
    this.showData = this.showData.bind(this);
    this.updateCurrentPattern = this.updateCurrentPattern.bind(this);
  }


  updateCurrentPattern (newPattern) {
    console.log("Updating Current Pattern");
      this.setState({currentPattern: newPattern});
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
  showData(event) {
    console.log("Show data Clicked");
    if (this.state.showData == "closed") {
      this.setState({ showData: "open" });
    }
    if (this.state.showData == "open") {
      this.setState({ showData: "closed" });
    }
  }

  render() {
    // console.log("Main Comp", this.state.data);

    return (
      <div>
        <Header updatePattern={this.updateCurrentPattern} data={this.state.data} />
        <Pattern className="container" data={this.state.currentPattern} />
        <Jsongenerator isOpen={this.state.showGen} data={this.state.data} setPreview={this.updateCurrentPattern}  closeGen={this.showJsonGenerator}/>
        <Display isOpen={this.state.showData} curData={this.state.data} />
        <div className="openJsonButton" onClick={this.showJsonGenerator}>
          <i className="fa fa-chevron-circle-up" aria-hidden="true" />
        </div>
        <div  onClick={this.showData} className="openPatternInfo">
          <i className="fa fa-file-code-o" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Main;
