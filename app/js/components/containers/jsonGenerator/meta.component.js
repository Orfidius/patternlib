import React from "react";

export default class Meta extends React.Component {
  constructor(props) {
    super(props);

    this.updateData = this.props.updateFormData;
  }

  render() {
    return (
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

      </div>
    );
  }
}
