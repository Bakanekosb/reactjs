import { isAuthenticated } from './auth';
import { axiosClient } from './axiosClient';


const token = isAuthenticated();
const employeeAPI = {
    getAll() {
        const url = `/employees`;
        return axiosClient.get(url);
    },
    
    fullTextSearch({ keyword }) {
        const url = `/employees?q=${keyword}`;
        console.log(url);
        return axiosClient.get(url)
    },
    login(emp) {
        const url = `/login`;
        return axiosClient.post(url, emp);
    },
    get(id) {
        const url = `/660/employees/${id}`;
        return axiosClient.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
}

export default employeeAPI