import React, {useState, useReducer} from "react";
import TodoList from "./TodoList";
import {reducer, initialState} from '../reducer/todoReducer'

const Todo = () => {
    const[newTodo, setNewTodo] = useState("Enter Todo!");
    const [state, dispatch] = useReducer(reducer, initialState);


const handleChanges = event  => {
    setNewTodo(event.target.value);
  };

const addNewTodo = () => {
    dispatch({type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
}

const submitChanges =  event => {
    event.preventDefault();
}

return (
    <div>
        <form onSubmit={submitChanges}>
            <input
            type="text"
            name="newTitleText"
            value={newTodo}
            onChange={handleChanges}
            />
            <button onClick={addNewTodo}>ADD TODo</button>
            <button onClick={() => {
                dispatch({type: "CLEAR_TODO", payload: ""})
                setNewTodo('');
            }}>Clear </button>
        </form>
        {state.todos.map(todo =>(

            <div
          className={todo.completed ?  "complete" : "todo"}
          style={{ textDecoration: todo.completed ? "line-through" : "none", textDecorationColor: todo.completed ? 'red': 'none', listStyleType: todo.completed ? 'space-counter': 'none'  }}
          onClick={() => dispatch({ type:"TOGGLE", payload: todo.id })}
        >
                <TodoList todos={todo}/>
        </div>
        ))}
    </div>
)
        }
export default Todo;



