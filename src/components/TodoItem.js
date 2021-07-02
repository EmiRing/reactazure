import React, {useContext} from 'react'
import { TodoContext } from '../contexts/Context'

const TodoItem = ({ todo }) => {
    const { removeTodoCallback} = useContext(TodoContext)
    
    const removeTodo = () => {
        removeTodoCallback(todo.id)
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {todo.text}
            <i onClick={removeTodo} className="fas fa-trash"></i>
        </li>
    )
}

export default TodoItem
