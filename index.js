const axios = require('axios');

const URL = `${process.env.API_URL}/books`;

module.exports = {
  list: async () => axios.get(URL),
  get: async (id) => axios.get(`${URL}/${id}`),
  create: async (data) => axios.post(URL, { ...data }),
};
