import { defineEventHandler, createError } from 'h3';

export type ZennArticleResponse = {
  articles: ZennArticle[];
};

export type ZennArticle = {
  id: number;
  title: string;
  path: string;
  published_at: string | null;
};

export default defineEventHandler(async () => {
  try {
    const response = await fetch(`https://zenn.dev/api/articles?username=da1chi`);

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Failed to fetch articles from Zenn API: ${response.statusText}`,
      });
    }

    const data = (await response.json()) as ZennArticleResponse;
    return data;
  } catch (error) {
    console.error('Error fetching Zenn articles:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch articles from Zenn API',
    });
  }
});
