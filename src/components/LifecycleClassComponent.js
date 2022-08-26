import { Component } from "react"


export class LifecycleClassComponent extends Component {

    constructor(props){
        super(props)
        console.log('LifecycleClassComponent -> constructor')

        //this is initial state of the component
        this.state = {
            counter : 0
        }
    }

    // method called only after initial render()
    componentDidMount(){
        console.log('LifecycleClassComponent -> componentDidMount')
    }

    // method calld when comonent will be removed from DOM
    componentWillUnmount(){
        console.log('LifecycleClassComponent -> componentWillUnmount')
    }

    increment = () => {

        //WRONG
        // this.state.counter += 1

        //CORRECT
        // this.setState({counter: 5})
        this.setState((state) => ({counter: ++state.counter}))
    }

    // method called every time component needs to re-render
    render(){
        console.log('LifecycleClassComponent -> render')
        return (<>
            <h2>Class Component</h2>
            <p>Counter value : {this.state.counter}</p>
            <button
                onClick={this.increment}
            >Increment</button>
        </>)
    }
}