import client from '../configuration/feathers';

/* global window */

export default {
  logout: state => {
    client.logout()
    return {
      ...state,
      accessToken: null,
    };
  },

  deleteUser: state => {
    client.service('users').remove(state.user._id).then(() => {
      alert('user removed');
    });
    return {
      ...state,
      user: undefined,
      accessToken: undefined,
    };
  },
};
