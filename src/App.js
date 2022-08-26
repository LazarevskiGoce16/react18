import { LifecycleClassComponent } from "./components/LifecycleClassComponent"
import { LifecycleFuncComponent } from "./components/LifecycleFuncComponent"
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

      

  </div>);
}

export default App
