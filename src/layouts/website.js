import React from 'react'
import Carousel from '../components/website/carousel'
import './../assets/index.css'
import { API } from '../config'
import { Link } from 'react-router-dom'

const WebsiteLayout = (props) => {
    return (
        <div>
            {/* <header>
                <WebsiteNav />
            </header> */}
            <main>
                <Carousel />
                {/* Marketing messaging and featurettes
  ================================================== */}
                {/* Wrap the rest of the page in another container to center all the content. */}
                <div className="container marketing">
                    {/* Three columns of text below the carousel */}
                    <div className="row">
                        <div className="col-lg-4">
                           {/* <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                            <img src="https://media.canifa.com/catalog/product/cache_generated/500x/6ts21s009-sm360-2-thumb-.jpg" width="200px"/>
                            <p style={{color:"red", fontFamily: "Arial", fontSize:"25px", fontWeight:"bold", marginTop: 15}}>WOMAN</p>
                            {/* <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p> */}
                            <p><Link className="btn btn-primary" to="/woman">Chi tiết »</Link></p>
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4">
                            {/* <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                            <img src="https://media.canifa.com/catalog/product/cache_generated/500x/8ts21s013-sy047-2-thumb.jpg" width="200px"/>
                         
                            <p style={{color:"grey", fontFamily: "Arial", fontSize:"25px", fontWeight:"bold", marginTop: 15}}>MAN</p>
                            {/* <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p> */}
                            <p><Link className="btn btn-primary" to="/man">Chi tiết »</Link></p>
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4">
                            {/* <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                            <img src="https://media.canifa.com/catalog/product/cache_generated/500x/1tp21s002-sg260-1-thumb-.jpg" width="200px"/>
                         
                            <p style={{color:"orange", fontFamily: "Arial", fontSize:"25px", fontWeight:"bold", marginTop: 15}}>KID</p>
                            {/* <p>And lastly this, the third column of representative placeholder content.</p> */}
                            <p><Link className="btn btn-primary" to="/kid">Chi tiết »</Link></p>
                        </div>{/* /.col-lg-4 */}
                    </div>{/* /.row */}
                    {/* START THE FEATURETTES */}
                    <hr className="featurette-divider" />
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                        </div>
                        <div className="col-md-5">
                            <img src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2019/07/19/5df6fae4-a77a-11e9-8d5c-2d5b58977904_image_hires_134935.jpg?itok=vb6zZojT&v=1563515383" width="400px"/>
                            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img src="https://cdn.24h.com.vn/upload/2-2021/images/2021-06-06/1622946834-6fdf13f6ec88b5058ef784b687d7fbfb-width645height968.jpg" width="400px"/>
                            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                        </div>
                        <div className="col-md-5">
                        <img src="https://i.pinimg.com/originals/0c/aa/3f/0caa3f1b919ba1668d7ebd35455c614d.jpg" width="400px"/>
               {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    {/* /END THE FEATURETTES */}
                </div>{/* /.container */}
            </main>
        </div>



    )
}

export default WebsiteLayout
