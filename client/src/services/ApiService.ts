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

  async fetchData(url: string): Promise<any> {
    return this.httpClient.get(url);
  }
}