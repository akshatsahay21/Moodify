// import React from 'react'
// import { useAuth } from '../hooks/useAuth'
// import { Navigate, useNavigate } from 'react-router'
// import { useEffect } from 'react'

// const Protected = ({ children }) => {

//     const {
//         user, loading
//     } = useAuth()
//     const navigate = useNavigate()

//     if (loading) {
//         return <h1>loading</h1>
//     }
    
//     if (!user) {
//         return <Navigate to="/login" />
//     }

//     return children
// }

// export default Protected

import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'

const Protected = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                gap: '1rem',
                background: '#0a0a0f'
            }}>
                <div style={{
                    width: '36px',
                    height: '36px',
                    border: '2px solid rgba(255,255,255,0.08)',
                    borderTop: '2px solid #f59e0b',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return children
}

export default Protected