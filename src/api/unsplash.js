import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID r8HgWQe7VM_gxLRnW0VckFo-mkJmQQs0EBIk_sf90xA`,
  }
});
