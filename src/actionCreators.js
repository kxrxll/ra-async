import { REMOVE_SERVICE, FETCH_SERVICES_REQUEST, FETCH_SERVICES_FAILURE, FETCH_SERVICES_SUCCESS, CHANGE_SERVICE_FIELD } from './serviceActions';

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}
export function changeServiceField(id, name, price) {
  return {type: CHANGE_SERVICE_FIELD, payload: {id, name, price}}
}
// For AJAX
export function fetchServicesRequest() {
  return {type: FETCH_SERVICES_REQUEST};
}
export function fetchServicesFailure(message) {
  return {type: FETCH_SERVICES_FAILURE, payload: {message}};
}
export function fetchServicesSuccess(items) {
  return {type: FETCH_SERVICES_SUCCESS, payload: {items}};
}
export function addServiceRequest() {
  return {type: FETCH_SERVICES_REQUEST};
}
export function addServiceFailure(message) {
  return {type: FETCH_SERVICES_FAILURE, payload: {message}};
}
export function addServiceSuccess(items) {
  return {type: FETCH_SERVICES_SUCCESS, payload: {items}};
}

// Functions

export async function fetchServices(dispatch) {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch('http://localhost:7070/api/services');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
}

export async function addService (dispatch, name, price) {
  dispatch(addServiceRequest());
  try {
    const response = await fetch('http://localhost:7070/api/services', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, price}),
    })
  if (!response.ok) {
    throw new Error(response.statusText);
  }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }
  fetchServices(dispatch);
}