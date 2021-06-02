import react from 'react'
import bottom from './Bottom.css'

const Bottom = () => {
    return(
        <div className="bottom">
            <div className="container">
                <div className="d-flex">
                    <div className="bottom-left d-flex animate__animated animate__fadeInLeft wow" data-wow-delay="0.5s">
                        <h4>Goodgame@gmail.com.vn</h4>
                    </div>
                    <div className="bottom-right d-flex animate__animated animate__fadeInRight wow" data-wow-delay="0.5s">
                        <a><i class="fab fa-facebook"></i></a>
                        <a><i class="fab fa-steam"></i></a>
                        <a><i class="fab fa-youtube"></i></a>
                        <a><i class="fab fa-twitter"></i></a>
                        <a><i class="fab fa-discord"></i></a>
                        <a><i class="fab fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom