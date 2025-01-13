export type BreadcrumbVariant = 'default' | 'simple' | 'withBackground';
export type IconType = 'folder' | 'document' | 'home' | 'add';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: IconType;
}
