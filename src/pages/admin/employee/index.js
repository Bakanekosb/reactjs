import React from 'react'
import { Link } from 'react-router-dom'


const AdminEmployeePage = (props) => {
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý nhân viên</h1>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/employee/add" className="btn btn-primary">Thêm nhân viên</Link>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{employee.name}</td>
                                <td><img src={employee.image} height="30px" /></td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.status ? 'Active' : 'In-active'}</td>
                                <th>
                                    <Link to={`/admin/employee/${employee.id}`}
                                        className="btn btn-primary">Edit</Link>
                                    <button onClick={()=> props.onRemove(employee.id)} className="btn btn-danger">Delete</button>
                                </th>
                            </tr>
                            )
                        )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminEmployeePage
