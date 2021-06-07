import React from 'react'
import { Link } from 'react-router-dom';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "email": "",
            "password": ""

        }
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    login = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        urlencoded.append("email", this.state.email)
        urlencoded.append("password", this.state.password)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch('http://localhost:3008/login', requestOptions)
            .then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error(response.status)
                })
            .then(
                result => {
                    console.log(result)
                    localStorage.setItem("accessToken", result.accessToken)
                    window.alert("thanh cong")
                }
            ).catch(
                error => {
                    console.log('Lỗi', error)
                    console.log("logout thanh cong")
                }
            )
    }

    render() {
        return <div className="container" >
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div id="first">
                        <div className="myform form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Login</h1>
                                </div>
                            </div>
                            <form name="login" >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        onChange={this.setParams}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Password"
                                        onChange={this.setParams}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                                </div>
                                <div className="col-md-12 text-center ">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" onClick={this.login}>Login</button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or" />
                                        <span className="span-or">or</span>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <p className="text-center">
                                        <a href="javascript:void();" className="google btn mybtn"><i className="fa fa-google-plus">
                                        </i> Signup using Google</a>
                                    </p>
                                </div>
                                <div className="form-group">
                                    <p className="text-center">Don't have account? <Link to="/signup" id="signup">Sign up here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    }
}

