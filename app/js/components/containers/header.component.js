import React from 'react'; 
import SearchResults from './searchResults.component';

export default class Header extends React.Component { 


    constructor(props) {
        super(props);
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
                    <input name="searchText" id="searchText" type="text" />
                    <a href="#" className="searchButton" id="searchButton"> <i className="fa fa-search" aria-hidden="true"></i> </a>
                </div>
                <SearchResults />
                
            </div> 

        );

    }

}