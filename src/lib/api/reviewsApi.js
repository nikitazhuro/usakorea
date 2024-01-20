import { $host } from './index';

export const getLastFiveReviewsRequest = async () => {
  const { data } = await $host.get('reviews/last-five');
  return data;
};

export const createUserReviewRequest = async (createConfig) => {
  const { data } = await $host.post('users-reviews/create', createConfig);
  return data;
};
