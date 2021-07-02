import React, {useContext} from 'react'
import { TodoContext } from '../contexts/Context'
import TodoItem from './TodoItem'

const TodoList = () => {
    const { todos } = useContext(TodoContext)
    
    return (
        <div className="d-flex justify-content-center mt-5">
            <ul className="list-group w-75">
            {
                todos.map(todo => (<TodoItem key={todo.id} todo={todo} />))
            }
            </ul>
        </div>
    )
}

export default TodoList
