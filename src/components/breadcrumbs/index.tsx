import React from 'react';
import { match, P } from 'ts-pattern';
import Icons from './icons';
import type { IconType, BreadcrumbItem, BreadcrumbVariant } from './types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: BreadcrumbVariant;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  variant = 'default',
  className = '',
}) => {
  const variantClasses = match(variant)
    .with('simple', () => 'text-sm')
    .with('withBackground', () => 'text-sm bg-base-200 p-3 rounded-lg')
    .with('default', () => 'text-sm')
    .exhaustive();

  const renderItem = (item: BreadcrumbItem) =>
    match(item)
      .with(
        { href: P.string, icon: P.string },
        ({ href, icon, label }) => (
          <a href={href} className="inline-flex items-center gap-2">
            {Icons[icon as IconType]}
            {label}
          </a>
        )
      )
      .with(
        { href: P.string },
        ({ href, label }) => (
          <a href={href}>{label}</a>
        )
      )
      .with(
        { icon: P.string },
        ({ icon, label }) => (
          <span className="inline-flex items-center gap-2">
            {Icons[icon as IconType]}
            {label}
          </span>
        )
      )
      .otherwise(({ label }) => <span>{label}</span>);

  return (
    <div className={`breadcrumbs ${variantClasses} ${className}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
