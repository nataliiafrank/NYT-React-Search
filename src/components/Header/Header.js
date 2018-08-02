import React, {Component} from 'react';
import './Header.css';

const Header = () => (
    <div className="jumbotron" style={{backgroundColor: "#20315A", color: "white"}}>
        <h1 className="text-center">
            <strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong>
        </h1>
    </div>
)


export default Header;