import type { FC } from 'react';
import { match } from 'ts-pattern';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'accent'
  | 'danger'
  | 'success'
  | 'warning';

interface Props {
  label: string;
  variant: ButtonVariant;
  outline?: boolean;
}

const getStyle = (variant: ButtonVariant, outline?: boolean) => {
  // baseVariant に対応する DaisyUI のクラス名を決定
  const daisyuiVariantClass = match(variant)
    .with('primary', () => 'primary')
    .with('secondary', () => 'secondary')
    .with('info', () => 'info')
    .with('accent', () => 'accent')
    .with('danger', () => 'error')
    .with('success', () => 'success')
    .with('warning', () => 'warning')
    .exhaustive();

  // outline クラスを追加
  const outlineClass = outline ? 'btn-outline' : '';

  // クラス名を結合
  return `font-black text-lg btn ${outlineClass} btn-${daisyuiVariantClass}`;
};

const Button: FC<Props> = ({ label, variant, outline }) => {
  return (
    <button className={getStyle(variant, outline)}>
      {label}
    </button>
  );
};

export default Button;
