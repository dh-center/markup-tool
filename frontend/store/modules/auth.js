/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth';
import axios from 'axios';

const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token
};

const actions = {
  async [AUTH_REQUEST]({ commit, dispatch }, user) {
    try {
      commit(AUTH_REQUEST);
      const resp = await axios.get('/login', {
        params: {
          email: user.email,
          password: user.password
        }
      });

      commit(AUTH_SUCCESS, resp);
      return resp;
    } catch (err) {
      commit(AUTH_ERROR, err);
      return err;
    }
  }
};

const mutations = {
  [AUTH_REQUEST](state) {
    state.status = 'loading';
  },
  [AUTH_SUCCESS](state, resp) {
    localStorage.setItem('user-token', resp.data.jwt);
    axios.defaults.headers.common['Authorization'] = resp.data.jwt;
    state.status = 'success';
    state.token = resp.data.jwt;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR](state) {
    localStorage.removeItem('user-token');
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT](state) {
    localStorage.removeItem('user-token');
    state.token = '';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
