import qs from 'qs';
import apiInstance from './api-instance';

const baseUrl = 'http://omdbapi.com';
const apikey = '22dc7c71';

export const GetList = async (parameters) => {
  try {
    const queryUrl = `?apikey=${apikey}&${qs.stringify(parameters)}`;
    return await apiInstance({
      method: 'get',
      url: `${baseUrl}/${queryUrl}`,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

export const GetDetails = async (parameters) => {
  try {
    const queryUrl = `?apikey=${apikey}&${qs.stringify(parameters)}`;
    return await apiInstance({
      method: 'get',
      url: `${baseUrl}/${queryUrl}`,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};
