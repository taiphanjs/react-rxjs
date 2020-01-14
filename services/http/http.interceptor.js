import * as localStorage from 'localStorage';

function HttpInterceptor(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    if(data){
      xhr.setRequestHeader('Content-Type', 'application/json');
    }
    const token = JSON.parse(localStorage.getItem('token'));
    if(token){
      xhr.setRequestHeader('token', JSON.stringify(token));
    }
    xhr.open(method, url);
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject(xhr.er);
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}

export default HttpInterceptor;