import React from "react";

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
export default class description extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.props.updateFormData;
    this.state = {
      isMeta: selected, 
      isDesc: unselected,
      metaTab: "selected",
      descTab: "",
      code: "// Enter Description or instructions here. Feel fre to use HTML!",
      data: {patternName: "No Name Selected", patternAuthor: "No Author Selected", patternDescription: "No Description Selected" }
    }
    this.tabClick = this.tabClick.bind(this);
    this.setDescription = this.setDescription.bind(this);
    
  }

  componentWillReceiveProps(nextProps) {
    console.log("testing props");
    if (typeof nextProps.data != "undefined") { 
      console.log('setting data', nextProps.data);
      this.setState({data: nextProps.data});
    }
  }



  tabClick(e){
  
      if (e.target.dataset.target == "meta") {
        this.setState({isMeta: selected, isDesc: unselected, metaTab: "selected", descTab: ""});
      }
  
      if (e.target.dataset.target == "desc") {
        this.setState({isMeta: unselected, isDesc: selected, metaTab: "", descTab: "selected"});
      }
  }

  setDescription() {
    console.log("setting html", this.state.data.patternDescription);
    return {__html: this.state.data.patternDescription};
  }

   createMarkup() {
    return { '__html' : "<p>hello</p>"};
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
              <span htmlFor="patternName">Name</span>
              <div className="dispMeta">
                  <p>
                  {this.state.data.patternName}
                  </p>
              </div>
            </div>
            <div className="inputgroup">
              <span htmlFor="patternAuthor">Author</span>
              <p>
              {this.state.data.patternAuthor}
              
              
              </p>
            </div>
            <div className="inputgroup">
              <span htmlFor="patternExample">Site Example URL</span>
              {this.state.data.patternExample}              
            </div>
          </div>
          <div className="tab2" style={this.state.isDesc}>
            <div className="inputgroup patternDescWrap">
              <span htmlFor="patternDescription">Description</span>
              <div dangerouslySetInnerHTML = {this.setDescription()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
