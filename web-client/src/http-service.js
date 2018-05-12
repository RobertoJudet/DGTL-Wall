import axios from 'axios';

const postUrl = '';
const getUrl = '';
class HttpService {
  static get(queryParam, options) {
    return axios
      .get(getUrl + queryParam, options)
      .then(response => this.handleGetResponse(response));
  }

  handleGetResponse(response) {
    return response;
  }

  static post(request) {
    axios
      .post(postUrl, request)
      .then(response => this.handlePostResponse(response));
  }
  handlePostResponse(response) {
    return response;
  }
}
