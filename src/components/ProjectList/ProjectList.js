import React from "react";
import './main.css'

function Portfolio(props) {
    const {arrImg} = props;
    let id = 1
    const arrElem = arrImg.map(value => 
        <img className="img" src={value.img} data-filter={value.category} key={++id} alt=""/>
    ); 
    return (
        <div className="filter-img">{arrElem}</div>
    )
}

export default Portfolio;