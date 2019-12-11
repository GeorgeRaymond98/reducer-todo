import React from 'react';

const TodoList = ({todos}) => {
 console.log(todos)
    return(
        <>
         <h1>{todos.item}</h1>
        </>
    )
}


export default TodoList