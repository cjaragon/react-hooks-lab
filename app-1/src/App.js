import React, {useState} from 'react'
import AddTodo from './components/addTodo'
import List from './components/list'
import './App.css';



function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (item) => {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;
