import axios from 'axios';
import { api_urls } from '../../types/types';


export default async function getCourse(id) {
  try {
    const response = await axios({
      url: `${api_urls.API_COURSES}/${id}`,
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}