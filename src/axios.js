import axios from 'axios';
import { createApi } from 'unsplash-js';

const token = 'gkV5IOUPpC7Bh-OVprlFJoyGTCWKvXVqsE85XlDlh9s';
const api = createApi({ accessKey : 'gkV5IOUPpC7Bh-OVprlFJoyGTCWKvXVqsE85XlDlh9s'});

const instance = axios.create({
  baseUrl: 'https://api.unsplash.com',
  timeout: 2000,
  headers: { Authorization: `client-id ${token}` },
});

export default instance;
