import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '923e956cfa4f44b48c50bf6eb5cf383a'
    }
}) 