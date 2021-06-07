import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import { authenticate, isAuthenticated, jwtDecode } from '../../api/auth';
import userAPI from '../../api/userAPI';
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [refer, setRefer] = useState(false);

    const onSubmit = async data => {
        console.log(data)
        try {
            const { data: { accessToken } } = await userAPI.login(data);
            authenticate(accessToken);
            setRefer(true);
            window.alert("dang nhap thanh cong")
        } catch (error) {
            window.alert("dang nhap khong thanh cong")
            console.log(error.response.data)
        }

    }

    const userRedirect = () => {
        if (refer) {
            const { sub } = jwtDecode(isAuthenticated());
            console.log(sub);
            console.log(isAuthenticated());
            return <Redirect to="/admin/" />
            // if (userAPI.get(sub).user.role === 0) {
            //     return <Redirect to="/admin/" />
            // } else {
            //     return <Redirect to="/" />
            // }
        }
        else {
            console.log("sai lung tung")
        }
    }


    return (
        <>
            {userRedirect()}
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div id="first">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Login</h1>
                                    </div>
                                </div>
                                <form name="login" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            {...register('email', { required: true })}
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
                                            {...register('password', { required: true })}
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                                    </div>
                                    <div className="col-md-12 text-center ">
                                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
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
        </>

    )
}

export default Login
