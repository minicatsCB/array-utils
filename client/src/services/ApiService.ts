import axios from 'axios'

interface IHttpClient {
  get(url: string, config?: any): Promise<any>;
}

export default class ApiService {
  private httpClient: IHttpClient;
  private readonly BASE_URL = `${import.meta.env.VITE_SERVER_HOST}/data`;

  constructor(httpClient?: IHttpClient) {
    if(httpClient) {
        this.httpClient = httpClient;
    } else {
        this.httpClient = axios;
    }
  }

  async fetchData<T>(slug: string = ''): Promise<T> {
    const response = await this.httpClient.get(`${this.BASE_URL}/${slug}`);
    return response.data;
  }
}