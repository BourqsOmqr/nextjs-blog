import '../styles/style.css'
import '../styles/style1.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios';

axios.defaults.baseURL = 'http://api.sofimaroc.ma/';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

axios.interceptors.request.use(request => {
    // console.log(request);
    // Edit request config
    return request;
}, error => {
    // console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // console.log(response);
    // Edit request config
    return response;
}, error => {
    // console.log(error);
    return Promise.reject(error);
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}