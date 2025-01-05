import { env } from './generated';

export const environment = {
  production: false,
  zennApiUrl: '/api/zenn/articles?username=da1chi',
  hatenaApiKey: env.hatenaBlogApi,
};
