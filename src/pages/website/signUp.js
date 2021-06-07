import React from 'react'
import { useForm} from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import userAPI from '../../api/userAPI';
import { useState, useEffect  } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {    
    let history = useHistory();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            role: "0"
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
        }),
        onSubmit: data => {
            userAPI.signup(data);
            window.alert("Đăng ký thành công, xin mời đăng nhập")
            history.push("/login")
          }
    });

    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     const getUsers = async () => {
    //         try {
    //             const { data } = await userAPI.getAll();
    //             setUsers(data);
    //         } catch (error) {

    //         }
    //     }
    //     getUsers();
    // }, []);

   

    // const onSubmit = data => {
    //     console.log(data)
    //     users.map(user => (user.email == data.email ? console.log("email da ton tai") : userAPI.signup(data)))

    // }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div id="second">
                        <div className="myform form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Signup</h1>
                                </div>
                            </div>
                            <form name="registration" onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Your Name</label>
                                    <input type="text" name="name"
                                        className="form-control"
                                        id="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        // {...register('name')}
                                        aria-describedby="emailHelp" placeholder="Enter your name" />
                                    {formik.errors.name && formik.touched.name && (
                                        <p className="form-text text-danger">{formik.errors.name}</p>
                                    )}
                                </div>

                                <div className="form-group mt-3">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        // {...register('email')}
                                        aria-describedby="emailHelp" placeholder="Enter email" />
                                    {formik.errors.email && formik.touched.email && (
                                        <p className="form-text text-danger">{formik.errors.email}</p>
                                    )}
                                </div>

                                <div className="form-group mt-3">
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        // {...register('password')}
                                        className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                    {formik.errors.password && formik.touched.password && (
                                        <p className="form-text text-danger">{formik.errors.password}</p>
                                    )}
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="exampleInputEmail1">Confirm password</label>
                                    <input type="password"
                                        name="confirm_password"
                                        id="confirm_password"
                                        value={formik.values.confirm_password}
                                        onChange={formik.handleChange}
                                        className="form-control" aria-describedby="emailHelp" placeholder="Enter Confirm password" />
                                    {formik.errors.confirm_password && formik.touched.confirm_password && (
                                        <p className="form-text text-danger">{formik.errors.confirm_password}</p>
                                    )}
                                </div>
                                <div className="col-md-12 text-center mb-3">
                                    <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm mt-3">Get Started For Free</button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="form-group">
                                        <p className="text-center"><Link to="/login" id="signin">Already have an account?</Link></p>
                                    </div>
                                </div>
                            </form></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
