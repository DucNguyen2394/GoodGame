import React from 'react';
import './About.css';

const About = () =>{
  return(
    <>
      <div className = "about-wrapper">
        <div className="container">
            <div className="row">
              <div className="inner-about">
              <div className="col-sm-6">
                <img className="img-about" src="img/sexyyyy.jpg"></img>
              </div>
              <div className="col-lg-6 content">
                <div className="title-about">About the <span className="span">horde</span></div>
                <div className="excerpt">HÙNG THÁNG NÀY ĐÉO XONG HTML LÀ BỌN TAO KICK KHỎI TEAM ĐÉO NÓI NHIỀU dfhakdfhasfdakjsgfkajsgfasfkas</div>
                <div className="btn-about">READ MORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;