import React, { useState } from "react";
import { v4 } from "uuid";

import {createGlobalStyle} from "styled-components";

const GlobalUI = createGlobalStyle`
.ui-link {
  text-decoration: none;
  color: var(--primary);
}
.ui-title {
  font-family: Helvetica;
}
.ui-container {
  padding-top: 5px;
  width: 100vw;
  margin: 0 auto;
}
.ui-textfield {
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  font-size: 16px;
}
.ui-button {
  background-color: var(--primary);
  color: white;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.ui-button:hover {
  opacity: 0.8;
}
.ui-button:disabled {
  opacity: 0.4;
  cursor: disabled;
}
.ui-button:active {
  box-shadow: 0 0px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}
[class^="ui-"] {
  margin: 10px;
}
.ui-list {
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.ui-item-list {
  margin-bottom: 80px;
}
`

function AddItem(props){
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
  
    function handleFormRec(e) {
      e.preventDefault();
      if (name !== "" && desc !== "") {
        const newItems = {
          id: v4(),
          name,
          desc
        };
        props.setItems([...props.items, newItems]);
        setDesc("");
        setName("");
      }
    }
    return <>
    <GlobalUI/>
            <form onSubmit={props.handleFormSubmit}>
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Название товара"
        className="ui-textfield"
        value={name}
      />
    </div>
    <div>
      <input
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        placeholder="Описание товара"
        className="ui-textfield"
        value={desc}
      />
    </div>
    <div className="form-footer">
      <div className="validation"></div>
      <input
        onClick={handleFormRec}
        type="submit"
        className="ui-button"
        value="Добавить"
      />
    </div>
  </form>
    </>



}

export default AddItem;