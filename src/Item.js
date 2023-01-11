import React, { useState } from "react";

import {createGlobalStyle} from "styled-components";


const GlobalItem = createGlobalStyle`
  h3 {
    margin: 0;
    padding: 0;
  }
  
.item-info {
  margin-left: 10px;
}
.item-title {
  font-size: 30px;
}
.item-quantity {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}
.item-button {
  background-color: white;
  color: black;
  border: 1px solid var(--light-gray);
  padding: 5px 20px;
  min-width: 50px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  margin-left: 10px;
}
.item-button:active {
  box-shadow: 0 0px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}
.item-button:hover {
  opacity: 0.8;
}
.item-button:disabled {
  opacity: 0.4;
  cursor: disabled;
}
.item-total {
  font-size: 16px;
}
`



export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() { 
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <>
    <GlobalItem/>
          <div className="item">
      <div className="item-info">
        <h2 className="item-title">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-button"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="item-button" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
    </>

  );
}