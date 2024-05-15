import client from '../api/client.js';

const catchError = error => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return {success: false, error: error.message};
};
export const register = async values => {
  try {
    const {data} = await client.post('/profile/auth/register', {...values});
    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const login = async values => {
  try {
    const {data} = await client.post('/profile/auth/login', {...values});
    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const forgetPassword = async email => {
  try {
    const {data} = await client.post('/profile/auth/forgot-password', {email});
    return data;
  } catch (error) {
    return catchError(error);
  }
};
