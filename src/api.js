import axios from "axios";

const searchImages = async ()=> {
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 0195lSK0lm6kyYFa8Yjptntl6pO8Sz6J-xRjAKOtQe0",
      },
      params: {
        query: "cars"
      }
    })
    return result

}

export default searchImages;

// axios.get('url', { headers: {}, params: {}})
// api takes time to travel to server and get back resault, use await to wait for your reasult
// await needs async..