import axios from "axios"

export const fetchPostalDetails = async (postalCode) => {
    try {
        const response = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
        return response

    } catch (error) {
        if (error) {
            return error.response.status
        }
    }
}