import React from 'react'

function AddFirstItem(props) {
    if (props === 0) {
      return <p className="ui-title">Добавьте первый товар</p>;
    }
    return null;
  }

  export default AddFirstItem;