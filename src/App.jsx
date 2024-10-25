import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import SetGame from './pages/SetGame'
import NotFound from './pages/NotFound'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/set' element={<SetGame />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />

}

export default App
