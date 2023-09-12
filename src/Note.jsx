import React from "react";
import { ReactDOM } from "react-dom";
import './index.css';
export default function Note(props){
    
    return(<div>
            <div className="box">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
    </div>);
}
// eslint-disable-next-line