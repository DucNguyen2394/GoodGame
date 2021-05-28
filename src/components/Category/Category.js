import React, { useState, useEffect } from "react";
import "./Category.css";

const Category = props => {
    // category top

    const [categoryTop,setCategoryTop] = useState([
        {
            id: Math.random().toString(),
            name: "all",
            isActive: true,
        },
        {
            id: Math.random().toString(),
            name: "pc",
            isActive: false,
        },
        {
            id: Math.random().toString(),
            name: "ps5",
            isActive: false,
        },
        {
            id: Math.random().toString(),
            name: "xbox",
            isActive: false,
        },
        {
            id: Math.random().toString(),
            name: "steam",
            isActive: false,
        },
        {
            id: Math.random().toString(),
            name: "uplay",
            isActive: false,
        },
    ]);

    // category data
    const [gameList,setGameList] = useState([]);
    
    const [platform,setPlatform] = useState('all')
    // click categoryTop
    const click = (categoryName) => {
        const cate = categoryTop.map(categoryElement => {
            if(categoryElement.name === categoryName){
                categoryElement.isActive = true
                setPlatform(categoryName)
            }
            if(categoryElement.name != categoryName){
                categoryElement.isActive = false
            }
            return categoryElement
        })
        setCategoryTop(cate)

        
    }
    // filter game
    const filterGame = gameList.filter(game =>{
        if (platform === 'all') {
            return game
            
        }
        if(game.platform.includes(platform)){
            return game
        }
    })

    let elementTop = categoryTop.map((category,index) => {
        return(      
            <div className="col-md-2">
                <a>
                    <div className={`btn-color ${category.isActive ? 'btn-active' : ''}`} onClick ={() => click(category.name)}>{category.name}</div>
                </a>
            </div>
        )
    })

    
    useEffect(() => {
        fetch("./data/list-game.json",{
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        .then(function(response){
            return response.json();
          })
        .then(function(data) {
            setGameList(data)
          });
    })


    let elements = filterGame.map((category, index) => {
        return (
            <div
                className="col-lg-6 col-xl-3 animate__animated animate__zoomIn wow"
                data-wow-delay="0.5s"
                key={category.id}
            >
                <div className="category-img">
                    <a>
                        <img src={category.img}></img>
                    </a>
                    <div className="genre">
                        <a> {category.genre.join(",")}</a>
                        <i class="fas fa-tags"></i>
                    </div>
                </div>
                <div className="list-title">
                    <a>{category.name}</a>
                </div>
                <div className="platform">
                    <i class="fas fa-tv"></i>
                    <a> {category.platform .join(",")}</a>
                </div>
                <div className="summary">
                    <p>{category.summary}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="category">
            <div className="container">
                <div className="category-top">
                    <div className="row">
                        {elementTop}
                    </div>
                </div>

                <div className="category-list">
                    <div className="row">{elements}</div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-2">
                        <a>
                            <div className="btn-color btn-active">{platform}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
