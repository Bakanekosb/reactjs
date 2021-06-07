import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FormSearch from './components/admin/formSearch';
import About from './components/website/about';
import WebsiteFooter from './components/website/footer';
import ManCollection from './components/website/man';
import ProductDetail from './components/website/category/productDetail';
import WebsiteNav from './components/website/nav';
import WomanCollection from './components/website/woman';
import AdminLayout from './layouts/admin';
import WebsiteLayout from './layouts/website';
import NotFoundPage from './pages/404';
import AdminCategoryPage from './pages/admin/category';
import AdminEmployeePage from './pages/admin/employee';
import AdminEmployeeAddPage from './pages/admin/employee/add';
import AdminEmployeeEditPage from './pages/admin/employee/edit';
import AdminOrderPage from './pages/admin/order';
import AdminProductPage from './pages/admin/product';
import AdminProductAddPage from './pages/admin/product/add';
import AdminProductEditPage from './pages/admin/product/edit';
import Login from './pages/website/loginForm';
import SignIn from './pages/website/signIn';
import SignUp from './pages/website/signUp';
import KidCollection from './components/website/category/kidProducts';

const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin" >
                    <AdminLayout>
                        <Switch>
                            {/* quan ly san pham */}
                            <Route exact path="/admin/product">
                                <AdminProductPage {...props} />
                            </Route>
                            <Route exact path="/admin/category/:id">
                                <AdminCategoryPage {...props} />
                            </Route>

                            <Route exact path="/admin/product/add">
                                <AdminProductAddPage {...props} />
                            </Route>
                            <Route exact path="/admin/product/search">sdfs
                                <FormSearch {...props} />
                            </Route>
                            <Route exact path="/admin/product/:id">
                                <AdminProductEditPage {...props} />
                            </Route>




                            {/* quan ly hoa don */}
                            <Route exact path="/admin/order">
                                <AdminOrderPage />
                            </Route>

                            {/* quan ly nhan vien */}
                            <Route exact path="/admin/employee">
                                <AdminEmployeePage {...props} />
                            </Route>
                            <Route exact path="/admin/employee/add">
                                <AdminEmployeeAddPage {...props} />
                            </Route>
                            <Route exact path="/admin/employee/:id">
                                <AdminEmployeeEditPage {...props} />
                            </Route>
                        </Switch>
                    </AdminLayout>
                </Route>
                
                <Route exact path="/login">
                    {/* <Login /> */}
                    <SignIn/>
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route path="/">
                    <WebsiteNav />

                    <Switch>
                        <Route exact path="/products/:id">
                            <ProductDetail {...props}/>
                        </Route>
                        <Route exact path="/man">
                            <ManCollection {...props}/>
                        </Route>
                        <Route exact path="/woman">
                            <WomanCollection {...props}/>
                        </Route>
                        <Route exact path="/kid">
                            <KidCollection {...props}/>
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/">
                            <WebsiteLayout {...props} />
                        </Route>
                    </Switch>

                    <WebsiteFooter />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers
