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
  componentWillUpdate() {}

  updateQuery(event) {
    if (this.props.data && event.target.value.length > 1) {
      let query =
        event.target.value.trim() != "" || event.target.value.trim() != " "
          ? event.target.value.trim()
          : 0;
      let found = false;
      console.log(query);
      if (query != 0) {
        let searchResults = this.props.data.filter(currentValue => {
          // Variable Test List"
          // patternName
          // patternTags
          // patternAuthor
          // patternDescription

          // console.log(currentValue);
          let addReject = false;
          console.log("Query: ", query);

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
          console.log("search Results: ", searchResults.length);
        }
        this.setState({ searchResults: searchResults });
      } else {
        this.setState({ searchResults: [] });
      }
    } else {
      this.setState({ searchResults: [] });
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
            onBlur={this.updateQuery}
            type="text"
          />
          <a href="#" className="searchButton" id="searchButton">
            {" "}
            <i className="fa fa-search" aria-hidden="true" />{" "}
          </a>
        </div>
        <SearchResults updatePattern={this.props.updatePattern} results={this.state.searchResults} />
      </div>
    );
  }
}
