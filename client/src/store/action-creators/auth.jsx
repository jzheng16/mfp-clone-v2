import axios from 'axios';
import { GET_USER, REMOVE_USER, UPDATE_USER, SET_AUTH_ERROR, REMOVE_AUTH_ERROR } from '../actions';

export const getUser = user => ({ type: GET_USER, payload: user });
export const removeUser = () => ({ type: REMOVE_USER });
export const setError = error => ({ type: SET_AUTH_ERROR, payload: error });
export const removeError = () => ({ type: REMOVE_AUTH_ERROR });
export const updateUser = user => ({
  type: UPDATE_USER,
  payload: user
});

// Fetches user info on login

export const updatingUserInformation = info => dispatch =>
  axios.post('/api/auth/updateUserInfo', info)
    .then(updatedUser => {
      dispatch(updateUser(updatedUser.data));
    })
    .catch(err => console.error('updatingUserInformation Action creator error', err));


export const uploadingUserImage = image => dispatch => {
  axios.post('/api/auth/uploadimage', image)
    .then(result => {
      console.log(result.data);
      dispatch(updateUser(result.data));
    })
    .catch(err => console.error('trouble uploading image', err));
};

export const fetchingUser = () => dispatch =>
  axios.get('/api/auth/me')
    .then(user => {
      dispatch(getUser(user.data || {}));
    })
    .catch(err => console.error(err));


export const loggingIn = (email, password) => dispatch => {
  axios.post('/api/auth/login', { email, password })
    .then(user => {
      dispatch(getUser(user.data));
      // history.push('/');
    })
    .catch(err => {
      console.log('Oops had trouble logging in: ', err.response.data);
      dispatch(setError(err.response.data));
    });
};

export const signingUp = user => dispatch =>
  axios.post('/api/auth/signup', user)
    .then(newUser => {
      dispatch(getUser(newUser.data));
    })
    .catch(err => {
      console.log('Oops had trouble signing up: ', err.response.data);
      dispatch(setError(err.response.data));
    });


export const loggingOut = () => dispatch =>
  axios.get('/api/auth/logout')
    .then(() => {
      dispatch(removeUser());
    })
    .catch(err => console.log('trouble logging out ', err));


export const changingPassword = passwords => dispatch => axios.post('/api/auth/changepassword', passwords);


export const sendingVerificationEmail = user => dispatch => {
  axios.post('/api/auth/sendemail', user)
    .then(response => {
      // not sure
      console.log('response', response.data);
    });
};

export const resendingVerificationEmail = user => dispatch => {
  axios.post('/api/auth/sendemail?resend=true', user)
    .then(response => {
      // not sure
      console.log('response', response.data);
    });
};

export const verifyingUser = verificationId => dispatch => {
  axios.post('/api/auth/verify', { verificationId })
    .then(response => {
      dispatch(getUser(response.data));
      console.log('response', response.data);
    });
};


// dispatch(getUser(updatedUser.data));
// return new Promise((resolve, reject) => {
//   resolve(updatedUser.data);
// });

