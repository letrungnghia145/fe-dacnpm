import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export class AxiosClient {
  constructor(configs) {
    this.instance = axios.create({
      baseURL: `${BASE_URL}${configs.endpoint}`,
      headers: {
        "Content-Type": "application/json",
      },
      ...configs,
    });
  }
  handleResponse(response) {
    return {
      status: response.status,
      data: response.data,
    };
  }
  handleError(error) {
    return {
      error,
    };
  }

  get = async (url, params, configs) => {
    return await this.instance
      .get(url, { params, ...configs })
      .then(this.handleResponse)
      .catch(this.handleError);
  };
  post = async (url, body) => {
    return await this.instance
      .post(url, body)
      .then(this.handleResponse)
      .catch(this.handleError);
  };
  put = async (url, body) => {
    return await this.instance
      .put(url, body)
      .then(this.handleResponse)
      .catch(this.handleError);
  };
  delete = async (url, params) => {
    return await this.instance
      .delete(url, { params })
      .then(this.handleResponse)
      .catch(this.handleError);
  };
}