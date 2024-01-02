import { $host } from './index';

export const createOrderRequest = async (createCconfig) => {
  const { data } = await $host.post('orders/create', createCconfig);
  return data;
};
