import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editService} from './actionCreators';

function ServiceForm({item, toEditMode}) {
  // Redux
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editService(item.id, initName, initPrice));
    evt.target.reset();
  }

  // Handlers
  const handleCancel = (evt) => {
    evt.preventDefault();
    toEditMode();
  }

  const handleNameChange = (evt) => {
    setInitName(evt.target.value);
  }

  const handlePriceChange = (evt) => {
    setInitPrice(evt.target.value);
  }

  // Inner state
  const [initName, setInitName] = useState(item.name);
  const [initPrice, setInitPrice] = useState(item.price);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Услуга</label>
          <input type="text" className="form-control" placeholder="Название услуги" value={initName} onChange={handleNameChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Цена</label>
          <input type="text" className="form-control" placeholder="Стоимость услуги" value={initPrice}onChange={handlePriceChange}/>
        </div>
        <button className="btn btn-primary" style={{marginBottom:'10px'}} type='submit'>Сохранить</button>
        <button className="btn btn-secondary" style={{marginBottom:'10px', marginLeft:'10px'}} onClick={handleCancel}>Отмена</button>
      </form>
    </>
  )
}

export default ServiceForm;

