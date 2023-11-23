import {useLocation,useNavigate} from "react-router-dom"
import "./index.css"


function TaskDetails(){
    
    
      const location = useLocation()
      const {state}=location
      const {task,status}=state
      
      const history=useNavigate()

      const toHome=(event)=>{
        event.preventDefault()
    
       history("/")
      }

      return (
        <div className="detailSection">
            <h1 className="taskHeading">Task Details</h1>
          <h1 className="taskPara">Task Name: {task}</h1>
          <p className="taskPara">Task Status: {status}</p>
          <button onClick={toHome}className="backButton">Back To TaskList</button>
            
        </div>
      )
    
 
}

export default TaskDetails