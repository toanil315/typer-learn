import React from 'react'
import dynamic from 'next/dynamic'
import AdminLayout from '../../layout/AdminLayout'
// import 'antd/dist/antd.css';

function AdminPosts(props) {
  return (
    <AdminLayout namePage="Dashboard">
        Admin page
    </AdminLayout>
  )
}

export default dynamic(() => Promise.resolve(AdminPosts), {
    ssr: false
})
