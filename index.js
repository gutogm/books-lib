const axios = require('axios');

const URL = `${process.env.API_URL}/books`;

module.exports = {
  list: async () => axios.get(URL).then(r => r.data),
  get: async id => axios.get(`${URL}/${id}`).then(r => r.data),
  create: async data => axios.post(URL, { ...data }).then(r => r.data),
};
