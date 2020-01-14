import HttpInterceptor from './http.interceptor';

export default class HttpService {
  constructor() {}
  get(url) {
    return HttpInterceptor('GET', url);
  }
}
