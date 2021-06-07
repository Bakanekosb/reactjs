import React from 'react'
import {API_IMG} from '../../config' 

const WebsiteFooter = () => {
    return (
        <div>
            <div className="footer">

                {/* end footer-logo */}
                <div className="footer-content">
                    <div className="footer-body">
                        <div className="contact">
                            <div className="footer-header">
                                <h4>CONTACT</h4>
                            </div>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-img">
                                        <img src="http://localhost:3000/i/location.png"/>
                                    </div>
                                    <div className="contact-info">
                                        <span>0123 Main Road, Your City, NY 123456</span>
                                    </div>
                                </div>
                                {/* end contact-item */}
                                <div className="contact-item">
                                    <div className="contact-img">
                                        <img src="http://localhost:3000/i/phone.png" alt />
                                    </div>
                                    <div className="contact-info">
                                        <span>(000) 2345 - 6789</span>
                                    </div>
                                </div>
                                {/* end contact-item */}
                                <div className="contact-item">
                                    <div className="contact-img">
                                        <img src="http://localhost:3000/i/email.png" alt />
                                    </div>
                                    <div className="contact-info">
                                        <span>info@psdfreebies.com</span>
                                    </div>
                                </div>
                                {/* end contact-item */}
                            </div>
                        </div>
                        {/* end contact */}
                        <div className="information">
                            <div className="footer-header">
                                <h4>INFORMATION</h4>
                            </div>
                            <div className="info-content">
                                <p><a href>Our Story</a></p>
                                <p><a href>Privacy &amp; Policy</a></p>
                                <p><a href>Terms &amp; Conditions</a></p>
                                <p><a href>Shipping &amp; Delivery</a></p>
                                <p><a href>Careers</a></p>
                                <p><a href>FAQs</a></p>
                            </div>
                        </div>
                        {/* end information */}
                        <div className="social">
                            <div className="footer-header">
                                <h4>OUR SOCIAL</h4>
                            </div>
                            <div className="social-content">
                                <div className="social1">
                                    <div className="social-item">
                                        <div className="social-img">
                                            <a href><img src="http://localhost:3000/i/ag+.png" alt /></a>
                                        </div>
                                        <div className="social-desc">
                                            <a href>Google+</a>
                                        </div>
                                    </div>
                                    {/* end social-item */}
                                    <div className="social-item">
                                        <div className="social-img">
                                            <a href><img src="http://localhost:3000/i/aPinterest.png" alt /></a>
                                        </div>
                                        <div className="social-desc">
                                            <a href>Pinterest</a>
                                        </div>
                                    </div>
                                    {/* end social-item */}
                                </div>
                                {/* end social1 */}
                                <div className="social2">
                                    <div className="social-item">
                                        <div className="social-img">
                                            <a href><img src="http://localhost:3000/i/aFacebook.png" alt /></a>
                                        </div>
                                        <div className="social-desc">
                                            <a href>Facebook</a>
                                        </div>
                                    </div>
                                    {/* end social-item */}
                                    <div className="social-item">
                                        <div className="social-img">
                                            <a href><img src="http://localhost:3000/i/aTwitter.png" alt /></a>
                                        </div>
                                        <div className="social-desc">
                                            <a href>Twitter</a>
                                        </div>
                                    </div>
                                    {/* end social-item */}
                                </div>
                                {/* end social2 */}
                                <div className="social3">
                                    <div className="social-item">
                                        <div className="social-img">
                                            <a href><img src="http://localhost:3000/i/aVimeo.png" alt /></a>
                                        </div>
                                        <div className="social-desc">
                                            <a href>Vimeo</a>
                                        </div>
                                    </div>
                                    {/* end social-item */}
                                    <div className="social-item">
                                        <div className="social-img">
                                            <a href><img src="http://localhost:3000/i/aInstagram.png" alt /></a>
                                        </div>
                                        <div className="social-desc">
                                            <a href>Instagram</a>
                                        </div>
                                    </div>
                                    {/* end social-item */}
                                </div>
                                {/* end social3 */}
                                <div className="social4">
                                    <div className="social-item">
                                        <div className="social-img">
                                            <a href><img src="http://localhost:3000/i/aRSS.png" alt /></a>
                                        </div>
                                        <div className="social-desc">
                                            <a href>RSS</a>
                                        </div>
                                    </div>
                                    {/* end social-item */}
                                    <div className="social-item">
                                        <div className="social-img">
                                            <a href><img src="http://localhost:3000/i/aYoutube.png" alt /></a>
                                        </div>
                                        <div className="social-desc">
                                            <a href>Youtube</a>
                                        </div>
                                    </div>
                                    {/* end social-item */}
                                </div>
                                {/* end social4 */}
                            </div>
                        </div>
                        {/* end social */}
                        <div className="time-payment">
                            <div className="time">
                                <div className="footer-header">
                                    <h4>OPENING TIME</h4>
                                </div>
                                <div className="time-content">
                                    <div className="time-img">
                                        <img src="http://localhost:3000/i/time.png" alt />
                                    </div>
                                    <div className="time-desc">
                                        <p>Monday - Friday: 08:30 am - 09:30 pm</p>
                                        <p>Sat - Sun: 09:00 am - 10:00 pm</p>
                                    </div>
                                </div>
                            </div>
                            {/* end time */}
                            <div className="payment">
                                <div className="footer-header">
                                    <h4>PAYMENT OPTION</h4>
                                </div>
                                <div className="payment-desc">
                                    <div className="payment-top">
                                        <div className="payment-img">
                                            <a href><img src="http://localhost:3000/i/masterCard.png" alt /></a>
                                            <a href><img src="http://localhost:3000/i/discover.png" alt /></a>
                                            <a href><img src="http://localhost:3000/i/americanExpress.png" alt /></a>
                                            <a href><img src="http://localhost:3000/i/visa.png" alt /></a>
                                        </div>
                                    </div>
                                    {/* payment-top */}
                                    <div className="payment-bottom">
                                        <div className="payment-img">
                                            <a href><img src="http://localhost:3000/i/stripe.png" alt /></a>
                                            <a href><img src="http://localhost:3000/i/wthCard.png" alt /></a>
                                            <a href><img src="http://localhost:3000/i/jcb.png" alt /></a>
                                            <img src alt />
                                        </div>
                                    </div>
                                    {/* payment-bottom */}
                                </div>
                            </div>
                            {/* end payment */}
                        </div>
                        {/* end time-payment */}
                    </div>
                    {/* end footer-body */}
                </div>
                {/* end footer-content */}
                <div className="footer-end">

                    <div className="footer-copyright">
                        <span>© 2016 PSDFreebies.com | All Rights Reserved</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WebsiteFooter
