import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers()  {
  return get('users');
}

function get (url) {
  return fetch(baseUrl + url).then(onSucces, onError);
}

function onSucces(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
