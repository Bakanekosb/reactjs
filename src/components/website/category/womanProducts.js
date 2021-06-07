import React from 'react'
import { Link } from 'react-router-dom'
import NewArrival from './newArrival';

const WomanProducts = (props) => {
    window.scrollTo(0, 0);
    const cat = "Nữ"
    return (
        <div className="products  mx-5">
            <h1 style={{textAlign:"center", fontWeight:"bolder"}}>THỜI TRANG NỮ</h1>
            <NewArrival {...props} cat={cat} />
            <div className="row">
                {props.products.filter((product) => {
                    console.log(product);
                    if (product.product_category == "Nữ") {
                        return product
                    }
                }).reverse()
                    .map(function (item, index) {
                        return <div className="col-2 mt-4" key={index}>
                            <div className="card">
                                <Link to={`/products/${item.id}`}> <img src={item.image} width="30px" className="card-img-top" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="item-price">{item.status ? item.price : "Out stock"}</p>
                                    <Link to={`/products/${item.id}`}>Chi tiết
                                </Link>
                                </div>
                            </div>

                        </div>
                    })}
            </div>
        </div >
    )
}

export default WomanProducts
