import {Component} from "react"
import Task from "../Task"
import { v4 as uuidv4 } from 'uuid';
import "./index.css"
import React from "react"




class Home extends Component{
 
 state={task:"",tasklist:[],sorting:"one"}

 addTask=(event)=>{
this.setState({task:event.target.value})
 }

 toSubmit=(event)=>{
  event.preventDefault()
  const {task,tasklist}=this.state
  const newTask={id:uuidv4(),task:task, complete:false, status:"NotDone"}
  this.setState({tasklist:[...tasklist,newTask],task:""},this.updateSort)
 
 }
 deleteItem=(item)=>{
    const {tasklist}=this.state
  const newList=tasklist.filter(each=>each.id !== item)
  this.setState({tasklist:newList},this.updateSort)
 }

 taskUpdate=(item)=>{
    const {tasklist}=this.state
  const newtodo=tasklist.map(each=>{
    if (each.id === item){
        if (each.complete){
            each.complete=false
            each.status="NotDone"
        }
        else{
            each.complete=true
            each.status="Done"
        }
        
    }
return each})
  
  this.setState({tasklist:newtodo,},this.updateSort)
  
 }
 

 updateSort=()=>{
    const {sorting,tasklist}=this.state
    if (sorting==="one"){
    const newValues1=tasklist.filter(each=>each.status==="Done")
    const newValues2=tasklist.filter(each=>each.status==="NotDone")
    const finalList=[...newValues1,...newValues2]
    this.setState({tasklist:finalList})
    
    }

    if (sorting==="two"){
        const newValues1=tasklist.filter(each=>each.status==="Done")
        const newValues2=tasklist.filter(each=>each.status==="NotDone")
        const finalList=[...newValues2,...newValues1]
        this.setState({tasklist:finalList})
      
        }

       
 }

 changeSort=(event)=>{
    const {tasklist}=this.state
    if (event.target.value==="one"){
    const newValues1=tasklist.filter(each=>each.status==="Done")
    const newValues2=tasklist.filter(each=>each.status==="NotDone")
    const finalList=[...newValues1,...newValues2]
    this.setState({tasklist:finalList,sorting:event.target.value})
    
    }

    if (event.target.value==="two"){
        const newValues1=tasklist.filter(each=>each.status==="Done")
        const newValues2=tasklist.filter(each=>each.status==="NotDone")
        const finalList=[...newValues2,...newValues1]
        this.setState({tasklist:finalList,sorting:event.target.value})
       
        }

       
 }
 


    render(){
        const {task,tasklist}=this.state
        
        
                
                return(
<div className="homePage">
<h1 className="taskHeading">Add Your Task</h1>

    <form onSubmit={this.toSubmit}>
        
        
        <input placeholder="Enter your Task" className="addTask" type="text" value={task} onChange={this.addTask}/>
        <button className="submitButton" type="submit">Add</button>
    </form>
    <div className="sortingSection">
           <select  onChange={this.changeSort} >
           
            <option value="one">complete to Not Completed</option>
            <option value="two">Notcomplete to Completed</option>
            </select> 
        </div>
    <div>
       
        
        {tasklist.map((item,index)=>{
           return( <Task key={item.id} taskDetails={item} toUpdate={this.taskUpdate} addDelete={this.deleteItem}/>)
        })}
    </div>
</div>
        )
    
}
}
export default Home