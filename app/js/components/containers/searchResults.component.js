import React from "react";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: this.props.results,
      willClose: false
    };

    this.searchList = (
        <li className="listResult NoResult">No results loaded</li>
    );
    this.openClass = "closed";
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentWillUpdate() {
          // Variable Test List"
          // patternName
          // patternTags
          // patternAuthor
          // patternDescription

    console.log('results', this.props.results);
      if (this.props.results.length > 0 && !this.state.willClose) { 
           this.openClass="open";
           this.searchList = null;
           this.searchList = this.props.results.map(((currentValue, index ) => {
             return(<li onClick={this.handleResultClick} key={index} data-key={index}>{currentValue.patternName}</li>);
            }).bind(this));
      } else {
        this.state.willClose = false;
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

  handleCloseClick(e) {
    console.log("Attempting to close");
    this.setState({willClose: true});
  }

  render() {

    return (
    <div className={"searchResults " + this.openClass}>
      <div className="searchListWrap">
      <ul>
        {this.searchList}
      </ul>
      <div className="searchCloseButtons"> 
        <span onClick={this.handleCloseClick} >close results <i className="fa fa-times-circle" aria-hidden="true"></i></span>
      </div>
      </div>
    </div>)
  }
}
