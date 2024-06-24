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
export const verifyEmail = async (otp, userId) => {
  try {
    const {data} = await client.post('/profile/auth/verify-email', {
      otp,
      userId,
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
export const userQRCode = async userId => {
  try {
    const {data} = await client.post('/profile/auth//qr/scan', {userId});
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const findUserById = async userId => {
  try {
    const {data} = await client.get(`/profile/auth/user/${userId}`);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const fetchUsers = async () => {
  try {
    const {data} = await client.get(`/profile/auth/users`);
    console.log(`Auth Data: ${data}`);
    return data;
  } catch (error) {
    return catchError(error);
  }
};
