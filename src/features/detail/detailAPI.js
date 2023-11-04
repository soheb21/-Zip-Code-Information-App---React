import axios from "axios"

export const fetchPostalDetails = async (postalCode) => {
    try {
        const response = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
        return response.data


    } catch (error) {
        if (error.response.status === 404) {
            return error;
        }

    }
}