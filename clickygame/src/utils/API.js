import axios from "axios";
const BASEURL = "https://dog.ceo/api/breeds/image/random/12";

export default {
    getPhotos: function() {
        return axios.get(BASEURL);
    }
};