import React from "react";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: this.props.results,
    };

    this.searchList = (
        <li className="listResult NoResult">No results loaded</li>
    );
    this.openClass = "closed";
    this.handleResultClick = this.handleResultClick.bind(this);
  }

  componentWillUpdate() {
          // Variable Test List"
          // patternName
          // patternTags
          // patternAuthor
          // patternDescription

    console.log('results', this.props.results);
      if (this.props.results.length > 0) { 
           this.openClass="open";
           this.searchList = null;
           this.searchList = this.props.results.map(((currentValue, index ) => {
             return(<li onClick={this.handleResultClick} key={index} data-key={index}>{currentValue.patternName}</li>);
            }).bind(this));
      } else {
        this.openClass="closed";
      }

  }
  handleResultClick(event) {
    let newPattern = this.props.results[event.target.dataset.key];
    console.log('Result Key: ', event.target.dataset.key);
    console.log('Result Clicked: ', newPattern);
    this.openClass="closed";
    this.props.updatePattern(newPattern);
  }

  render() {

    return (
    <div className={"searchResults " + this.openClass}>
      <div className="searchListWrap">
      <ul>
        {this.searchList}
      </ul>
      </div>
    </div>)
  }
}
