import {useOutletContext} from "react-router-dom"

export const Users = ({users}) => {
    
    const students = useOutletContext()

    return (
        <>
            <h3>This is Users component</h3>

            {/* <li><Link to="/users/1">User 1</Link></li>
            <li><Link to="/users/2">User 2</Link></li>
            <li><Link to="/users/new">NewUser</Link></li> */}

            {users.map(user => <li key={user.name}>{user.name}</li>)}
            <ul>
                {students.map(user => <li key={user.name}>{user.name}</li>)}
            </ul>
            <pre>{JSON.stringify(students, null, 2)}</pre>
        </>
    )
}