import React from "react";
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

export default class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHtml: selected,
      isJS: unselected,
      isCss: unselected,
      htmlTab: "selected",
      jsTab: "",
      cssTab: "",
      data: {patternHtml: "No Name Selected", patternScript: "No Author Selected", patternStyles: "No Description Selected" }      
    };
    this.tabClick = this.tabClick.bind(this);
    this.updateData = this.props.updateFormData;
    
  }
  componentWillReceiveProps(nextProps) {
    console.log("testing props from code");
    if (typeof nextProps.data != "undefined") { 
      console.log('setting data', nextProps.data);
      this.setState({data: nextProps.data});
    }
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
              <div
                id="patternHtml"
                name="patternHtml"
                options={options}
              >
              {this.state.data.patternHtml}
              </div>
              </div>
          </div>
          <div className="tab2" style={this.state.isCss}>
            <div className="inputgroup">
              <label>styles</label>
              <div
                id="patternStyles"
                name="patternStyles"
                options={cssoptions}>
              {this.state.data.patternStyles}
              </div>
            </div>
            </div>
          <div className="tab3" style={this.state.isJS}>
            <div className="inputgroup" >
              <label>Java Script</label>
              <div
                id="patternScript"
                name="patternScript"
                options={jsoptions}
              >
             { this.state.data.patternScript}
            </div>              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
