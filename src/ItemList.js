import React from 'react'
import Item from "./Item.js";

function ItemList(props){
    function handleItemDel(id) {
        props.setItems(props.items.filter((i) => i.id !== id));
      }
 
return <>
    <ul className="ui-list">
        {props.items.map(function (item) {
          return (
            <li className="ui-item-list" key={item.id}>
              <Item info={item} />
              <button
                onClick={() => handleItemDel(item.id)}
                className="item-button"
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
</>
}

export default ItemList;