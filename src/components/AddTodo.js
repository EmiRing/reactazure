import React, {useState, useContext} from 'react'
import { TodoContext } from '../contexts/Context'

const AddTodo = () => {
    const [text, setText] = useState('')
    const {addTodoCallback} = useContext(TodoContext)

    const addTodo = e => {
        e.preventDefault()
        addTodoCallback(text)
        setText('')
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card bg-light w-50">
                <div className="card-body">
                    <form onSubmit={addTodo}>
                        <input value={text} onChange={e => setText(e.target.value)} type="text" className="form-control form-control" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
