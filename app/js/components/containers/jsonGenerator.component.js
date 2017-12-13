import file from "file-saver";
import React from "react";

export default class Jsongenerator extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};

    //funciton bindings
    this.updateData = this.updateData.bind(this);
    this.generateJson = this.generateJson.bind(this);
    this.switchPage = this.switchPage.bind(this);

    this.state = { style: {}, open: false, curPane: "jsonMeta" };
  }

  updateData(event) {
    this.data[event.target.id] = event.target.value;
    console.log("Updated Data Object", this.data);
  }

  generateJson(event) {
    event.preventDefault();
    console.log("json", this.props.data);
    if (this.props.data) {
      // let newData = this.props.data.push(this.data);
      let newData = [this.props.data, this.data];
      let generated = JSON.stringify(newData);
      console.log(generated);
      let generatedFile = new File([generated], "pattern.json", {
        type: "JSON"
      });
      file.saveAs(generatedFile);
    }
  }
  
  switchPage(event) {
      

  }

  render() {
    return (
      <div className={"jsonGenerator " + this.props.isOpen} >
        <div className="jsonHeader">
          <h2> Data Generator </h2>
          <i className="fa fa-times-circle" aria-hidden="true" />
        </div>
        <div class="activePaneNumber"> 
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
              <button className="previous">Previous</button>
              <button className="preview">Preview</button>
              <button className="next" onClick={this.nextJson}>
                next
              </button>
            </div>
          </div>

          <div id="jsonElements" className="pane">
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
                name="patternHtml"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup paneButton">
              <button className="previous">Previous</button>
              <button className="preview">Preview</button>
              <button className="next">Next</button>
            </div>
          </div>
          <div id="jsonDependancies" className="pane jsonDependancies">
            <div className="inputgroup">
              <label>Dependancies</label>
              <input
              type="text"
                id="patternStyles"
                name="patternStyles"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
            <p> Jquery and Bootstrap added by default </p> 
            </div>
            <div className="paneButton">
              <button className="previous">Previous</button>
              <button className="preview">Preview</button>
              <button className="next finish" onClick={this.nextJson}>
                Finish
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
