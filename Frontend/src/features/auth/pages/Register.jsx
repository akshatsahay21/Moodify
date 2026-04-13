// import React, { useState } from 'react'
// import "../style/register.scss"
// import FormGroup from '../components/FormGroup'
// import { Link } from 'react-router'
// import { useAuth } from '../hooks/useAuth'
// import { useNavigate } from 'react-router'

// const Register = () => {

//     const [ username, setUsername ] = useState("")
//     const [ email, setEmail ] = useState("")
//     const [ password, setPassword ] = useState("")

//     const navigate = useNavigate()

//     const { loading, handleRegister } = useAuth()

//     async function handleSubmit(e) {
//         e.preventDefault()

//         await handleRegister({ username, password, email })

//         navigate('/')

//     }

//     return (
//         <main className="register-page">
//             <div className="form-container">
//                 <h1>Register</h1>
//                 <form onSubmit={handleSubmit} >
//                     <FormGroup
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         label="Name" placeholder="Enter your name" />
//                     <FormGroup
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         label="Email" placeholder="Enter your email" />
//                     <FormGroup
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         label="Password" placeholder="Enter your password" />
//                     <button className='button' type="submit">Register</button>
//                 </form>
//                 <p>Already have an account? <Link to="/login">Login here</Link></p>
//             </div>
//         </main>
//     )
// }

// export default Register

import React, { useState } from 'react'
import "../style/register.scss"
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Register = () => {

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const navigate = useNavigate()
    const { loading, handleRegister } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        await handleRegister({ username, password, email })
        navigate('/')
    }

    return (
        <main className="register-page">
            <div className="form-container">
                <div className="page-brand">
                    <div className="brand-dot" />
                    <span>Moodify</span>
                </div>
                <h1>Create account</h1>
                <form onSubmit={handleSubmit}>
                    <FormGroup
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="Name"
                        placeholder="Your name"
                    />
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
                        {loading ? 'Creating account…' : 'Get started'}
                    </button>
                </form>
                <p className="auth-footer">
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </div>
        </main>
    )
}

export default Register