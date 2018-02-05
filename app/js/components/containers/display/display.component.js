import React from "react";

// Components:

// import Dependancies from "./dependancies.component";
import Meta from "./desc.component";
import Code from "./code.component";


export default class display extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};

    //funciton bindings
    this.updateData = this.updateData.bind(this);
    this.mirrorUpdateData = this.mirrorUpdateData.bind(this);
    this.switchPage = this.switchPage.bind(this);
    this.childUpdateData = this.childUpdateData.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    
    this.state = { style: {}, open: false, curIndex: 1, curPane: "meta" };
  }
  updateData(event) {
    this.data[event.target.id] = event.target.value;
    console.log("Updated Data Object", this.data);
  }
  childUpdateData(data) {
    this.data[data.key] = data.values;
    console.log("data with Dependancy Array: ", this.data);
  }

  mirrorUpdateData(key, data) {
    this.data[key] = data;
    console.log("Updated Data Object", this.data);
  }

  generateJson(event) {
    event.preventDefault();
    console.log("json", this.props.data);
    if (this.props.data) {
      let newData = this.props.data; // After the data object contains the correct array, we'll add it here
      newData.push(this.data);
      let generated = JSON.stringify(newData);
      let generatedFile = new File([generated], "pattern.json", {
        type: "JSON"
      });
      file.saveAs(generatedFile);
    }
  }

  switchPage(event) {
    event.preventDefault();
    console.log("Switching Pages: ", this.state.curIndex);
    let type = event.target.dataset.type;
    if (this.state.curIndex > 0 && this.state.curIndex < 4) {
      // console.log("inside curPane conditional");
      // console.log('type', type);
      let newIndex = 1;

      if (type == "previous") {
        newIndex = this.state.curIndex - 1;
      }
      if (type == "next") {
        // console.log('inside of next conditional');
        newIndex = this.state.curIndex + 1;
      }
      // console.log(newIndex);
      switch (newIndex) {
        case 1:
          this.setState({ curIndex: newIndex, curPane: "meta" });
          break;
        case 2:
          this.setState({ curIndex: newIndex, curPane: "elements" });
          break;
        case 3:
          this.setState({ curIndex: newIndex, curPane: "dependancies" });
          break;
      }
    }
  }

  showForm(event) {
    let styleOpen = { bottom: "0" };
    let styleClosed = { bottom: "calc(-629px)" };

    if (this.state.open) {
      this.setState({ style: styleClosed, open: false });
    }
    if (!this.state.open) {
      this.setState({ style: styleOpen, open: true });
    }
  }
  handlePreview(e){ 
    e.preventDefault();
    this.props.setPreview(this.data); 
  }

  render() {
    return (
      <div className={"patternData" + " " + this.props.isOpen + " " + this.state.curPane} >
        <div className="jsonHeader">
          <h2> Data Generator </h2>
          <i onClick={this.props.closeGen} className="fa fa-times-circle" aria-hidden="true" />
        </div>
        <div className="activePaneNumber">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <form id="jsonGen">
          
          <Meta updateFormData={this.updateData} codeUpdate={this.mirrorUpdateData} data={this.props.curData} />
          <Code updateFormData={this.updateData} codeUpdate={this.mirrorUpdateData} data={this.props.curData }/>

          <div className="paneButton">
            <button
              onClick={this.switchPage}
              data-type="previous"
              className="previous"
            >
              Previous
            </button>
            <button onClick={this.handlePreview} className="preview">Preview</button>
            <button onClick={this.switchPage} data-type="next" className="next">
              next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
