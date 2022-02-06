import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addService} from './actionCreators';

function ServiceFormNew() {

  // Redux
  const dispatch = useDispatch();

  const handleAdd = (evt) => {
    evt.preventDefault();
    addService(dispatch, name, price);
    evt.target.reset();
  }

  // Use state hooks
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // Input change handlers
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }

  const handlePriceChange = (evt) => {
    setPrice(evt.target.value);
  }

  return (
    <>
      <form onSubmit={handleAdd}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Услуга</label>
          <input type="text" className="form-control" placeholder="Название услуги" onChange={handleNameChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Цена</label>
          <input type="text" className="form-control" placeholder="Стоимость услуги" onChange={handlePriceChange} />
        </div>
        <button className="btn btn-primary" style={{marginBottom:'10px'}}>Добавить</button>
      </form>
    </>
  )
}

export default ServiceFormNew;

