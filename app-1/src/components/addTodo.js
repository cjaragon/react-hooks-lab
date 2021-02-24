import React, {useState} from 'react'

function AddTodo(props) {
    const [input, setInput] = useState('')

    const handleAddTodo = (e) => {
        e.preventDefault()
        props.addTodo(input)
        setInput('')
    }

    return(
        <form onSubmit={handleAddTodo} >
            <input placeholder='What is next?'
            onChange = {(e) => setInput(e.target.value)}
            value={input} />
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo