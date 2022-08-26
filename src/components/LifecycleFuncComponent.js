import { useEffect, useState } from "react"


export const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(0)

    //WRONG
    // counter += 1

    // empty array as dependency === componentDidMount
    useEffect(() => {
        console.log("LifecycleFuncComponent -> componentDidMount ")
        return () => {
            console.log("LifecycleFuncComponent -> componentWillUnmount ")
        }
    }, []) 

    console.log("LifecycleFuncComponent -> render ")

    const increment = () => {
        setCounter((count) => (++count))
    }
    

    return (<div>
        <h2>LifecycleFuncComponent</h2>
        <p>Counter value : {counter}</p>
        <button
            onClick={increment}
        >Increment</button>
    </div>)
}