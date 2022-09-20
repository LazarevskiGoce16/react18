import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, reset, incrementBy } from "../slices/counterSlice"


export const Counter = () => {

    const count = useSelector(state => state.counter.count )
    const dispatch = useDispatch()

    const inputRef = useRef(null)

    return <div>
        <p>Counter : {count}</p>
        <div>
            <button
                onClick={() => dispatch(increment())}
            >+</button>
            <button
                onClick={() => dispatch(decrement())}
            >-</button>
            <button
                onClick={() => dispatch(reset())}
            >reset</button>
            <div>
                <input type="text" ref={inputRef} />
                <button
                    onClick={() => {
                        dispatch(incrementBy(inputRef.current.value))
                    }}
                >incrementBy</button>
            </div>
        </div>
    </div>
}