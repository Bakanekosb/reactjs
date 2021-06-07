import { isAuthenticated } from './auth';
import { axiosClient } from './axiosClient';

const token = isAuthenticated();
const userAPI = {
    login(user) {
        const url = `/login`;
        return axiosClient.post(url, user);
    },
    signup(user) {
        const url = `/signup`;
        return axiosClient.post(url, user);
    },
    get(id) {
        const url = `/users/${id}`;
        return axiosClient.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    getAll() {
        const url = `/users`;
        return axiosClient.get(url);
    },
}
export default userAPI; 