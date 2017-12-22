import React from "react";
import CodeMirror from "react-codemirror2";
require('../../../../../node_modules/codemirror/mode/javascript/javascript');
require('../../../../../node_modules/codemirror/mode/htmlmixed/htmlmixed');
require('../../../../../node_modules/codemirror/mode/css/css');

const options = {
  mode: "htmlmixed",
  theme: "material",
  lineNumbers: true
};

const jsoptions = {
  mode: "javascript",
  theme: "material",
  lineNumbers: true
};
const cssoptions = {
  mode: "css",
  theme: "material",
  lineNumbers: true
};
const selected = {
  display: "block"
};
const unselected = {
  display: "none"
};

export default class Pattern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHtml: selected,
      isJS: unselected,
      isCss: unselected,
      htmlTab: "selected",
      jsTab: "",
      cssTab: ""
    };
    this.tabClick = this.tabClick.bind(this);
    this.updateData = this.props.updateFormData;
  }

  tabClick(e) {
    if (e.target.dataset.target == "html") {
      this.setState({
        isHtml: selected,
        isJS: unselected,
        isCss: unselected,
        htmlTab: "selected",
        jsTab: "",
        cssTab: ""
      });
    }

    if (e.target.dataset.target == "css") {
      this.setState({
        isHtml: unselected,
        isJS: unselected,
        isCss: selected,
        htmlTab: "",
        jsTab: "",
        cssTab: "selected"
      });
    }
    if (e.target.dataset.target == "js") {
      this.setState({
        isHtml: unselected,
        isJS: selected,
        isCss: unselected,
        htmlTab: "",
        jsTab: "selected",
        cssTab: ""
      });
    }
  }

  render() {
    return (
      <div id="jsonElements" className="pane jsonElements">
        <div className="section-header">
          <h3>Meta Data </h3>
        </div>
        <div className="tabsSelect">
          <span
            onClick={this.tabClick}
            data-target="html"
            className={this.state.htmlTab}
          >
            html
          </span>
          <span
            onClick={this.tabClick}
            data-target="css"
            className={this.state.cssTab}
          >
            css
          </span>
          <span
            onClick={this.tabClick}
            data-target="js"
            className={this.state.jsTab}
          >
            Javascript
          </span>
        </div>
        <div className="tabWrap">
          <div className="tab1" style={this.state.isHtml}>
            <div className="inputgroup" >
              <label>Html</label>
              <CodeMirror
                id="patternHtml"
                name="patternHtml"
                onChange={this.updateData}
                options={options}
              />
            </div>
          </div>
          <div className="tab2" style={this.state.isCss}>
            <div className="inputgroup">
              <label>styles</label>
              <CodeMirror
                id="patternStyles"
                name="patternStyles"
                onChange={this.updateData}
                options={cssoptions}
              />
            </div>
          </div>
          <div className="tab3" style={this.state.isJS}>
            <div className="inputgroup" >
              <label>Java Script</label>
              <CodeMirror
                id="patternScript"
                name="patternScript"
                onChange={this.updateData}
                options={jsoptions}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
