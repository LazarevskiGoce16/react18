import "./css/styles.css"
import Student from "./components/Student"
import StudentClass from "./components/StudentClass"
import Conditional from "./components/Conditional"

// const secondaryParagraph = Object.freeze({
//   backgroundColor: "teal",
//   color:"black",
//   padding:"10px"
// })

const name = "Stavre"
const lastname = "Stavrikis"
const age = 21

const student = {
  name,
  lastname,
  age,
  email : "asd@asd.asd"
}

const fruits = ['apple', 'orange', 'banana']

const toShow = false

const App = () => {

  // const primaryParagraph = {
  //   backgroundColor: "yellow",
  //   color:"blue",
  //   padding:"10px"
  // }

  return (
    <div>
      <h1>Cas 2</h1>
      <div>{JSON.stringify(student)}</div>
      <p 
        // style={primaryParagraph}
        className="primaryParagraph"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure reprehenderit adipisci? Possimus earum molestiae eos, ea odit aliquid reiciendis.</p>
      
      <p 
        // style={secondaryParagraph}
        className="secondaryParagraph"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, impedit!</p>

      <Student student={student} />
      <StudentClass student={student} />

      <Conditional fruits={fruits} toShow={toShow} />
      <Conditional fruits={fruits} toShow={toShow} />
    </div>
  );
}

export default App
