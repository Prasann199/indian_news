
import './App.css'
import NavBoard from './components/NewsBoard/newsboard'
import Navbar from './components/Navbar/navbar'
import { useState } from 'react'




function App() {

  const[category,setCategory]=useState("general");


  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NavBoard category={category}/>
    </div>
  )
}

export default App
