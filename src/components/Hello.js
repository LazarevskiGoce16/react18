import { sayHallo } from "../actions/Hello"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../actions/Counter"
import { useState } from "react"

export const Hello = () => {

    const dispatch = useDispatch()    
    const { greeting } = useSelector( state => state.HelloReducer )
    const { counter } = useSelector( state => state.CounterReducer )

    // use the payload to increment by 12
    // increment(12)
    // decrement(12)

    const [magicNumber , setMagicNumber] = useState("")

    return (
        <div>
            <h1>{greeting}</h1>
            <button 
                onClick={() => dispatch(sayHallo())}
            >
                Click Me for Hello
            </button>
            <hr />
            <p> Counter : {counter}</p>
            <input 
                value={magicNumber}
                onChange={(e) => setMagicNumber(Number(e.target.value))}
                type="number" 
                placeholder="Incr / Decr by Number" 
            />
            <button
                onClick={() => dispatch(increment(magicNumber))}
            >+</button>
            <button
                onClick={() => dispatch(decrement(magicNumber))}
            >-</button>
        </div>
    )
}