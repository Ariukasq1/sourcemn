import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

const config = {
  apiUrl: "https://source.mn/wp/wp-json",
  menuUrl: "https://source.mn/wp/wp-json/menus/v1/menus",
};

export default config;
