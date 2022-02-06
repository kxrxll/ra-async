import React from 'react';
import {useDispatch} from 'react-redux';
import {removeService} from './actionCreators';

function ServiceItem({item, toEditMode, sendEditItem}) {
  
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeService(item.id));
  }

  const handleToEditMode = (evt) => {
    evt.preventDefault();
    sendEditItem(item);
    toEditMode();
  }

  return (
    <>
      <li className="list-group-item" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          {item.name} - {item.price}₽
          <div>
            <button className="btn btn-success" id={item.id} name={item.name} price={item.price} onClick={handleToEditMode}>Редактировать</button>
            <button className="btn btn-danger" style={{marginLeft:'10px'}} onClick={handleRemove} id={item.id}>Удалить</button>
          </div>
        </li>
    </>
  )
}

export default ServiceItem;

