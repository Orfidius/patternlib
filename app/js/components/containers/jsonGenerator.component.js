import file from "file-saver";
import React from "react";

export default class Jsongenerator extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
    this.updateData = this.updateData.bind(this);
    this.generateJson = this.generateJson.bind(this);
    this.state = {
      style: {},
      open: false
    };
    this.showForm = this.showForm.bind(this);
    
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

  showForm(event) {
    console.log('Showing form...I hope');
    let styleOpen = { bottom: "0" };
    let styleClosed = { bottom: "calc(-629px)" };

    if (this.state.open) {
        this.setState({style: styleClosed, open: false});
        
    }
    if (!this.state.open) {
      this.setState({style: styleOpen, open: true});
    }
  }

  render() {
    return (
      <div style={this.state.style} className="jsonGenContainer">
        <div onClick={this.showForm} className="jsonHeader">
          <h2>Data Generator</h2>
        </div>
        <div className="container">
          <form id="jsonGen">
            <div className="jsonMeta row">
              <div className="inputgroup col-xs-12 col-sm-4">
                <label htmlFor="patternName">Name</label>
                <input
                  name="patternName"
                  id="patternName"
                  onChange={this.updateData}
                />
              </div>
              <div className="inputgroup col-xs-12 col-sm-4">
                <label htmlFor="patternTags">tags</label>
                <input
                  name="patterntTags"
                  id="patternTags"
                  onChange={this.updateData}
                />
              </div>
              <div className="inputgroup col-xs-12 col-sm-4">
                <label htmlFor="patternAuthor">Author</label>
                <input
                  name="patterntAuthor"
                  id="patternAuthor"
                  onChange={this.updateData}
                />
              </div>
            </div>
            <div className="jsonPattern row">
              <div className="inputgroup col-xs-12 col-sm-4">
                <label>styles</label>
                <textarea
                  id="patternStyles"
                  name="patternStyles"
                  onChange={this.updateData}
                />
              </div>
              <div className="inputgroup col-xs-12 col-sm-4">
                <label>Html</label>
                <textarea
                  id="patternHtml"
                  name="patternHtml"
                  onChange={this.updateData}
                />
              </div>
              <div className="inputgroup col-xs-12 col-sm-4">
                <label>Java Script</label>
                <textarea
                  id="patternScript"
                  name="patternHtml"
                  onChange={this.updateData}
                />
              </div>
            </div>
            <div className="inputgroup jsonButton">
              <button onClick={this.generateJson}>Generate</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
