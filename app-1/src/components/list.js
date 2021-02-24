import React from 'react'
import Todo from './todo'

const List = (props) => {
    return (
        <div>
            {props.list.map((item, index) => {
                return <Todo todo={item} key={index}/>
            })}
        </div>
    )
}

export default List