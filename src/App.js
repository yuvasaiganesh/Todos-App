

import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import TaskDetails from "./components/TaskDetails"
import './App.css';

const App=()=>(
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/:id" element={<TaskDetails/>}/>
        </Routes>
      
)

export default App


