import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3/',
});

export const api2 = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const api3 = axios.create({
  baseURL: 'https://cat-fact.herokuapp.com/',
});

export const api4 = axios.create({
  baseURL:
    'http://gpsjus.homologacao.intrajus.tjrn/1grau_produtividade_teletrabalho.php',
});
// export default api;
