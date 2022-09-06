import {Link, Outlet} from "react-router-dom"

const students = [
    {name : "Martina"},
    {name : "Alek"},
    {name : "Goce"},
    {name : "Bojan"}
  ]

export const UserLayout = () => {

    return  <>
        <h3>User Layout</h3>
        <ul>
            <li><Link to="/users/1">User 1</Link></li>
            <li><Link to="/users/2">User 2</Link></li>
            <li><Link to="/users/new">NewUser</Link></li>
        </ul>
        <Outlet context={students} />
        <footer>asdjasdgh</footer>
    </>
}