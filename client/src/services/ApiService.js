const axios = require("axios");

export default {
    getMachinesData() {
        return axios.get("http://localhost:3000/data");
    }
}
