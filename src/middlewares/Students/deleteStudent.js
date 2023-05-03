import axios from 'axios';
import { api_urls } from '../../types/types';

export default async function deleteStudent(id) {
  console.log('🌙 delete -> ', id)
  try {
    const response = await axios({
      url: `${api_urls.API_STUDENTS}/${id}`,
      method: 'DELETE',
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