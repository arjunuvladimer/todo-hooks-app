const Todo = ({todo,index, updateTodo, deleteTodo}) => {

    return(
        <div 
            style={{textDecoration: todo.hasComplete? "line-through": "none"}}
            className="todo"
            >
            {todo.text}
            <button 
                className="btn"
                onClick={() => updateTodo(todo._id)}
            >
            Completed
            </button>
            
            <button 
                className="btn"
                onClick={() => deleteTodo(todo._id)}
            >
            Remove
            </button>
            
        </div>

    )
}

export default Todo