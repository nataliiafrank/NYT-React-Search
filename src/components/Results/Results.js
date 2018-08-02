import React, {Component} from 'react';
import './Results.css';

class Results extends Component {
    render(){
        return (
            <div class="row">
                <div class="col-sm-12">
                    <br/>
                    {/* Panel for search results */}
                    <div class="card">
                        {/* Panel Heading */}
                        <div class="card-header">
                            <strong><i class="fa fa-table"></i> Results</strong>
                        </div>

                        {/* Panel body for the resulting articles*/}
                        <div class="card-body" id="article-section">
                            <div className="well">
                            <h4 className="articleTitle">In France, Vestiges of the Great War’s Bloody End</h4>
                            <h5 className="articleAuthor">By RICHARD RUBIN</h5>
                            <h6 className="articleDate">Date Published</h6>
                            <h6 className="articleLink">Link to the articke</h6>
                            <button className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;