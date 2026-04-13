// import { login, register, getMe, logout } from "../services/auth.api";
// import { useContext } from "react";
// import { AuthContext } from "../auth.context";
// import { useEffect } from "react";


// export const useAuth = () => {
//     const context = useContext(AuthContext)
//     const { user, setUser, loading, setLoading } = context

//     // async function handleRegister({ username, email, password }) {
//     //     setLoading(true)
//     //     const data = await register({ username, email, password })
//     //     setUser(data.user)
//     //     setLoading(false)
//     // }

//     async function handleRegister({ username, email, password }) {
//     setLoading(true)
//     try {
//         const data = await register({ username, email, password })
//         setUser(data.user)
//     } catch (err) {
//         console.error(err)
//     } finally {
//         setLoading(false)
//     }
// }
//     // async function handleLogin({ username, email, password }) {
//     //     setLoading(true)
//     //     const data = await login({ username, email, password })
//     //     setUser(data.user)
//     //     setLoading(false)
//     // }
//     async function handleLogin({ username, email, password }) {
//     setLoading(true)
//     try {
//         const data = await login({ username, email, password })
//         setUser(data.user)
//     } catch (err) {
//         console.error(err)
//     } finally {
//         setLoading(false)
//     }
// }

//     // async function handleGetMe() {
//     //     setLoading(true)
//     //     const data = await getMe()
//     //     setUser(data.user)
//     //     setLoading(false)
//     // }
//     async function handleGetMe() {
//     setLoading(true)
//     try {
//         const data = await getMe()
//         setUser(data.user)
//     } catch (err) {
//         // 401 means not logged in — that's fine, just leave user as null
//         setUser(null)
//     } finally {
//         setLoading(false)
//     }
// }

//     // async function handleLogout() {
//     //     setLoading(true)
//     //     const data = await logout()
//     //     setUser(null)
//     //     setLoading(false)
//     // }
//     async function handleLogout() {
//     setLoading(true)
//     try {
//         await logout()
//         setUser(null)
//     } catch (err) {
//         console.error(err)
//     } finally {
//         setLoading(false)
//     }
// }

//     useEffect(() => {
//         handleGetMe()
//     }, [])

//     return ({
//         user, loading, handleRegister, handleLogin, handleLogout, handleGetMe
//     })
// }

import { login, register, getMe, logout } from "../services/auth.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    async function handleRegister({ username, email, password }) {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            setUser(data.user)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    async function handleLogin({ username, email, password }) {
        setLoading(true)
        try {
            const data = await login({ username, email, password })
            setUser(data.user)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    async function handleGetMe() {
        setLoading(true)
        try {
            const data = await getMe()
            setUser(data.user)
        } catch (err) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    async function handleLogout() {
        setLoading(true)
        try {
            await logout()
            setUser(null)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // Call getMe directly, not handleGetMe — avoids re-render loop
        const fetchUser = async () => {
            setLoading(true)
            try {
                const data = await getMe()
                setUser(data.user)
            } catch {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, []) // empty deps — runs only once on mount

    return ({ user, loading, handleRegister, handleLogin, handleLogout, handleGetMe })
}