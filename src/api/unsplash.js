import axios from "axios";

const access_key = process.env.UNSPLASH_API_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID r8HgWQe7VM_gxLRnW0VckFo-mkJmQQs0EBIk_sf90xA`,
  }
});