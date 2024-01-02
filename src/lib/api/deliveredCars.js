import { $host } from './index';

export const getDeliveredCarsForShow = async () => {
  const { data } = await $host.get('delivered-cars/shown');
  return data;
};
