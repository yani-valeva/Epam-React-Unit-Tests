import axios from "axios";

// const url = "https://api.jikan.moe/v3/top/anime/1/upcoming";
const serverUrl = "https://jsonplaceholder.typicode.com/photos";

export const getData = async () => {
  const result = await axios
    .get(serverUrl)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Error getting data: ${response.statusText}`);
      }
      return { items: response.data, error: null };
    })
    .catch(err => {
      return { items: [], error: err.message };
    });
  return result;
};
