import axios from 'axios';

export const publicAPI = axios.create({
    baseURL: 'https://bookme.modernvet.com/api/v1/public',
    headers: {
        "Content-Type": "application/json",
        timeout: 1000,
    },
});
export const ezyvetPrivateAPI = axios.create({
    baseURL: `https://bookme.modernvet.com/api/v1/ezyvet`,
    headers: {
        //  Authorization: `Auth Token`,
        "Content-Type": "application/json",
        "x-user-type": "CLIENT",
        timeout: 1000,
    },
});
export const privateAPI = axios.create({
    baseURL: `https://bookme.modernvet.com/api/v1`,
    headers: {
        "Content-Type": "application/json",
        "x-user-type": "CLIENT",
        timeout: 1000,
    },
});

// export default publicAPI;