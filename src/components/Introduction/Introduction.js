import React from "react"
import "./Introduction.css"

const Introduction = () =>{
    return(
        <div className="introduction">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-4 intro animate__animated animate__zoomIn wow" data-wow-delay="0.5s">
                        <img src="img/intro-1.jpg"></img>
                        <div className="wrap-intro">
                            <div className="intro-title">
                                OUR ALL GAMES
                            </div>
                            <div className="intro-main">
                                good games
                            </div>
                            <div className="intro-text">
                                <p>Mời thằng hùng xem các game tại đây lmao</p>
                            </div>
                            <div className="btn btn-transparent">
                                <a href="#"> 
                                   <span>all games</span>
                                </a>                              
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 intro animate__animated animate__zoomIn wow" data-wow-delay="0.5s">
                        <img src="img/intro-2.jpg"></img>
                        <div className="wrap-intro">
                            <div className="intro-title">
                                our developer team
                            </div>
                            <div className="intro-main">
                                the horde
                            </div>
                            <div className="intro-text">
                                <p>Xin mời đến với team chúng tôi</p>
                            </div>
                            <div className="btn btn-transparent">
                                <a href="#"> 
                                   <span>read more</span>
                                </a>                              
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 intro animate__animated animate__zoomIn wow" data-wow-delay="0.5s">
                        <img src="img/intro-3.jpg"></img>
                        <div className="wrap-intro">
                            <div className="intro-title">
                                DOCUMENTATIONS & SUPPORT
                            </div>
                            <div className="intro-main">
                                help center
                            </div>
                            <div className="intro-text">
                                <p>muốn hỗ trợ j thì hỏi thằng hùng</p>
                            </div>
                            <div className="btn btn-transparent">
                                <a href="#"> 
                                   <span>contact</span>
                                </a>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction

