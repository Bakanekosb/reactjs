import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const AdminCategoryPage = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    let { id } = useParams();
    console.log(id)
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <form className="d-flex">
                    <input className="form-control form-control-dark w-100"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }
                        }
                    />
                    <button classname="border border-blue-400 p-2 bg-blue-400" type="submit">Search</button>

                </form>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/product/add" className="btn btn-primary">Add product</Link>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.filter((x)=>{
                            console.log(id)
                            if(x.product_category == "Nam" && id == "man"){
                                return x
                            }
                            else if(x.product_category == "Nữ" && id == "woman"){
                                return x
                            }
                            else  if(x.product_category == "Trẻ em" && id == "child"){
                                return x
                            }
                        })
                        
                        .filter((product)=>{
                            console.log(typeof(searchTerm))                            
                            if(searchTerm==""){
                                return product
                            }
                            else if(product.name.toLowerCase().includes(searchTerm.toLowerCase())){ 
                                console.log(`product name: ${product.name}, type: ${typeof(product.name)}`)                            
                                return product
                            }
                        }).map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.product_category}</td>
                                <td><img src={product.image} height="30px" /></td>
                                <td>{product.price}</td>
                                <td>{product.status ? 'In stock' : 'Out stock'}</td>
                                <td>{product.quantity}</td>
                                <th>
                                    <Link to={`/admin/product/${product.id}`}
                                        className="btn btn-primary">Edit</Link>
                                    <button onClick={() => props.onRemoveProduct(product.id)} className="btn btn-danger">Delete</button>
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

export default AdminCategoryPage
