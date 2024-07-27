import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Academics from './Academics'
import Faculty from './Faculty'
import Student from './Student'
import Gallery from './Gallery'
import Admission from './Admission'

const Navpage = () => {
  return (
   <React.Fragment>
    <section>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/academics' element={<Academics/>}></Route>
            <Route path='/faculty' element={<Faculty/>}></Route>
            <Route path='/student' element={<Student/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/admission' element={<Admission/>}></Route>
        </Routes>
    </section>
   </React.Fragment>
  )
}

export default Navpage