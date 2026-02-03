import Navbar from '../components/Navbar'
import './App.css'
import Hero from '../components/Hero'
import Form from '../components/Form'
import Card from '../components/Card'
import React, { useState } from 'react'
function App() {
 const [task,setTask]= useState([])
const deleteTask = (index) => {
  const updatedTasks = task.filter((_, i) => i !== index);
  setTask(updatedTasks);
};
  return (
    <>
   
    <Hero/>
    <Form setTask={setTask}task={task} />
   {task.map((item, index) => (
 <Card 
    key={index} 
    taskText={item} 
    onDelete={() => deleteTask(index)} 
  />
))}
    </>
  )
}

export default App
