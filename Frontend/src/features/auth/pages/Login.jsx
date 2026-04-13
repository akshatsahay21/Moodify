// import React, { useState } from 'react'
// import "../style/login.scss"
// import FormGroup from '../components/FormGroup'
// import { Link } from 'react-router'
// import { useAuth } from '../hooks/useAuth'
// import { useNavigate } from 'react-router'

// const Login = () => {

//     const { loading, handleLogin } = useAuth()

//     const navigate = useNavigate()

//     const [ email, setEmail ] = useState("")
//     const [ password, setPassword ] = useState("")

//     async function handleSubmit(e) {
//         e.preventDefault()
//         await handleLogin({ email, password })
//         navigate("/")
//     }

//     return (
//         <main className="login-page">
//             <div className="form-container">
//                 <h1>Login</h1>
//                 <form onSubmit={handleSubmit} >
//                     <FormGroup
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         label="Email"
//                         placeholder="Enter your email"
//                     />
//                     <FormGroup
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         label="Password"
//                         placeholder="Enter your password"
//                     />
//                     <button className='button' type="submit">Login</button>
//                 </form>
//                 <p>Don't have an account? <Link to="/register">Register here</Link></p>
//             </div>
//         </main>
//     )
// }

// export default Login
import React, { useState } from 'react'
import "../style/login.scss"
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate("/")
    }

    return (
        <main className="login-page">
            <div className="form-container">
                <div className="page-brand">
                    <div className="brand-dot" />
                    <span>Moodify</span>
                </div>
                <h1>Welcome back</h1>
                <form onSubmit={handleSubmit}>
                    <FormGroup
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        placeholder="you@example.com"
                    />
                    <FormGroup
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        placeholder="••••••••"
                    />
                    <button className='button' type="submit" disabled={loading}>
                        {loading ? 'Signing in…' : 'Sign in'}
                    </button>
                </form>
                <p className="auth-footer">
                    Don't have an account? <Link to="/register">Create one</Link>
                </p>
            </div>
        </main>
    )
}

export default Login
