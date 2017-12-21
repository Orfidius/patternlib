import React from "react";

export default class Dependancies extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.props.updateFormData;

  }

  render() {
    return (
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

      </div>
    );
  }
}
