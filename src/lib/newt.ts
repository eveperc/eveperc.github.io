import { createClient } from 'newt-client-js'

export interface Article {
  title: string
  slug: string
  body: string
  category: {
    _id: string
    name: string
    slug: string
  }
  coverImage: {
    _id: string
    altText: string
    description: string
    fileName: string
    fileSize: number
    fileType: string
    height: number
    src: string
    title: string
    width: number
  }
  updatedAt: string
}
export interface Category {
  name: string,
  slug: string,
}

export interface Page<T = any> {
  /** 結果 */
  data: T[];
  /** メタデータ */
  /** 0から始まるページ上の最初のアイテムのカウント */
  start: number;
  /** 0から始まるページ上の最後のアイテムの数 */
  end: number;
  /** 結果の総数 */
  total: number;
  /** 1から始まる現在のページ番号 */
  currentPage: number;
  /** 1ページあたりのアイテム数（デフォルト：25） */
  size: number;
  /** 最終ページ数 */
  lastPage: number;
  url: {
    /** 現在のページのURL */
    current: string;
    /** 前のページのURL（もしあれば） */
    prev: string | undefined;
    /** 次のページのURL（もしあれば） */
    next: string | undefined;
  };
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})

export async function getContents() {
  const postsData = await newtClient.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["title", "slug", "body", "coverImage", "updatedAt"],
    },
  });
  return postsData.items;
}
