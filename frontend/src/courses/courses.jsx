import React from 'react'
import Navbar  from '../components/navbar'
import Course  from '../components/course'
import Footer  from '../components/footer'
import list from "../assets/list.json"
function courses() {
    console.log(list);
  return (
   <> <div>
      <Navbar/>
   <div className="min-h-screen">
   <Course/>
   </div>
      <Footer/>
   </div>
   </>
  )
}

export default courses
