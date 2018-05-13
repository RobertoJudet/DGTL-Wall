import axios from 'axios';

const postUrl = 'http://localhost:2000/papirs';
const getUrl = 'http://localhost:2000/papirs';
export default class HttpService {

  handleGetResponse(response) {
    return response;
  }
  static get(queryParam, options) {
    return axios
      .get(getUrl, options)
      .then(response => { return response; });
  }



  static post(request) {
    return axios
      .post(postUrl, request)
      .then(response => response);

    // axios({
    //   method: 'post',
    //   url: postUrl,
    //   data: request
    // })
    // .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    // });
  }
  handlePostResponse(response) {
    return response;
  }
}
