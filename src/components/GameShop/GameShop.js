import react from 'react';
import './GameShop.css'

const GameShop = () =>{
  return(
    <>
      <div className="container">
        <div className="game-shop-wrapper">
          <div className="game-shop-title-wrapper">
            <div className="game-shop-title">
              game <span className="title"> shop</span>
            </div>
          </div>
          <div className="game-shop-product-wraper">
              <div className="game-shop-product">
                <div className="game-shop-img">
                  <img src="img/cd1.jpg"></img>
                </div>
                <div className="shop-content">
                  <div className="title">game pack dvd</div>
                  <div className="price">$ 100</div>
                </div>
              </div>
              <div className="game-shop-product">
                <div className="game-shop-img">
                  <img src="img/cd2.jpg"></img>
                </div>
                <div className="shop-content">
                  <div className="title">game pack dvd</div>
                  <div className="price">$ 100</div>
                </div>
              </div>
              <div className="game-shop-product">
                <div className="game-shop-img">
                  <img src="img/cd3.jpg"></img>
                </div>
                <div className="shop-content">
                  <div className="title">game pack dvd</div>
                  <div className="price">$ 100</div>
                </div>
              </div>
                                     
          </div>
        </div>
        </div>
    </>
  )
}

export default GameShop