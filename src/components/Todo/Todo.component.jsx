const Todo = ({todo,index, updateTodo, deleteTodo}) => {

    return(
        <div 
            style={{textDecoration: todo.hasCompleted? "line-through": "none"}}
            className="todo"
            >
            {todo.text}
            <button 
                className="btn"
                onClick={() => updateTodo(index)}
            >
            Completed
            </button>
            
            <button 
                className="btn"
                onClick={() => deleteTodo(index)}
            >
            Remove
            </button>
            
        </div>

    )
}

export default Todo