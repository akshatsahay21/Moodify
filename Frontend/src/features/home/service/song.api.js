import axios from "axios";


// const api = axios.create({
//     baseURL: "http://localhost:3000",
//     withCredentials: true
// })
const api = axios.create({
    baseURL: "https://moodify-1rci.onrender.com",
    withCredentials: true
})


export async function getSong({ mood }) {
    const response = await api.get("/api/songs?mood=" + mood)
    console.log(response)
    return response.data
}