import file from "file-saver";
import React from "react";

export default class Jsongenerator extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
    this.updateData = this.updateData.bind(this);
    this.generateJson = this.generateJson.bind(this);
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

  render() {
    return (
      <div id="jsonMeta" className="container">
        <form id="jsonGen">
          <div  className="pane">
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
            <div className="inputgroup">
              <button onClick={}>Next</button>
            </div>
          </div>
          <div id="jsonDependancies"  className="pane"> 
            <div className="inputgroup">
              <label>styles</label>
              <textarea
                id="patternStyles"
                name="patternStyles"
                onChange={this.updateData}
              />
            </div>
            <div className="inputgroup">
            <button onClick={this.generateJson}>Generate</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
