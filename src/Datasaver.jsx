import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import Mapper from "./Mapper";
import Adding from "./Adding";

function Datasaver(){
    const [list , setlist] = useState([]);
    const [count , setCount] = useState(1);
    function handleAdd(event){

    }
    

    function handleAdd(entry){
        const { title , content} = entry;
        
        const data = {
                id: count,
                title : title,
                content: content
            }
        setlist((prev) => {
                setCount((prev2) =>  prev2 + 1)
                return [...prev , data ]
            })
    }

    return (
        <>
            <Adding fun={handleAdd} />
            <Mapper lit={list} />
        </>
        
        // list.map((todo) => <Note Note key={todo.id} title={todo.title} content={todo.content} />)
    )
}

export default Datasaver;