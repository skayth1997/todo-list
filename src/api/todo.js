import { API_URL, DEFAULT_HEADERS } from "../consts/api";

const api = {
  fetchAll: () => (
    fetch(`${API_URL}/todos`, {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    }).then(r => r.json())
  ),
  createTodo: (todo) => (
    fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(todo),
    }).then(r => r.json())
  ),
  deleteTodo: (id) => (
    fetch(`${API_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: DEFAULT_HEADERS,
    }).then(r => r.json())
  ),
  updateTodo: (todo) => (
    fetch(`${API_URL}/todos/${todo._id}`, {
      method: 'PATCH',
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(todo),
    }).then(r => r.json())
  ),
};

export default api;
