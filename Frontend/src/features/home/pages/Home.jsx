// import React from 'react'
// import FaceExpression from '../../Expression/components/FaceExpression'
// import Player from '../components/Player'
// import { useSong } from '../hooks/useSong'

// const Home = () => {

//     const { handleGetSong } = useSong()

//     return (
//         <>
//             <FaceExpression
//                 onClick={(expression) => { handleGetSong({ mood: expression }) }}
//             />
//             <Player />
//         </>
//     )
// }

// export default Home
// import React from 'react'
// import FaceExpression from '../../Expression/components/FaceExpression'
// import Player from '../components/Player'
// import { useSong } from '../hooks/useSong'
// import { useAuth } from '../../auth/hooks/useAuth'
// // import './home.scss'
// import './home.scss'

// const Home = () => {
//     const { handleGetSong, loading, song } = useSong()
//     const { user, handleLogout } = useAuth()

//     return (
//         <div className="home">
//             {/* Header */}
//             <header className="home__header">
//                 <div className="home__brand">
//                     <div className="home__brand-dot" />
//                     <span className="home__brand-name">Moodify</span>
//                 </div>
//                 <div className="home__user">
//                     {user && (
//                         <>
//                             <span className="home__user-name">Hey, {user.username || user.email}</span>
//                             <button className="home__logout" onClick={handleLogout}>
//                                 Sign out
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </header>

//             {/* Main content */}
//             <main className="home__main">
//                 <div className="home__hero">
//                     <p className="home__eyebrow">AI-powered music for your mood</p>
//                     <h1 className="home__title">
//                         How are you <br />
//                         <span className="home__title-accent">feeling today?</span>
//                     </h1>
//                     <p className="home__subtitle">
//                         Let your camera read your expression and we'll find the perfect track.
//                     </p>
//                 </div>

//                 <div className="home__camera-section">
//                     <FaceExpression
//                         onClick={(expression) => { handleGetSong({ mood: expression }) }}
//                     />

//                     {loading && (
//                         <div className="home__finding">
//                             <div className="home__finding-dot" />
//                             <span>Finding your song…</span>
//                         </div>
//                     )}
//                 </div>
//             </main>

//             {/* Player sits fixed at bottom */}
//             <Player />
//         </div>
//     )
// }

// export default Home
import React, { useCallback } from 'react'
import FaceExpression from '../../Expression/components/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hooks/useSong'
import { useAuth } from '../../auth/hooks/useAuth'
import './home.scss'

const Home = () => {
    const { handleGetSong, loading, song } = useSong()
    const { user, handleLogout } = useAuth()

    const handleExpression = useCallback((expression) => {
        handleGetSong({ mood: expression })
    }, []) // empty deps — handleGetSong reference is stable enough

    return (
        <div className="home">
            <header className="home__header">
                <div className="home__brand">
                    <div className="home__brand-dot" />
                    <span className="home__brand-name">Moodify</span>
                </div>
                <div className="home__user">
                    {user && (
                        <>
                            <span className="home__user-name">Hey, {user.username || user.email}</span>
                            <button className="home__logout" onClick={handleLogout}>Sign out</button>
                        </>
                    )}
                </div>
            </header>

            <main className="home__main">
                <div className="home__hero">
                    <p className="home__eyebrow">AI-powered music for your mood</p>
                    <h1 className="home__title">
                        How are you <br />
                        <span className="home__title-accent">feeling today?</span>
                    </h1>
                    <p className="home__subtitle">
                        Let your camera read your expression and we'll find the perfect track.
                    </p>
                </div>

                <div className="home__camera-section">
                    <FaceExpression onClick={handleExpression} />

                    {loading && (
                        <div className="home__finding">
                            <div className="home__finding-dot" />
                            <span>Finding your song…</span>
                        </div>
                    )}
                </div>
            </main>

            <Player />
        </div>
    )
}

export default Home