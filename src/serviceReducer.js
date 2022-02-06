import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE} from './serviceActions';

const initialState = [
{id: nanoid(), name: 'Замена стекла', price: 21000},
{id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case EDIT_SERVICE:
      const data = action.payload;
      const idToFind = data.id;
      const nameToEdit = data.name;
      const priceToEdit = data.price;
      const newState = state.filter(service => service.id !== idToFind);
      return [...newState, {id: idToFind, name: nameToEdit, price: Number(priceToEdit)}];
    default:
      return state;
}
}