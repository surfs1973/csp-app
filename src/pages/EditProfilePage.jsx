import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import Spinner from '../components/Spinner';

const EditProfilePage = ({ setProfile }) => {
    const profile = useLoaderData();
    const navigate = useNavigate();
    const { id } = useParams();
    const db = getFirestore();

    const [name, setName] = useState(profile.name);
    const [location, setLocation] = useState(profile.location);
    const [isUpdating, setIsUpdating] = useState(false);
    const [description, setDescription] = useState(profile.description);

    const submitForm = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        const updateProfile = {
            name,
            location,
            description,
            total_games: profile.total_games,
            total_sets: profile.total_sets,
            total_time: profile.total_time
        };

        try {
            const userDocRef = doc(db, 'users', id);
            await updateDoc(userDocRef, updateProfile);
            setProfile((prevProfile) => ({ ...prevProfile, ...updateProfile }));
            navigate("/");
            toast.success('Profile Updated Successfully');
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile. Please try again.");
        } finally {
            setIsUpdating(false);
        }
    }

    if (isUpdating) return <Spinner text={"Updating profile..."} />;

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Update Profile</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Input Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="Hype yourself up here"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Location
                            </label>
                            <input
                                type='text'
                                id='location'
                                name='location'
                                className='border rounded w-full py-2 px-3 mb-2'
                                placeholder='Your Location'
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default EditProfilePage;
