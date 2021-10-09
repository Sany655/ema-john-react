import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const signinUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        signOut(auth)
        .then(res=>setUser({}))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                setUser(result)
            }
        })
    }, [])

    return {
        user,
        signinUsingGoogle,
        logout
    }
};

export default useFirebase;