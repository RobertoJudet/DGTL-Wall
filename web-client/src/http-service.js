import axios from 'axios'

const postUrl = '';
const getUrl = '';
class HttpService {
    static get(queryParam) {
        axios.get(getUrl + queryParam)
            .then(response => this.handleGetResponse(response))
    }
    handleGetResponse(response) {
        return response;
    }

    static post(request) {
        axios.post(postUrl, request)
            .then(response => this.handlePostResponse(response))
    }
    handlePostResponse(response) {
        return response;
    }
}