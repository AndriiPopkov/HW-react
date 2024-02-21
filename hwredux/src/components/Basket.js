import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAction, addNewProductAction, remItemAction } from "../store/basketReducer";

function Basket() {
  
  const cards = useSelector((store) => store.cards.filter(el => el.count >= 1) );
  console.log(cards);
  
  const dispatch = useDispatch();

  const max = cards.find(el => el.count === 25)?.count || 0;

  return (
    <div className="basket_list">
      {max === 25 ? <p style={{color: 'red', fontSize: '15px'}}>Максимальный заказ одного продукта - 25</p> : ''}
      {cards.map((el) => (
        <div className = 'card' key={el.id}>
          <p>{el.title + ":"}</p>
          <button className="add" onClick={() => dispatch(addItemAction(el.id))}>+</button>
          <p>{el.count}</p>
          <button className="rem" onClick={() => dispatch(remItemAction(el.id))}>-</button>
        </div>
      ))}
      <button style={{width: '100px'}} onClick={() => dispatch(addNewProductAction(prompt()))}
      >Add newproduct</button>
    </div>
  );
}

export default Basket;
