import axios from 'axios';
import { API_URL } from '../config/config';

const api = axios.create({
  baseURL: API_URL,
});

export const createTodo = async (title: string, description: string) => {
  try {
    const response = await api.post('/todos', { title, description });
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
}