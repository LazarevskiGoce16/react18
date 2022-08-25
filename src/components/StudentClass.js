import {Component} from 'react'

export default class StudentClass extends Component {

    render() {
        const {name , lastname, email, age} = this.props.student
        return <div>
            <h3>Class Component</h3>
            <p>Name : {name}</p>
            <p>Lastname : {lastname}</p>
            <p>Age : {age}</p>
            <p>Email : {email}</p>
        </div>
    }
}

