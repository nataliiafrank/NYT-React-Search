import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-sm-12">
                    <br/>

                    {/* Panel for handling the search parameters*/}
                    <div className="card">
                        <div className="card-header">
                            <strong><i className="fa fa-list-alt"></i> Search Parameters</strong>
                        </div>

                        <div className="card-body">
                            {/* HTML Form for handling the inputs */}
                            <form role="form">

                                {/* Search Term*/}
                                <div className="form-group">
                                    <label for="search">Search Term:</label>
                                    <input type="text" className="form-control" id="search-term"/>
                                </div>

                                {/* Start Year Parameter */}
                                <div className="form-group">
                                    <label for="start-year">Start Year:</label>
                                    <input type="text" className="form-control" id="start-year"/>
                                </div>

                                {/* End Year Parameter*/}
                                <div className="form-group">
                                    <label for="end-year">End Year:</label>
                                    <input type="text" className="form-control" id="end-year"/>
                                </div>

                                {/* Button Search and Clear Results*/}
                                <button type="submit" className="btn btn-default" id="run-search">
                                    <i className="fa fa-search"></i> Search</button>
                                <button className="btn btn-default" id="clear-all">
                                    <i className="fa fa-trash"></i> Clear Results</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;