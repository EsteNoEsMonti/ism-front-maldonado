import axios from 'axios';

export default async function getStudents() {
  try {
    const response = await axios({
      url: 'http://localhost:3000/alumnos',
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