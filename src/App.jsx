import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import SetPage from './pages/SetPage';
import NotFound from './pages/NotFound';
import ColorPage from './pages/ColorPage';
import ProfilePage, { profileLoader } from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import useAuth from './auth/useAuth';
import Spinner from './components/Spinner';

const App = () => {
    const { user, loading, profile, setProfile } = useAuth();
    const db = getFirestore();
    const [isUpdating, setIsUpdating] = useState(false);

    const editProfile = async (p) => {
        setIsUpdating(true);
        try {
            const userDocRef = doc(db, 'users', user.uid);
            // push to db
            await updateDoc(userDocRef, p);
            // update profile as well
            setProfile((prevProfile) => ({ ...prevProfile, ...p }));
            console.log("profile updated");
        } catch (error) {
            console.error("error on update:", error);
        } finally {
            setIsUpdating(false);
        }
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout profile={profile} user={user} />}>
                <Route index element={<HomePage />} />
                <Route path='/set' element={<SetPage />} />
                <Route path='/color' element={<ColorPage />} />
                <Route path='/profile/:id' element={<ProfilePage />} loader={profileLoader} />
                <Route path='/edit-profile/:id' element={<EditProfilePage editProfileSubmit={editProfile} />} loader={profileLoader} />
                <Route path='*' element={<NotFound />} />
            </Route>
        )
    );

    if (loading || isUpdating) {
        return <Spinner text={"Loading..."}/>;
    }

    return <RouterProvider router={router} />;
}

export default App;
