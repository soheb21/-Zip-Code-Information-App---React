import axios from "axios"

export const fetchPostalDetails = async (postalCode) => {
    try {
        const response = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
        if (response.data) {
            return response.data
        }
    } catch (error) {
        console.log("Server error", error)
    }
}