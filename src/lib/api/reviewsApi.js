import { $host } from './index';

export const getLastFiveReviewsRequest = async () => {
  const { data } = await $host.get('reviews/last-five');
  return data;
};
