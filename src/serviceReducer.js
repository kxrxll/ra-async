import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, FETCH_SERVICES_REQUEST, FETCH_SERVICES_FAILURE, FETCH_SERVICES_SUCCESS} from './serviceActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return {...state, items: [...state.items, {id: nanoid(), name, price: Number(price)}], loading: false, error: null};
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return {...state, items: state.items.filter(o => o.id !== id)};
    case CHANGE_SERVICE_FIELD:
      const { newName, value } = action.payload;
      const { item } = state;
      return { ...state, item: {...item, [newName]: value }};
    case FETCH_SERVICES_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_SERVICES_FAILURE:
      const {error} = action.payload;
      return {...state, loading: false, error};
    case FETCH_SERVICES_SUCCESS:
      const {items} = action.payload;
      return {...state, items, loading: false, error: null};
    default:
      return state;
}
}