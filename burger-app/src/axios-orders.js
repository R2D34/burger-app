import axios from "axios";

const instance = axios.create({
  baseURL: "https://reacto-burrrrgerro.firebaseio.com/",
});

export default instance;
