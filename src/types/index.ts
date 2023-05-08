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

export type Breadcrumb = {
  name: string
  href: string
}
