import React from 'react'
import Home from "./home/home"
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/courses"
import Sign from "./components/sign"
import Contact from './components/contact'

function App() {
  return (
  <>
{/* <Home/>
<Course/> */}
<div className="dark:bg-slate-900 dark:text-white">

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/course" element={<Courses/>}/>
<Route path="/contact" element={<Contact/>} />
  <Route path="/sign" element={<Sign/>}/>

</Routes>
</div>
  </>
  )
}

export default App
