import { LifecycleClassComponent } from "./components/LifecycleClassComponent"
import { LifecycleFuncComponent } from "./components/LifecycleFuncComponent"
import { LogIn } from "./components/LogIn"
import {useState} from 'react'

const App = () => {

  const [show , setShow] = useState(true)

  
  return (<div>
    
    <button
      style={{padding:"10px", width:"100%"}}
        onClick={() => setShow((s) => !s)}
      >Show/Hide</button>

      {show && <LifecycleClassComponent />}

      {show && <LifecycleFuncComponent />}

      <LogIn />

  </div>);
}

export default App
