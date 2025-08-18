import React , {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    let [todos,setTodos] = useState([{task : "Sample task" , id:uuidv4()}]);

    let [newTodo , setNewTodo] = useState("");

    let addTodos = () => {
        setTodos([...todos,{task: newTodo, id:uuidv4()}]);
        setNewTodo("");
    }

    let updateTodo = (e) => {
        setNewTodo(e.target.value);
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todos) => todos.id != id));
    }


    //update all element in array
    let upperCaseAll = () => {
        setTodos((prev) => 
            prev.map((todo) => ({
                ...todo,
                task : todo.task.toUpperCase()
            }))
        )
    };

    //update one element in array
    let upperCaseOne = (id) => {
        setTodos((prev) => 
            prev.map((todo) => {
                if(todo.id === id){
                    return {
                        ...todo,
                        task : todo.task.toUpperCase()
                    }
                }else{
                    return todo;
                }
            }))
    };

    let markAsDone = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
            todo.id === id
                ? { ...todo, style: { textDecoration: "line-through" } }
                : todo
            )
        );
    };

    
    return (
    <>
        <input type="text" placeholder='Enter task' value={newTodo} onChange={updateTodo}/>
        <button onClick={addTodos}>Add</button>

        <ul>
            {
                todos.map((todo,id) => (
                    <li key={todo.id}>
                        <span style={todo.style}>{todo.task}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => upperCaseOne(todo.id)}>upperCaseOne</button>
                        <button onClick={() => markAsDone(todo.id)}>Done</button>
                        <br></br>
                    </li>
                ))               
            }
        </ul>
        <br></br>
        <button onClick={upperCaseAll}>UpperCase</button>
    </>
  )
}

export default Todo