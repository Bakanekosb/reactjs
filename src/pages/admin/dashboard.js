import React, { useEffect } from 'react'
import userAPI from '../../api/userAPI';
import { isAuthenticated, jwtDecode } from '../api/auth'


const AdminDashboard = () => {
    const { sub: id } = jwtDecode(isAuthenticated());
    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await userAPI.get(id);
                console.log(data);
            } catch (error) {

            }
        }
        getUser();
    })
    return (
        <>
            Admin Dashboard
        </>
    )

}
export default AdminDashboard 
