import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/Navbar'

const MainLayout = ({ profile, user, editProfile, foundSets }) => {    
    return (
        <>
            <Navbar profile={profile} user={user} editProfile={editProfile} foundSets={foundSets} />
            <ToastContainer stacked autoClose={2000} position="bottom-center" />
            <Outlet />
        </>
    )
}

export default MainLayout