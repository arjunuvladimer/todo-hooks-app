import { useState } from "react";

// const props = {addTodo:() => {}}
// const {addTodo} = props

const TodoForm = ({addTodo}) => {
    // From an empty string to it becomes => input => string
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!value) return;
    // AddTodo Function is going to carry it to App Component
    addTodo(value)
    // Empty the String
    setValue("")
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
    </div>
    );
};

export default TodoForm
