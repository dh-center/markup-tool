/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth';
import axios from 'axios';

const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
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
      const token = resp.data.jwt;

      localStorage.setItem('user-token', token);
      axios.defaults.headers.common['Authorization'] = token;
      commit(AUTH_SUCCESS, resp);
      return resp;
    } catch (err) {
      commit(AUTH_ERROR, err);
      localStorage.removeItem('user-token');
      return err;
    }
  },
  async [AUTH_LOGOUT]({ commit }) {
    commit(AUTH_LOGOUT);
    localStorage.removeItem('user-token');
  }
};

const mutations = {
  [AUTH_REQUEST](state) {
    state.status = 'loading';
  },
  [AUTH_SUCCESS](state, resp) {
    state.status = 'success';
    state.token = resp.data.jwt;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR](state) {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT](state) {
    state.token = '';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
