import {useState} from "react"

import { movies } from "./mock/mockData"

// import { Homework } from "./components/Homework";

import {Input} from "./components/common/Input";

const App = () => {

  const [fieldType, setFieldType] = useState("password")

  const onMouseDownHandler = () => {
    setFieldType("text")
  }

  const onMouseUpHandler = () => {
    setFieldType("password")
  }

  return (
    <div>
      {/* <Homework movies={movies}/>  */}

      <Input
            name="password" 
            type={fieldType} 
            mouseDown={onMouseDownHandler} 
            mouseUp={onMouseUpHandler} />
    </div>
  );
}

export default App
