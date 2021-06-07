import { React, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

const AdminProductAddPage = ({ onAddProduct }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const options = ['Nam', 'Nữ', 'Trẻ em']
    const [selectedOption, setSelectedOption] = useState("");
    let history = useHistory();
    const onSubmit = (data) => {
        console.log(data);
        console.log(selectedOption)
        onAddProduct(data, selectedOption);
        history.push('/admin/product');
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/product/" className="btn btn-primary">Back</Link>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <select className="custom-select"
                        // value={selectedOption}
                        onChange={(e) => {
                            const opt = e.target.value;
                            setSelectedOption(opt)
                        }
                        }
                        {...register('product_category')}
                    >
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Trẻ em">Trẻ em</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <div className="form-text text-danger">Bắt buộc nhập tên sản phẩm</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        {...register('price', { required: true })}
                    />
                    {errors.price && <div className="form-text text-danger">Bắt buộc nhập giá sản phẩm</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label">Số lượng</label>
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        {...register('quantity', { required: true })}
                    />
                    {errors.quantity && <div className="form-text text-danger">Bắt buộc nhập số lượng sản phẩm</div>}
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox"
                        className="form-check-input"
                        id="product-status"
                        {...register('status')}
                    />
                    <label className="form-check-label" htmlFor="product-status">Còn hàng</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AdminProductAddPage
