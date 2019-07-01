import store from '../Store';

export const logout = () => {
  store.dispatch({
		type: 'LOGOUT'
	})
};
