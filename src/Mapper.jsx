import React from 'react';
import Note from './Note';

function Mapper(props){
    return (
        <div className='mapper'>
            {props.lit.map((todo) => <Note key={todo.id} title={todo.title} content={todo.content} />)}
        </div>
        
    )
}

export default Mapper;