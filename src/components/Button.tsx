import { match } from 'ts-pattern';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'accent'
  | 'danger'
  | 'success'
  | 'warning';

type ButtonProps = {
  children: React.ReactNode;
  variant: ButtonVariant;
  outline?: boolean;
};

export default function Button({ children, variant, outline }: ButtonProps) {
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
  const style = `font-black text-lg btn ${outlineClass} btn-${daisyuiVariantClass}`;

  return (
    <button className={style}>
      {children}
    </button>
  );
}
