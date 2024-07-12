import axios from 'axios'

interface IHttpClient {
  get(url: string, config?: any): Promise<any>;
}

export default class ApiService {
  private httpClient: IHttpClient;

  constructor(httpClient?: IHttpClient) {
    if(httpClient) {
        this.httpClient = httpClient;
    } else {
        this.httpClient = axios;
    }
  }

  async fetchData<T>(url: string): Promise<T> {
    return this.httpClient.get(url);
  }
}