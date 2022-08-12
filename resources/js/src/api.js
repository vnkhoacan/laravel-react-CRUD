const axios = window.axios;

const BASE_API_URL = 'http://127.0.0.1:8000/api'

export default {
    getAllEmployees: () =>
        axios.get(`${BASE_API_URL}/employees`),
    getOneEmployee: (id) =>
        axios.get(`${BASE_API_URL}/employees/${id}`),
    addEmployee: (employee) =>
        axios.post(`${BASE_API_URL}/employees`, employee),
    updateEmployee: (employee, id) =>
        axios.put(`${BASE_API_URL}/employees/${id}`, employee),
    deleteEmployee: (id) =>
        axios.delete(`${BASE_API_URL}/employees/${id}`),
}