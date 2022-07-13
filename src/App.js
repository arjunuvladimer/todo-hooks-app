// useEffect is used for ComponentDidMount
// useState is used to set the values for our todos
import { useState, useEffect } from 'react'

// Importing todo component from components
import Todo from './components/Todo/Todo.component'

// Importing todo form component from todoform components
import TodoForm from './components/TodoForm/TodoForm'

// Axios used for API call
// With the help of which we are updating the data
import axios from 'axios'

const App = () => {
  // useState() => returns [state, setState] Values => empty Array as value for todos 
  const [todos, setTodos] = useState([])

  // useEffect function to get all the data
  // Read operation
  // Using async await so as to wait for the data to be loaded from database
  useEffect(() => {
    async function getTodos() {
      // By default axios.get
      // Calling the API using axios to read
      const results = await axios("https://kellton-todo.herokuapp.com/todo/read")
      // console.log(results.data.data)
      // We get the result.data from axios and .data is our varible given in database
      setTodos(results.data.data)
    }
    // Functional call for getTodos
    getTodos()
  })


  // 1. Creation
  // Using async await to wait for the data to be loaded and updated
  const addTodo = async (text1) => {


    // New State with Array[{exisisting_obj}, {newObj}]

    // Creating a body with key value pair to add the todo in particular format
    const body = { text: text1, hasComplete: false }

    // Using axios.post we are adding the data with the body
    await axios.post("https://kellton-todo.herokuapp.com/todo/create", body)
      .then(res => {

        // Any State inside useState Hook => 
        // Previous todos as well as new data
        const newTodos = [...todos, res.data.data]
        // Setting the values with new data
        setTodos(newTodos)
        // console.log(res.data)
      })

    // setTodos(newTodos)
  }
  // 3. Update
  // Using async await to wait for the data to be loaded and updated
  const updateTodo = async (id) => {

    // Using .filter method getting the id to update that particular todo
    const newUpdateTodo = todos.filter((value, index) => value._id === id)
    // console.log(!newUpdateTodo[0].hasComplete)
    
    // Using axios.put updating the data present before
    // To mark that todo is completed setting the value of hasComplete to true
    // As newUpdate to has value on 0th index i.e. using newUpdateTodo[0]
    await axios.put(`https://kellton-todo.herokuapp.com/todo/update/${id}`, { hasComplete: !newUpdateTodo[0].hasComplete })
      .then(res => {

        // console.log(res.data.data)
        // Need the data which was there already as well as new data
        // Updating the data using newTodos
        const newTodos = [...todos, res.data.data]
        // Setting the newTodos data
        setTodos(newTodos)
        // console.log(todos)
      })

  }

  // 4. Delete
  // Using async await to wait for the data to be loaded and updated
  const deleteTodo = async (id) => {

    
    await axios.delete(`https://kellton-todo.herokuapp.com/todo/delete/${id}`)
      .then(async (res) => {
        if (res.data.data.acknowledged) {
          const results = await axios("https://kellton-todo.herokuapp.com/todo/read")
          // console.log(results.data.data)
          setTodos(results.data.data)

        }

      })


  }

  return (
    <div className='app'>
      <div className='todo-list'>
        <h1>Todo List</h1>
        {/**2. Read */}
        {todos.map((todo, index) => {
          return (
            <Todo
              index={index}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              key={index}
            />
          )
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App