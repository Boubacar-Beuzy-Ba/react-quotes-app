import axios from "axios"

export const getQuotes = async () => {
    const data = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        params: {
            'X-Api-Key': '2QXg9y9ZW9UrGQmAHRNe8g==Z9rDYNyplQP1upy4'
        }
    })
    return data;
}