import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const db = getFirestore();

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const signIn = async () => {
            try {
                const userCredential = await signInAnonymously(auth);
                setUser(userCredential.user);
            } catch (error) {
                console.error("Error signing in anonymously:", error);
            }
        };

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                await fetchUserProfile(currentUser.uid);
            } else {
                setUser(null);
                setProfile(null);
            }

            setLoading(false);
        });

        const existingUser = auth.currentUser;
        if (!existingUser) {
            signIn();
        } else {
            setLoading(false);
        }

        return () => unsubscribe();
    }, []);

    const fetchUserProfile = async (uid) => {
        const userDocRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            setProfile(userData);
        } else {
            const userProfileData = {
                createdAt: new Date(),
                name: "Anonymous User",
                location: "Unknown",
                description: "The beginnings of your legendary journey",
                total_games: 0,
                total_sets: 0,
            };
            await setDoc(userDocRef, userProfileData, { merge: true });
            setProfile(userProfileData);
        }
    };

    return { user, loading, profile, setProfile };
};

export default useAuth;
