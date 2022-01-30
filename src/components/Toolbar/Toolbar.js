import React from "react";
import './main.css'

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  const active = (value) => selected === value ? "filter__btn--active" : "filter__btn--noactive";

  const arrElem = filters.map(value => 
    <button className={"filter__btn " + active(value)} data-filter={value} onClick={onSelectFilter} key={value}>
        {value}
    </button>
  ); 
  
  return (<div className="filter">{arrElem}</div>);
}

export default Toolbar;
