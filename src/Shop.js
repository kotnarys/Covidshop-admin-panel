import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.js"
import AddItem from "./AddItem.js";
import AddFirstItem from "./AddFirstItem.js";


export default function Shop() {
  const [items, setItems] = useState(() => {
    if(localStorage.length>0)
    return JSON.parse(localStorage.getItem("items"))
    return []
  })

    useEffect(() => localStorage.setItem("items", JSON.stringify(items)))

   function handleFormSubmit(e) {
    e.preventDefault()

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({name: items.name, desc: items.desc}),
      headers: {"Content-type": "application/json"}
    }

    fetch("https://learn.guidedao.xyz/api/student/products", requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }

  if(!items.length){document.title="Товары отсутствуют"}
  else {document.title = items.length + " Товаров"};  
  

  return (
    <>
      <AddItem handleFormSubmit={handleFormSubmit} items={items} setItems={setItems} />     
      <AddFirstItem itemsLength={items.length}/>
      <ItemList items={items} setItems={setItems}/>
    </>
  );
}