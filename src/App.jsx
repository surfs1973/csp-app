import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import SetPage from './pages/SetPage'
import NotFound from './pages/NotFound'
import ColorPage from './pages/ColorPage'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/set' element={<SetPage />} />
                <Route path='/color' element={<ColorPage />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />

}

export default App
