import file from "file-saver";
import React from "react";

// Components: 
import Dependancies from './dependancies.component';
import Meta from './meta.component';
import PatternData from './patternData.component';


export default class Jsongenerator extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};

    //funciton bindings
    this.updateData = this.updateData.bind(this);
    this.generateJson = this.generateJson.bind(this);
    this.switchPage = this.switchPage.bind(this);

    this.state = { style: {}, open: false, curIndex: 1, curPane: "meta" };
  }

  updateData(event) {
    this.data[event.target.id] = event.target.value;
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
    console.log('Switching Pages: ', this.state.curIndex);
    let type = event.target.dataset.type;
    if (this.state.curIndex > 0 && this.state.curIndex < 4) {
      // console.log("inside curPane conditional");
      // console.log('type', type);
      let newIndex = 1;      

      if (type == "previous") {
         newIndex = (this.state.curIndex - 1);
      }
      if (type == "next") {
        // console.log('inside of next conditional');
         newIndex = (this.state.curIndex + 1);
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

  render() {
    return (
      <div
        className={"jsonGenerator " + this.props.isOpen + " " + this.state.curPane}
      >
        <div className="jsonHeader">
          <h2> Data Generator </h2>
          <i className="fa fa-times-circle" aria-hidden="true" />
        </div>
        <div className="activePaneNumber">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <form id="jsonGen">
          <div id="jsonMeta" className="pane jsonMeta">
            <div className="inputgroup">
              <label htmlFor="patternName">Name</label>
              <input
                type="text"
                name="patternName"
                id="patternName"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="patternTags">tags</label>
              <input
                type="text"
                name="patterntTags"
                id="patternTags"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="patternAuthor">Author</label>
              <input
                type="text"
                name="patterntAuthor"
                id="patternAuthor"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="patternExample">Site Example URL</label>
              <input
                type="text"
                name="patterntExample"
                id="patternExample"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup patternDescWrap">
              <label htmlFor="patternDescription">Description</label>
              <textarea
                name="patterntDescription"
                id="patternDescription"
                onChange={this.updateData}
              />
            </div>
            <div className="paneButton">
              <button onClick={this.switchPage} data-type="previous" className="previous">
                Previous
              </button>
              <button className="preview">Preview</button>
              <button  onClick={this.switchPage} data-type="next" className="next">
                next
              </button>
            </div>
          </div>

          <div id="jsonElements" className="pane jsonElements">
            <div className="inputgroup">
              <label>styles</label>
              <textarea
                id="patternStyles"
                name="patternStyles"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <label>Html</label>
              <textarea
                id="patternHtml"
                name="patternHtml"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <label>Java Script</label>
              <textarea
                id="patternScript"
                name="patternScript"
                onChange={this.updateData}
              />
            </div>
            <div className="paneButton">
              <button onClick={this.switchPage} data-type="previous" className="previous">
                Previous
              </button>
              <button className="preview">Preview</button>
              <button onClick={this.switchPage} data-type="next" className="next">
                next
              </button>
            </div>
          </div>
          <div id="jsonDependancies" className="pane jsonDependancies">
            <div className="inputgroup">
              <label>Javascript</label>
              <input
                type="text"
                id="patternJsDep"
                name="patternJsDep"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <label>Css</label>
              <input
                type="text"
                id="patternCssDep"
                name="patternCssDep"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <p> Jquery and Bootstrap added by default </p>
            </div>
            <div className="paneButton">
              <button onClick={this.switchPage} data-type="previous" className="previous">
                Previous
              </button>
              <button className="preview">
                Preview
              </button>
              <button onClick={this.generateJson} data-type="next" className="next">
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
