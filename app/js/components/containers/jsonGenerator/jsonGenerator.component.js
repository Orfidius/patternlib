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

  switchPage(event) {}

  render() {
    return (
      <div className="jsonGenerator">
        <div className="jsonHeader">
          <h2> Data Generator </h2>
        </div>
        <form id="jsonGen">
          <div id="jsonMeta" className="pane">
            <div className="inputgroup">
              <label htmlFor="patternName">Name</label>
              <input
                name="patternName"
                id="patternName"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="patternTags">tags</label>
              <input
                name="patterntTags"
                id="patternTags"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="patternAuthor">Author</label>
              <input
                name="patterntAuthor"
                id="patternAuthor"
                onChange={this.updateData}
              />
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
              <button>Next</button>
            </div>
          </div>
          <div id="jsonDependancies" className="pane">
            <div className="inputgroup">
              <label>styles</label>
              <textarea
                id="patternStyles"
                name="patternStyles"
                onChange={this.updateData}
              />
            </div>
            <div className="nextButton">
              <button onClick={this.generateJson}>Generate</button>
            </div>
          </div>
          <div className="inputgroup">
            <button>Preview</button>
          </div>
        </form>
      </div>
    );
  }
}
