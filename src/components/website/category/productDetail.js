import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import productAPI from '../../../api/productAPI';

const ProductDetail = () => {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    useEffect(() => {
        async function getProuct() {
            try {
                const { data } = await productAPI.get(id); // 2
                setProduct(data);
            } catch (error) {
                console.log(error)
            }
        }
        getProuct();
    }, [])
    console.log(product)
    return (
        <div className="item_content">
            <div className="item_img">
                <img src={product.image} />
            </div>
            {/* end item_img */}
            <div className="item_infomation">
                <div className="back">
                    <button className="btn btn-primary" onClick={() => history.goBack()}> Go Back</button>
                </div>
                {/* end back */}
                <div className="item_name">
                    <h2 id="item_name">{product.name}</h2>
                </div>
                {/* end item name */}
                <div className="review">
                    <span><a href>Review(s)</a></span>
                    <a href>ADD A REVIEW</a>
                </div>
                {/* end user review */}
                <div className="list_price">
                    <span>$</span>
                    <span id="price">{product.price}</span>
                </div>
                {/* end item price */}
                <div className="item_status">
                    <div className="avail">
                        <span>Availability :</span>
                        <span id="instock">In stock</span>
                    </div>
                    <div className="code">
                        <span>Product Code :</span>
                        <span><a href>#3456</a></span>
                    </div>
                    <div className="tags">
                        <span>Tags :</span>
                        <span><a href>Fashion, </a></span>
                        <span><a href>Silk, </a></span>
                        <span><a href>Pyjama</a></span>
                    </div>
                </div>
                {/* end item status */}
                <div className="item_desc">
                    <p>Silk pajamas are the power suit of sleepwear, and make you feel elegant and confident. This set had the best fabric, lustrous silk that doesn’t need dry cleaning—and was beautifully made, right down to the notched piping detail on
                 the hem.</p>
                </div>
                {/* end item desc */}
                <div className="item_details">
                    <ul>
                        <li>New with tags</li>
                        <li>Regular fit</li>
                        <li>100% Silk</li>
                        <li>Free shipping with 4 days delivery</li>
                    </ul>
                </div>
                {/* end item details */}
                <div className="item_select">
                    <div className="color_select">
                        <label htmlFor>COLOR</label>
                        <div className="colorSelect">
                            <select name id="colorSelect" onchange="colorSelection(value)">
                                <option value={0}>Select Color</option>
                                <option value={1}>Rose</option>
                                <option value={2}>Navy</option>
                                <option value={3}>Pink</option>
                                <option value={4}>White</option>
                            </select>
                        </div>
                        <p className="error">* Please select a Color</p>
                    </div>
                    {/* end color select */}
                    <div className="size_select">
                        <label htmlFor>SIZE</label>
                        <div className="sizeSelect">
                            <select name id="sizeSelect" onchange="sizeSelection(value)">
                                <option value={0}>Select Size</option>
                                <option value={1}>S</option>
                                <option value={2}>M</option>
                                <option value={3}>L</option>
                                <option value={4}>XL</option>
                            </select>
                        </div>
                        <p className="error">* Please select a Size</p>
                    </div>
                    {/* end size select */}
                    <div className="qty_select">
                        <label htmlFor>QTY</label>
                        <input type="number" name id="qty_select" min={1} defaultValue={1} />
                        <p className="error">* Please select a valid QTY</p>
                    </div>
                    {/* end qty select */}
                </div>
                {/* end item select */}
                <div className="clear_select">
                    <button id="clear">CLEAR SELECTION</button>
                </div>
                {/* end clear select */}
                <div className="add_button">
                    <button id="cart">ADD TO CART</button>
                </div>
                {/* end add button */}
            </div>
        </div>

    )
}

export default ProductDetail
