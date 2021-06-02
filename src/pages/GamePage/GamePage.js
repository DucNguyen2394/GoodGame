import React from 'react';
import gamePage from './GamePage.css';

const GamePage = () =>{
  return(
    <>
      <div className = "game-wrapper">
        <div className="container">
          <div className="banner"><img style="height = 1000px" src="./assets/img/banner1.jpg"></img></div>
          <div className="banner-content">
            <div class="banner__content-title">Games</div>
            <div class="banner__content-subtitle">GoodGame<i class="fal fa-angle-right"></i><span>All Game</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GamePage;