import React from 'react'
import Adminnave from '../../components/Admin/Adminnavbar/Adminnav'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
        <Adminnave/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout