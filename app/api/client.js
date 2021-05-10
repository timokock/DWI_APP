import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
    baseURL: 'http://192.168.0.7:9000/api',
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    // Before
    await get(url, params, axiosConfig);
    // After
};

export default apiClient;