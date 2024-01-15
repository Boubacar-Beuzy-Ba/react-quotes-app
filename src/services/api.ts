import axios from "axios"

export interface Category {
  category: string;
}

export const getQuotes = async () => {
  const apiKey = import.meta.env.VITE_X_API_KEY;
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