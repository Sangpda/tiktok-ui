import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (patch, options = {}) => {
    const res = await httpRequest.get(patch, options);
    return res.data;
};

export default httpRequest;
