import React from 'react'
import Adminnave from '../../components/Admin/Adminnavbar/Adminnav'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'

function AdminLayout() {
  return (
    <div>
        <Adminnave/>
        <div className='flex max-w-[1300px] mx-auto relative '>
           <Sidebar/>
           <Outlet/>
        </div>
       

       
          
           
    

       
    </div>
  )
}

export default AdminLayout