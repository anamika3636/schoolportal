import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { FaSchool } from "react-icons/fa";


const Sidebardata = [
    {
        title:'Home',
        path:'/',
        icon:<FaHome/>
    },
    {
        title:'About us',
        path:'/about',
        icon:<MdOutlineLibraryBooks/>
    },
    {
        title:'Academics',
        path:'/academics',
        icon:<HiAcademicCap/>
    },
    {
        title:'Admission',
        path:'/admission',
        icon:<FaSchool/>
    },
    {
        title:'Contact',
        path:'/contact',
        icon:<FaSchool/>
    }
    
]


export default Sidebardata