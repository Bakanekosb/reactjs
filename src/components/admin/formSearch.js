import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import productAPI from '../../api/productAPI';

const FormSearch = ({ onSearch }) => {
    const { register, handleSubmit } = useForm();
    let history = useHistory();
    const onSubmitSearch = async (keyword) => {
        console.log(keyword.keyword);

        const { data } = await productAPI.fullTextSearch(keyword);
        console.log(data);

        history.push("/admin/product/search" + keyword.keyword);
        onSearch(data);
    }
    return (
        
        <form className="d-flex" onSubmit={handleSubmit(onSubmitSearch)}>
            <input className="form-control form-control-dark w-100" type="search" placeholder="Search" aria-label="Search" {...register('keyword')} />
            <button classname="border border-blue-400 p-2 bg-blue-400" type="submit">Search</button>

        </form>
    
    )
}

export default FormSearch
