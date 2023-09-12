import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function Footer(){
    const d = new Date();
    const year = d.getFullYear();
    return(
        <footer className="foot">
            <hr></hr>
            <h1 style={{}}>At the rate copyRight @Abhijit Kumar {year}</h1>
        </footer>
    );
};

export default Footer;