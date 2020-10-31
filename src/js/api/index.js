  
import Request from './Request';

export default {
  invites: new Request('/invites', true),
  addresses: new Request('/addresses', true),
  people: new Request('/people', true),
  login: (email, password) => Request.request('post', '/login', { email, password }, false),
};