import React from 'react'
import { Link } from 'react-router-dom';

const NewArrival = (props) => {
    console.log(props.cat)
    return (
        <div className="products  mx-5">
            <hr className="featurette-divider" />
            <h3>Hàng mới về</h3>
            <div className="row mx-5">
                {props.products.filter((product) => {
                    console.log(product);
                    if (product.product_category == props.cat) {
                        return product
                    }
                }).reverse()
                    .map(function (item, index) {
                        if (index <= 3) {
                            return <div className="col-3 mt-4" key={index}>
                                <div className="card">
                                    <Link to={`/products/${item.id}`}> <img src={item.image} width="30px" className="card-img-top" />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="item-price">{item.price}</p>
                                        <Link to={`/products/${item.id}`}>Chi tiết
                            </Link>
                                    </div>
                                </div>

                            </div>
                        }
                    })}
            </div>
            <hr className="featurette-divider" />
        </div >
    )
}

export default NewArrival
