import React from "react";

export default class Pattern extends React.Component {
  constructor(props) {
    super(props);

    this.updateData = this.props.updateFormData;
  }

  render() {
    return (
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

      </div>
    );
  }
}
