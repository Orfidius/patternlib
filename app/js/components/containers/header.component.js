import React from "react";
import SearchResults from "./searchResults.component";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: ""
    };
    this.updateQuery = this.updateQuery.bind(this);
  }
  componentWillUpdate() {

  }

  updateQuery(event) {
    if (this.props.data) {
      let query = event.target.value;
      let found = false;
      let searchResults = this.props.data.filter(currentValue => {
        // Variable Test List"
        // patternName
        // patternTags
        // patternAuthor
        // patternDescription

        // console.log(currentValue);
        let addReject = false;

        if (currentValue.patternName.search(query) > -1) {
          addReject = true;
          console.log("pattern Name");
        }
        if (currentValue.patternTags.search(query) > -1) {
          addReject = true;
          console.log("Pattern Tags");
        }
        if (currentValue.patternAuthor.search(query) > -1) {
          addReject = true;
          console.log("pattern Author");
        }
        if (currentValue.patternDescription.search(query) > -1) {
          addReject = true;
          console.log("pattern Description");
        }

        return addReject;
      });
      if (searchResults) {
        console.log("search Results: ", searchResults);
      }
      this.setState({ searchResults: searchResults });
    }
  }

  render() {
    return (
      <div className="container-fluid appHead">
        <div className="logo">
          <img src="images/logo.png" />
        </div>
        <div className="utilButtons" />
        <div className="search">
          <input
            name="searchText"
            id="searchText"
            onChange={this.updateQuery}
            type="text"
          />
          <a href="#" className="searchButton" id="searchButton">
            {" "}
            <i className="fa fa-search" aria-hidden="true" />{" "}
          </a>
        </div>
        <SearchResults results={this.state.searchResults}  />
      </div>
    );
  }
}
