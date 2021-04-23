import axios from 'axios';
import StaticVar from '../Config/StaticVar';
import CookieManager from '@react-native-community/cookies';

// ===> api create 
const api = axios.create({
  baseURL: StaticVar.URL_API,
  // timeout: 10000,
  headers:{},
  // json: true
});

// ===> api interceptors 
api.interceptors.request.use(async (config)=> {
    config.headers['AuthToken'] = await CookieManager.get(StaticVar.URL_API);;
    return config;
}, (error)=> {
  return Promise.reject(error);
});

// ===> api list function request

// Merchant
const getMerchant = (query) => api.get(`/merchant/data/view${query.by ? `?${query.by}=${query.value}` : ''}`);
const getMerchantDetail = (id) => api.get(`/merchant/data/${id}`);
const getBranchMerchant = (id) => api.get('/merchant/data/branch/'+id);
const postMerchant = (data) => api.post('/merchant/data/register', data);
const putMerchant = (id,data) => api.put('/merchant/data/update/'+id, data);
const deleteMerchant = (id) => api.delete('/merchant/data/delete/'+id);

// Merchant Product Menu
const postProductMerchant = (id,data) => api.post('/merchant/data/product/add/'+id, data);
const putProductMerchant = (id,productId,data) => api.put('/merchant/data/product/update/'+id+'/'+productId, data);
const deleteProductMerchant = (id,productId) => api.delete('/merchant/data/product/delete/'+id+'/'+productId);

// Data Order
const getOrder = (query) => api.get(`/order/data${query.by ? `?${query.by}=${query.value}&${query.byFilterDate}=${query.valueFilterDate}` : ''}`);
const getOrderNumber = (query) => api.get(`/order/data/ordernumber${query.by ? `?${query.by}=${query.value}&${query.byFilterDate}=${query.valueFilterDate}` : ''}`);
const postOrder = (data) => api.post('/order/data/register', data);
const putOrder = (id,data) => api.put('/order/data/'+id, data);
const deleteOrder = (id) => api.delete('/order/data/'+id);

export const apis = {
  getMerchant,
  getMerchantDetail,
  getBranchMerchant,
  postMerchant,
  putMerchant,
  deleteMerchant,
  postProductMerchant,
  putProductMerchant,
  deleteProductMerchant,
  getOrder,
  getOrderNumber,
  postOrder,
  putOrder,
  deleteOrder
}

export default apis