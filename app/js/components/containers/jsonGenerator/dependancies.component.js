import React from "react";

const options = {
  mode: "htmlmixed",
  theme: "default",
  lineNumbers: true
};

const selected = {
  display: "block"
};
const unselected = {
  display: "none"
};

export default class Dependancies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isJs: unselected,
      JsNo: 1,
      jsTab: "selected",
      isCss: selected,
      cssTab: "",
      cssNo: 1,
      cssArray: ["patternCssDep1"],
      jsArray: ["patternJsDep1"]
    };
    this.tabClick = this.tabClick.bind(this);
    this.handleAddInput = this.handleAddInput.bind(this);
  }

  tabClick(e) {
    if (e.target.dataset.target === "css") {
      this.setState({
        isCss: selected,
        isJs: unselected,
        jsTab: "selected",
        cssTab: ""
      });
    }

    if (e.target.dataset.target === "javascript") {
      this.setState({
        isCss: unselected,
        isJs: selected,
        jsTab: "",
        cssTab: "selected"
      });
    }
  }

  updateCode(instance, data, value) {
    this.props.codeUpdate("patterntDescription", value);
  }
  
  handleAddInput(e) {
    let setCssArray = this.state.cssArray;
    let setJsArray = this.state.jsArray;

    console.log("Target data: ", e.target.dataset.target);

    if (e.target.dataset.target === "css") {
      let newCssNo = this.state.cssNo + 1;
      setCssArray.push("patternCssDep" + newCssNo);
      this.setState({ cssArray: setCssArray, cssNo: newCssNo });
    }

    if (e.target.dataset.target === "js") {
      let newjsNo = this.state.JsNo + 1;
      setJsArray.push("patternjsDep" + newjsNo);
      this.setState({ jsArray: setJsArray, JsNo: newjsNo });
    }
  }

  render() {
    return (
      <div id="jsonDependancies" className="pane jsonDependancies">
        <div className="section-header">
          <h3>Meta Data </h3>
        </div>
        <div className="tabsSelect">
          <span
            onClick={this.tabClick}
            data-target="css"
            className={this.state.metaTab}
          >
            css
          </span>
          <span
            onClick={this.tabClick}
            data-target="javascript"
            className={this.state.descTab}
          >
            Javascript
          </span>
        </div>
        <div
          className="tab1"
          id="tab1"
          style={this.state.isCss}
          data-target="css"
        >
          <div className="inputgroupWrap dependancy">
            {this.state.cssArray.map((currentValue, index) => (
              <div key={index} className="inputgroup dependancy">
                <label>Css</label>
                <input
                  key={index}
                  type="text"
                  id={currentValue}
                  name={currentValue}
                  onChange={this.updateData}
                  className="dependancyInput"
                />
              </div>
            ))}
            <span
              onClick={this.handleAddInput}
              className="addInput"
              id="addCssInput"
              data-target="css"
            >
              <i
                data-target="css"
                className="fa fa-plus-circle"
                aria-hidden="true"
              />{" "}
            </span>
          </div>
        </div>
        <div
          className="tab2"
          id="tab2"
          style={this.state.isJs}
          data-target="javascript"
        >
          <div className="inputgroupWrap dependancy">
            {this.state.jsArray.map((currentValue, index) => (
              <div key={index} className="inputgroup dependancy">
                <label>Javascript</label>
                <input
                  type="text"
                  id={currentValue}
                  name={currentValue}
                  onChange={this.updateData}
                  className="dependancyInput"
                />
              </div>
            ))}
            <span
              data-target="js"
              onClick={this.handleAddInput}
              className="addInput"
              id="addJsInput"
            >
              <i
                data-target="js"
                className="fa fa-plus-circle"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
        <div className="inputgroup">
          <p> Jquery and Bootstrap added by default </p>
        </div>
      </div>
    );
  }
}
