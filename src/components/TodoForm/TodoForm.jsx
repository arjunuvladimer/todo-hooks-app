import { useState } from "react";
import ChildofTodoForm from "../ChildofTodoForm/ChildofTodoForm.component";

// function useState(value){
//    constructor(value){
//      this.state = value
//    }
// setState(value){
//     this.state = value
// }
//    return [state,setState]
//}
// var a = 10
// Array => [1,2,3,4] => [x,y,z]
// obj => {fname:value,lname:value} =>{fname,lname} = obj

const TodoForm = ({addTodo}) => {
    // From an empty string to it becomes => input => string
  const [value, setValue] = useState(10);
 
    const handleSubmit = (event) => {
    event.preventDefault()
    if(!value) return;
    // AddTodo Function is going to carry it to App Component
    addTodo(value)
    // Empty the String
    setValue(11)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="input"
                autoFocus
                value={value}
                placeholder="Enter your Todo"
                onChange={
                    (event) => setValue(event.target.value) 
                }
            />
            <button type="submit">Save</button>
        </form>
        <ChildofTodoForm />
    </div>
    );
};

export default TodoForm
