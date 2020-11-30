/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

   const getDate = () => {
       let date = new Date();
      return date.getFullYear();
    }
    return (
        <footer id="footer" className="bottom_scroll">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <h4>Bounty Theme</h4>
                        <p>
                            Bounty Theme is a simple blog template created by
                            <a href="victornwakwue.online"
                            >victor nwakwue</a
                            >, With beautiful typography and the aundance of space for large
                            scale images and gallaries.
                        </p>
                                       
                        <div className="social-icon">
                            <a href="https://www.facebook.com/">
                                <i className="fa fa-facebook-square mr-3"></i>
                            </a>
                            <a href="https://twitter.com/">
                                <i className="fa fa-twitter-square mr-3"></i>
                            </a>
                            <a href="https://twitter.com/">
                                <i className="fa fa-linkedin-square mr-3"></i>
                            </a>
                            <a href="https://instagram.com/">
                                <i className="fa fa-instagram mr-3"></i>
                            </a>
                            <a href="https://twitter.com">
                                <i className="fa fa-pinterest-square mr-3"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h4>Quick Links</h4>
                        
                        <div className="footer-menu">
                            <Link to="/">Home</Link>
                            <Link to="/entertainment">Entertainment</Link>
                            <Link to="/sports">Sports</Link>
                            <Link to="/health">Health</Link>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="copy-right">
                <p>Bounty Theme; copyright &copy; {getDate()} | By <a href="https://victornwakwue.netlify.app/">Victor Nwakwue</a> </p>
            </div>
        </footer>
    )
}

export default Footer
