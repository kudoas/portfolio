import { Injectable } from '@angular/core';
import { Article } from './types';

// IndexedDB 設定
const DB_NAME = 'portfolioArticlesCache';
const DB_VERSION = 1;
const STORE_NAME = 'articles';
const CACHE_KEY = 'combinedArticles'; // 記事一覧全体を保存する固定キー

interface ArticleCache {
  articles: Article[];
  timestamp: number; // キャッシュした日時 (タイムスタンプ)
  expiry: number; // キャッシュの有効期限日時 (タイムスタンプ)
}

@Injectable({
  providedIn: 'root',
})
export class ArticleCacheService {
  #openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request: IDBOpenDBRequest = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          console.log(`Creating object store: ${STORE_NAME}`);
          db.createObjectStore(STORE_NAME);
        }
      };

      request.onsuccess = (event: Event) => {
        console.log('IndexedDB opened successfully.');
        resolve((event.target as IDBOpenDBRequest).result);
      };

      request.onerror = (event: Event) => {
        console.error('IndexedDB open error:', (event.target as IDBOpenDBRequest).error);
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  }

  async getCache(): Promise<ArticleCache | undefined> {
    try {
      const db = await this.#openDatabase();
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request: IDBRequest<ArticleCache | undefined> = store.get(CACHE_KEY);

      return new Promise((resolve) => {
        request.onsuccess = () => {
          const cache = request.result;
          if (cache) {
            console.log('Cache data read from IndexedDB.');
            resolve(cache);
          } else {
            console.log('No cache data found in IndexedDB.');
            resolve(undefined);
          }
        };
        request.onerror = () => {
          console.error('Error getting cache from IndexedDB:', request.error);
          resolve(undefined);
        };
      });
    } catch (error) {
      console.error('Failed to open IndexedDB for getting cache:', error);
      return undefined;
    }
  }

  async setCache(articles: Article[]): Promise<void> {
    try {
      const db = await this.#openDatabase();
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const now = Date.now();
      const expiry = now + 24 * 60 * 60 * 1000;
      const cache: ArticleCache = { articles, timestamp: now, expiry };

      const request: IDBRequest<IDBValidKey> = store.put(cache, CACHE_KEY);

      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          console.log('Cache data saved to IndexedDB.');
          resolve();
        };
        request.onerror = () => {
          console.error('Error setting cache in IndexedDB:', request.error);
          reject(request.error);
        };
      });
    } catch (error) {
      console.error('Failed to open IndexedDB for setting cache:', error);
    }
  }
}
