import axios from 'axios';

const postUrl = 'http://localhost:2000/papirs';
const getUrl = '';
export default class HttpService {
  static get(queryParam, options) {
    return axios
      .get(getUrl + queryParam, options)
      .then(response => this.handleGetResponse(response));
  }

  handleGetResponse(response) {
    return response;
  }

  static post(request) {
    return axios
      .post(postUrl, request)
      .then(response => this.handlePostResponse(response));

      axios({
        method: 'post',
        url: postUrl,
        data: request
      })
      .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
      });
  }
  handlePostResponse(response) {
    return response;
  }
}
