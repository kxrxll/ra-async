import React, {useState} from 'react';
import './bootstrap.css';
import {useSelector} from 'react-redux';
import ServiceFormNew from './ServiceFormNew';
import ServiceFormEdit from './ServiceFormEdit';
import ServiceList from './ServiceList';

function Service() {

  // Redux state
  const items = useSelector(state => state);

  // Edit mode handling
  const [isEditMode, setIsEditMode] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const toEditMode = () => {
    isEditMode ? setIsEditMode(false) : setIsEditMode(true);
  }

  const sendEditItem = (item) => {
    setEditItem(item);
  }


  return (
    <div className="card" style={{margin:'40px',padding:'20px',width:'80%'}}>
      {!isEditMode ? <ServiceFormNew /> : <ServiceFormEdit 
        item={editItem} 
        toEditMode={toEditMode}
        />}
      <ServiceList
        items={items}
        toEditMode={toEditMode}
        sendEditItem={sendEditItem}
      />
    </div>
  )
}

export default Service;
