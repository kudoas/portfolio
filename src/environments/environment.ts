import { env } from './generated';
import { Environment } from './type';

export const environment = {
  production: true,
  zennApiUrl: '/api/zenn/articles?username=da1chi',
  hatenaApiKey: env.hatenaBlogApi,
} satisfies Environment;
