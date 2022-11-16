//if import a class
//import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () =>{
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
    id: 1
  },
  {
    text: "Meeting at school",
    day: "Feb 6th at 1:30pm",
    reminder: false,
    id: 2,
  }]
  )

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
                              {...task, reminder: !task.reminder} : task))
  }
  
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  }

  return(
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask) } 
              showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks ={tasks} 
                                 onDelete={deleteTask} 
                                 onToggle={toggleReminder}/> : 
                                 'No tasks to show' }
      
    </div>
  )
}

//class App extends React.Component{
//   render() {
//     return <h1>hello for a class</h1>
//   }
// }
export default App
