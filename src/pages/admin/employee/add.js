import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

const AdminEmployeeAddPage = ({ onAddEmployee }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const onSubmit = (data) => {
        console.log(data);
        onAddEmployee(data);
        history.push('/admin/employee');
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm nhân viên</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/employee/" className="btn btn-primary">Back</Link>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="employee-name" className="form-label">Tên nhân viên</label>
                    <input type="text"
                        className="form-control"
                        id="employee-name"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <div className="form-text text-danger">Bắt buộc nhập tên nhân viên</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="employee-phone" className="form-label">Số điện thoại</label>
                    <input type="text"
                        className="form-control"
                        id="employee-phone"
                        {...register('phone', { required: true })}
                    />
                    {errors.phone && <div className="form-text text-danger">Bắt buộc nhập số điện thoại</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="employee-email" className="form-label">Email</label>
                    <input type="text"
                        className="form-control"
                        id="employee-email"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <div className="form-text text-danger">Bắt buộc nhập Email</div>}
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" 
                    type="radio" 
                    name="flexRadioDefault" 
                    id="male"
                    value="Nam"
                    defaultChecked 
                    {...register('gender')}
                    />
                    <label className="form-check-label" htmlFor="male">
                        Nam
                         </label>
                </div>
                <div className="form-check form-check-inline" >
                    <input className="form-check-input checkbox" 
                    type="radio" 
                    name="flexRadioDefault" 
                    id="female" 
                    value="Nữ"
                    {...register('gender')}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Nữ
                         </label>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox"
                        className="form-check-input"
                        id="employee-status"
                        {...register('status')}
                    />
                    <label className="form-check-label" htmlFor="employee-status">Hoạt động</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AdminEmployeeAddPage
