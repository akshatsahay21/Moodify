import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [ song, setSong ] = useState({
        "url": "https://ik.imagekit.io/xig2klow2/cohort-2/moodify/songs/Chaleya_-_PagalNew_triKWbgff.mp3",
        "posterUrl": "https://ik.imagekit.io/xig2klow2/cohort-2/moodify/posters/Chaleya_-_PagalNew_Lkygyo6O5.jpeg",
        "title": "Chaleya - PagalNew",
        "mood": "happy",
    })

    const [ loading, setLoading ] = useState(false)

    return (
        <SongContext.Provider
            value={{ loading, setLoading, song, setSong }}
        >
            {children}
        </SongContext.Provider>
    )

}