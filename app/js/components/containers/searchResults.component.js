import React from "react";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchList: (
        <ul>
          <li className="listResult NoResult">No results loaded</li>
        </ul>
      )
    };
  }

  componentWillUpdate() {}

  render() {

    return (
    <div className="searchResults">
      <div className="searchListWrap">{this.state.searchList}</div>
    </div>)
  }
}
