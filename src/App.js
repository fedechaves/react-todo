//if import a class
//import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () =>{

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

  return(
    <div className='container'>
      <Header />
      <Tasks tasks ={tasks}/>
    </div>
  )
}

//class App extends React.Component{
//   render() {
//     return <h1>hello for a class</h1>
//   }
// }
export default App
