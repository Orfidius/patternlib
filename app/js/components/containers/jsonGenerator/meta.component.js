import React from "react";
import CodeMirror from "react-codemirror2";
require('../../../../../node_modules/codemirror/mode/htmlmixed/htmlmixed');

// Code Mirror Use https://github.com/JedWatson/react-codemirror
const options = {
  mode: "htmlmixed",
  theme: "default",
  lineNumbers: true,
  lineWrapping: true  
};

const selected = {
  display: 'block'
};
const unselected = {
  display: 'none'
}

//TODO: Add tab functionallity for the description and the meta data
export default class Meta extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.props.updateFormData;
    this.state = {
      isMeta: selected, 
      isDesc: unselected,
      metaTab: "selected",
      descTab: "",
      code: "// Enter Description or instructions here. Feel fre to use HTML!"
    }
    this.tabClick = this.tabClick.bind(this);
    this.updateCode = this.updateCode.bind(this);
  }

  tabClick(e){
  
      if (e.target.dataset.target == "meta") {
        this.setState({isMeta: selected, isDesc: unselected, metaTab: "selected", descTab: ""});
      }
  
      if (e.target.dataset.target == "desc") {
        this.setState({isMeta: unselected, isDesc: selected, metaTab: "", descTab: "selected"});
      }
  }
  updateCode(instance, data, value) {
    
    this.props.codeUpdate("patternDescription", value);
  }

  render() {
    return (
      <div id="jsonMeta" className="pane jsonMeta">
        <div className="section-header">
          <h3>Meta Data </h3>
        </div>
        <div className="tabsSelect">
          <span onClick={this.tabClick} data-target="meta" className={this.state.metaTab} >About..</span>
          <span onClick={this.tabClick} data-target="desc" className={this.state.descTab}>Description</span>
        </div>
        <div className="tabWrap ">
          <div className="tab1" id="tab1" style={this.state.isMeta}>
            <div className="inputgroup">
              <label htmlFor="patternName">Name</label>
              <input
                type="text"
                name="patternName"
                id="patternName"
                onChange={this.props.updateFormData}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="patternTags">tags</label>
              <input
                type="text"
                name="patterntTags"
                id="patternTags"
                onChange={this.props.updateFormData}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="patternAuthor">Author</label>
              <input
                type="text"
                name="patterntAuthor"
                id="patternAuthor"
                onChange={this.props.updateFormData}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="patternExample">Site Example URL</label>
              <input
                type="text"
                name="patterntExample"
                id="patternExample"
                onChange={this.props.updateFormData}
              />
            </div>
          </div>
          <div className="tab2" style={this.state.isDesc}>
            <div className="inputgroup patternDescWrap">
              <label htmlFor="patternDescription">Description</label>
              <CodeMirror
                value={this.state.code}
                name="patterntDescription"
                id="patternDescription"
                onChange={this.updateCode}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
