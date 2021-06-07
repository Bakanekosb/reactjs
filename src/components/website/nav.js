import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const WebsiteNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div className="container px-0 px-lg-1">
                    <NavLink className="navbar-brand" to="/">Shopping Online</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/man">Man</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/woman">Woman</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/kid">Kid</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1" />
                                Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </button>
                            <Link to="/login" className="btn btn-primary"
                                style={{ marginLeft: 20 }}
                            >Login</Link>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default WebsiteNav
