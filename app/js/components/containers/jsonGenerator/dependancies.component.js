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
      isCss: selected,
      isJs: unselected,
      jsTab: "selected",
      cssTab: "",
      cssInput: (
        <div className="inputgroup dependancy">
          <label>Css</label>
          <input
            type="text"
            id="patternCssDep"
            name="patternCssDep"
            onChange={this.updateData}
            className="dependancyInput"
          />
        </div>
      ),
      jsInput: (
        <div className="inputgroup dependancy">
          <label>Javascript</label>
          <input
            type="text"
            id="patternJsDep"
            name="patternJsDep"
            onChange={this.updateData}
            className="dependancyInput"
          />
        </div>
      )
    };
    this.tabClick = this.tabClick.bind(this);
  }

  tabClick(e) {
    if (e.target.dataset.target == "css") {
      this.setState({
        isCss: selected,
        isJs: unselected,
        jsTab: "selected",
        cssTab: ""
      });
    }

    if (e.target.dataset.target == "javascript") {
      this.setState({
        isCss: unselected,
        isJs: selected,
        jsTab: "",
        cssTab: "selected"
      });
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
            {this.state.cssInput}
            <span class="addInput" id="addCssInput">
              <i class="fa fa-plus-circle" aria-hidden="true" />{" "}
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
            {this.state.jsInput}
            <span class="addInput" id="addJsInput">
              <i class="fa fa-plus-circle" aria-hidden="true" />
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
