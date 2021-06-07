import React, { useState, useEffect, reset } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';

const AdminProductEditPage = ({ onEditProduct }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedOption, setSelectedOption] = useState("");
    let history = useHistory();
    let { id } = useParams();
    console.log(id)

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3008/products/${id}`);
                const data = await response.json();
                setProduct(data);
                reset(data);
            } catch (error) {
                console.log(error)
            }
        };
        getProduct();
    }, []);

    const onSubmit = (data) => {
        const newData = {
            id: id,
            ...data
        }
        onEditProduct(newData);
        history.push('/admin/product');
    }

    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2"> Sửa sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/product/" className="btn btn-primary">Back</Link>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                    <select className="custom-select"
                        defaultValue={product.product_category}
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
                        defaultValue={product.name}
                        {...register('name', { required: true })}
                    />
                    {errors.name && <div className="form-text text-danger">Bắt buộc nhập tên sản phẩm</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá sản phẩm</label>
                    <input type="number"
                        className="form-control"
                        id="product-price"
                        defaultValue={product.price}
                        {...register('price', { required: true })}
                    />
                    {errors.price && <div className="form-text text-danger">Bắt buộc nhập giá sản phẩm</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="product-image" className="form-label">Hình ảnh</label>
                    <input type="text"
                        className="form-control"
                        id="product-image"
                        defaultValue={product.image}
                        {...register('image')}
                    />                   
                </div>

                <div className="mb-3">
                    <label htmlFor="product-quantity" className="form-label">Số lượng</label>
                    <input type="number"
                        className="form-control"
                        id="product-quantity"
                        defaultValue={product.quantity}
                        {...register('quantity', { required: true })}
                    />
                    {errors.quantity && <div className="form-text text-danger">Bắt buộc nhập số lượng sản phẩm</div>}
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox"
                        className="form-check-input"
                        id="product-status"
                        defaultChecked={product.status}
                        {...register('status')}
                    />
                    <label className="form-check-label" htmlFor="product-status">Còn hàng</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default AdminProductEditPage
