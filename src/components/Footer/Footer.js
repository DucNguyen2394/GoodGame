import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-lg-4 animate__animated animate__fadeInLeft wow" data-wow-delay="0.5s">
                            <div className="footer-top-about">
                                <div className="footer-top-title text-uppercase">about
                                    <span className="title"> us</span>
                                </div>
                                <div class="footer-text mt-4">
                                    Development began in 2021 and lasted for three and a half years. 
                                    we are people who are extremely dedicated to the profession.
                                </div>
                                <div className="footer-menu row d-flex mt-4">
                                    <ul className="footer-menu-ul col-6">
                                        <li className="footer-menu-list">
                                            <i class="fas fa-caret-right"></i>
                                            <a> Home</a>
                                        </li>
                                        <li className="footer-menu-list">
                                            <i class="fas fa-caret-right"></i>
                                            <a> Games</a>
                                        </li>
                                        <li className="footer-menu-list">
                                            <i class="fas fa-caret-right"></i>  
                                            <a> Team </a>
                                        </li>
                                        <li className="footer-menu-list">
                                            <i class="fas fa-caret-right"></i>
                                            <a> Esport</a>
                                        </li>
                                    </ul>
                                    <ul className="footer-menu-ul col-6">
                                        <li className="footer-menu-list">
                                            <i class="fas fa-caret-right"></i>
                                            <a> Blog </a>
                                        </li>
                                        <li className="footer-menu-list">
                                            <i class="fas fa-caret-right"></i>
                                            <a> About</a> About
                                        </li>
                                        <li className="footer-menu-list">
                                            <i class="fas fa-caret-right"></i>
                                            <a> Community</a>
                                        </li>
                                        <li className="footer-menu-list">
                                            <i class="fas fa-caret-right"></i>
                                            <a> Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 animate__animated animate__zoomIn wow" data-wow-delay="0.5s">
                            <div className="footer-top-news">
                                <div className="footer-top-title text-uppercase">lastest
                                    <span className="title"> news</span>
                                </div>                               
                                <div className="footer-img">
                                    <a className="footer-img-link" href="#">
                                        <img src="img/footer-witcher.jpg"></img>

                                        <div className="footer-text">
                                            This is the Witcher
                                            <i class="far fa-clock"> December 23,2021</i>                                             
                                        </div>
                                    </a>
                                </div>
                                <div className="footer-img">
                                    <a className="footer-img-link" href="#">
                                        <img src="img/footer-valhalla.jpg"></img>
                                        <div className="footer-text">
                                            This is Assasin Creed Valhalla
                                            <i class="far fa-clock"> December 23,2021</i>
                                        </div>
                                    </a>
                                </div>
                                <div className="footer-img">
                                    <a className="footer-img-link" href="#">
                                        <img src="img/footer-reddead.jpg"></img>
                                        <div className="footer-text">
                                            This is Red Dead Redemtion 
                                            <i class="far fa-clock"> December 23,2021</i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 animate__animated animate__fadeInRight wow" data-wow-delay="0.5s">
                            <div className="footer-top-contact">
                                <div className="footer-top-title text-uppercase">contact
                                    <span className="title"> us</span>
                                </div>
                                <div className="footer-contact">
                                    <i class="fas fa-map-marker-check">
                                        <span className="contact-title">   King of HaDong</span>
                                    </i>
                                    <i class="fas fa-envelope">
                                        <span className="contact-title">   Goodgame@gmail.com</span>
                                    </i>
                                    <i class="fas fa-phone">
                                        <span className="contact-title">   +84 232.4808</span>
                                    </i>
                                    <i class="fas fa-id-card">
                                        <span className="contact-title">   017113166</span>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
