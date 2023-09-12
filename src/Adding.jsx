import React, { useState } from "react";
import ReactDOM from "react-dom";

function Adding(props){
    let a = 6;
    const[entry , setentry] = useState({title : "" , content : ""});
    function handleChange(event){
        const {name , value} = event.target;
        setentry((prev) => {
            if(name === "title"){
                return(
                    {
                        title : value,
                        content : prev.content
                    }
                )
            }else{
                return(
                    {
                        title : prev.title,
                        content : value
                    }
                )

            }
        })
    }
    function handleSubmit(event){
        
        props.fun(entry)
        event.preventDefault()
    }

    return(
        <div>
            <form className="intit" onSubmit={handleSubmit}>
                <input type="text" placeholder="Ttile" onChange={handleChange} name="title"></input>
                <input type="text" placeholder="Content" name="content" onChange={handleChange}></input>
                <button type="submit" >Add</button>
            </form>
        </div>
    )
}

export default Adding;
 // eslint-disable-next-line