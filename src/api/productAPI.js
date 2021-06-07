import { axiosClient } from './axiosClient';

const productAPI = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    fullTextSearch({ keyword }) {
        const url = `/products?q=${keyword}`;
        console.log(url);
        return axiosClient.get(url)
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
}

export default productAPI
