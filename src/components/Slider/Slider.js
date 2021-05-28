import React from 'react'
import './Slider.css'

const Slider = () => {
    return(
    <>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img className="d-block w-100" src="/img/slider-witcher.jpg"/>
                    <div class="inner">
                        <ul className="inner-1">
                            <li><i class="fas fa-tv"></i><a href="#"> PC,PS5,Steam</a></li>
                            <li><i class="fas fa-tags"></i><a href="#"> Action,Adventure</a></li>
                        </ul>
                        <ul className="inner-title">
                            <div className="title">the witcher III</div>
                        </ul>
                        <ul className="inner-info">
                            <div className="info"><span>The Witcher III: </span>Wild Hunt is an action role-playing game with
                            a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a
                            Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps,
                            climbs and swims. The game takes place in a fictional fantasy world based on Slavonic mythology.[1][2][3] Players control Geralt of Rivia,
                             a monster slayer for hire known as a Witcher, and search for his adopted daughter, who is on the run from the otherworldly Wild Hunt.</div>
                        </ul>
                        <ul className="inner-2">
                            <li><a href="#">game details</a></li>
                            <li><a href="#">buy now</a></li>
                        </ul>
                    </div>
                </div>
                <div class="carousel-item">
                    <img className="d-block w-100" src="/img/slider-acvalhalla.jpg"/>
                    <div class="inner">
                        <ul className="inner-1">
                            <li><i class="fas fa-tv"></i><a href="#"> PC,PS5,Steam</a></li>
                            <li><i class="fas fa-tags"></i><a href="#"> open-world, action-adventure</a></li>
                        </ul>
                        <ul className="inner-title">
                            <div className="title">The Valhalla</div>
                        </ul>
                        <ul className="inner-info">
                            <div className="info"><span>Assassin's Creed Valhalla: </span>is an action role-playing video game developed by Ubisoft Montreal 
                            and published by Ubisoft. It is the twelfth major installment and the twenty-second release in the Assassin's Creed series, and a successor to 
                            the 2018's Assassin's Creed Odyssey. Set in the years 872–878 AD, the game recounts a fictional story during the Viking invasion of Britain. 
                            The player controls Eivor, a Viking raider who becomes embroiled in the conflict between the Assassin Brotherhood and the Templar Order.</div>
                        </ul>
                        <ul className="inner-2">
                            <li><a href="#">game details</a></li>
                            <li><a href="#">buy now</a></li>
                        </ul>
                    </div>
                </div>
                <div class="carousel-item">
                    <img className="d-block w-100" src="/img/slider-crysis.jpg"/>
                    <div class="inner">
                        <ul className="inner-1">
                            <li><i class="fas fa-tv"></i><a href="#"> PS5,Steam</a></li>
                            <li><i class="fas fa-tags"></i><a href="#"> Action,Adventure</a></li>
                        </ul>
                        <ul className="inner-title">
                            <div className="title">The Last Of Us II</div>
                        </ul>
                        <ul className="inner-info">
                            <div className="info"><span>The Last of Us Part II: </span> is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. Set five years after The Last of Us (2013), the game focuses on two playable characters in a post-apocalyptic United States whose lives intertwine: Ellie, who sets out for revenge after suffering a tragedy, and Abby, a soldier who becomes involved in a conflict between her militia and a religious cult.</div>
                        </ul>
                        <ul className="inner-2">
                            <li><a href="#">game details</a></li>
                            <li><a href="#">buy now</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </>
    )
}

export default Slider;