import "./index.css"
import {Link} from "react-router-dom"
import { IoTrashOutline } from "react-icons/io5";

const Task=(props)=>{
    
    const {taskDetails,addDelete,toUpdate}=props
   
    const {id,task,complete,status}=taskDetails
    const toDelete=()=>{
        addDelete(id)
    
    }

    const tochangeUpdate=()=>{
        
        toUpdate(id)
    }

    const color=complete ? "completedStatus" :"notCompletedStatus"
    const details={
        task:task,
        status:status
    }

    return(
       
        <div className="taskSection" draggable>
             <Link  to={`/:${id}`} state={details}>
            <div className="contentSection">
           
              <h1 className="taskName">{task}</h1>
            
            </div>
            </Link>
            <div className="statusSection">
            <input type="checkbox" checked={complete} onChange={tochangeUpdate}/>
            <p className={color}>{status}</p>
            
            <IoTrashOutline onClick={toDelete} className="deleteButton" />
            </div>
        </div>
       
        
    )
    
}
export default Task