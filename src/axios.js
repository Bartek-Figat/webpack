class Axios {
  static async get(url) {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) return await response.json();

    switch (response.status) {
      case 400:
        console.log('HTTP request that was sent to the server has invalid syntax');
        break;
      case 401:
        console.log('Provide credentials to be able to view the protected resource');
        break;
      case 403:
        console.log('Forbidden');
        break;
      case 404:
        console.log('Not Found');
        break;
      case 500:
        console.log('Internal Server Error');
        break;
      case 502:
        console.log('Bad Gateway');
        break;
      case 503:
        console.log('Service Unavailable');
        break;
      case 504:
        console.log('Gateway Timeout');
        break;
      default:
        console.log('Unknown error');
    }
  }
}
let axios = Axios;
export { axios };
