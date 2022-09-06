import { useEffect, useState } from "react"

// Router
import {Routes, Route} from "react-router-dom"

//components
import {Nav} from "./components/Nav"
import {Home} from "./components/Home"
import {About} from "./components/About"
import {Contact} from "./components/Contact"
import {Users} from "./components/Users"
import {User} from "./components/User"
import {NewUser} from "./components/NewUser"
import {NotFound} from "./components/NotFound"

//layouts
import {UserLayout} from "./layouts/UserLayout"


// const users = [
//   {name : "Stavre"},
//   {name : "Daniel"},
//   {name : "Andrej"},
//   {name : "Stefani"}
// ]

const App = () => {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await fetchData.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])


  return (
    <div>

      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>

        {/* <Route path="/users" element={<Users />}/>
        <Route path="/users/:id" element={<User />}/>
        <Route path="/users/new" element={<NewUser />}/> */}

        <Route path="/users" element={<UserLayout />}>
          <Route index element={<Users users={users}/>}/>
          <Route path=":id" element={<User />}/>
          <Route path="new" element={<NewUser />}/>
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App
