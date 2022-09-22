import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add, remove, toggleCompleted } from "../slices/todosSlice"

export const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const handleInputChange = (event) => {
        if(event.key === "Enter"){
            dispatch(add({
                title : inputRef.current.value
            }))
            inputRef.current.value = ''
        }
    }

    return <div>
        <table>
            <tbody>
            {todos.map( todo => (
                <tr key={todo.id} 
                    style={{ 
                        color: todo.completed && "red",
                        textDecoration : todo.completed && "line-through"
                    }}
                >
                    <td>
                        {todo.title}
                    </td>
                    <td>
                    <button
                        onClick={() => dispatch(remove(todo.id))}
                    >
                        -
                    </button>
                    <button
                        onClick={() => dispatch(toggleCompleted(todo.id))}
                    >
                        toggleCompleted
                    </button>
                    </td>
                    </tr>
            ))}
            </tbody>
        </table>
        <p>Please click enter to add new todo</p>
        <input ref={inputRef} onKeyDown={handleInputChange}/>

    </div>

}