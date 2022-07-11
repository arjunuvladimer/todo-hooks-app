import {useState} from 'react'
import Todo from './components/Todo/Todo.component'
import TodoForm from './components/TodoForm/TodoForm'


const App = () => {
  // useState() => returns [state, setState] Values => empty Array as value for todos 
  const [todos,setTodos] = useState([
    {
      text:'Some Title',
      hasCompleted:false
    }
  ])

  // 1. Creation
  const addTodo = (text) => {
    // Any State inside useState Hook => 
    const newTodos = [...todos, {text}]
    // New State with Array[{exisisting_obj}, {newObj}]
    setTodos(newTodos)
  }
  // 3. Update
  const updateTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].hasCompleted = !newTodos[index].hasCompleted
    setTodos(newTodos)
  }

  // 4. Delete
  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return(
    <div className='app'>
      <div className='todo-list'>
        <h1>Todo List</h1>
        {/**2. Read */}
        {todos.map((todo,index)=> {
          return(
            <Todo 
              index={index}
              todo={todo} 
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
        <TodoForm addTodo = {addTodo} />
      </div>
    </div>
  )
}

export default App