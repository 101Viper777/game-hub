import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "d96c1e0c563a4b28b3134c7359eb2a14",
  },
});
