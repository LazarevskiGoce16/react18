
const Student = ({student}) => {

    const {name , lastname, email, age} = student

    return <div>
        <h3>Functional Component</h3>
        <p>Name : {name}</p>
        <p>Lastname : {lastname}</p>
        <p>Age : {age}</p>
        <p>Email : {email}</p>
    </div>
}
export default Student