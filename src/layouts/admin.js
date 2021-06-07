import React, { useEffect } from 'react'
import AdminHeader from '../components/admin/header'
import AdminNav from '../components/admin/nav'
import './../assets/dashboard.css'
import { isAuthenticated, jwtDecode } from '../api/auth'
import userAPI from '../api/userAPI';

const AdminLayout = ({ children }) => {
    const { sub: id } = jwtDecode(isAuthenticated());
    console.log(id)
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
        <div>
            <AdminHeader />
            <div className="container-fluid">
                <div className="row">
                    <AdminNav />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
        </div>

    )
}

export default AdminLayout
