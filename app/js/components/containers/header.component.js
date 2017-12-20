import React from 'react'; 
import SearchResults from './searchResults.component';

export default class Header extends React.Component { 


    constructor(props) {
        super(props);
        this.state = { 
            query: "",
        }
        this.updateQuery = this.updateQuery.bind(this);
    }
    componentWillUpdate() {
    }

    updateQuery(event) {
        if (this.props.data) {

        let query = event.target.value;
        let found = false;
        let searchResults = this.props.data.filter((currentValue) => {
                // Variable Test List" 
                // patternName 
                // patternTags
                // patternAuthor
                // patternDescription
                console.log("accumulator: ", accumulator);
                console.log("currentValue: ", currentValue);
                
         });

        }

     } 

    render(){

        return (
            <div className="container-fluid appHead">
                <div className="logo">
                    <img src="images/logo.png" /> 
                </div>
                <div className="utilButtons"> 
                </div>
                <div className="search">
                    <input name="searchText" id="searchText" onChange={this.updateQuery} type="text" />
                    <a href="#" className="searchButton" id="searchButton"> <i className="fa fa-search" aria-hidden="true"></i> </a>
                </div>
                <SearchResults />
                
            </div> 

        );

    }

}