import React, {useState, useEffect} from 'react'
import Item from './item'
import axios from 'axios'
import './App.css';

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((res) => setList(res.data.results))
  }, [])

  return (
    <div className="App">
      {list.map((elem, index) => {
        return <Item name={elem.name} key={index} />
      })}
    </div>
  );
}

export default App;
