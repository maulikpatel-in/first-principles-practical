import axios from 'axios';

const authHeader = () => ({
  Authorization: ``,
});

/**
 * REST API
 */
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() },
    });
  }

  static async post(path = '', requestBody = {}, optionalHeader = {}) {
    const { data } = await client({
      method: 'POST',
      url: path,
      data: requestBody,
      headers: { ...authHeader(), ...optionalHeader },
    });

    return data;
  }

  static patch(path = '', requestBody = {}) {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(requestBody),
      headers: { ...authHeader() },
    });
  }

  static put(path = '', requestBody = {}) {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(requestBody),
      headers: { ...authHeader() },
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `` };

  return requestConfig;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if (response.status === 500) {
        // do something here
      } else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  },
);
export { DataService };
