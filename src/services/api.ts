import axios from "axios"

export interface Category {
  category: string;
}

export const getQuotes = async () => {
  const apiKey = "2QXg9y9ZW9UrGQmAHRNe8g==Z9rDYNyplQP1upy4";
  const data = await axios.get(
    "https://api.api-ninjas.com/v1/quotes?category=happiness",
    {
      params: {
        "X-Api-Key": apiKey,
      },
    }
  );
  return data;
};