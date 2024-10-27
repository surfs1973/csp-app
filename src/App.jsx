import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import SetPage from './pages/SetPage'
import NotFound from './pages/NotFound'
import ColorPage from './pages/ColorPage'
import ProfilePage, { profileLoader } from './pages/ProfilePage'
import EditProfilePage from './pages/EditProfilePage'

const App = () => {
    // put job
    const editProfile = async (p) => {
        const res = await fetch(`/api/profiles/${p.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(p)

        });
        return;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/set' element={<SetPage />} />
                <Route path='/color' element={<ColorPage />} />
                <Route path='/profile/:id' element={<ProfilePage />} loader={profileLoader} />
                <Route path='/edit-profile/:id' element={<EditProfilePage editProfileSubmit={editProfile}  />} loader={profileLoader} />
                <Route path='*' element={<NotFound />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />

}

export default App
