import DaisyUIBtn from '@components/Elements/Button/DaisyUIBtn';
import DaisyUIColors from '@layouts/Colors';
export type BlogCategoryProps = {
  children: React.ReactNode;
  url: string;
};

export default function({ children, url }: BlogCategoryProps) {
  return (
    <a href={`/categories/${url}`}>
      <DaisyUIBtn colors={DaisyUIColors.accent.accent}>
        {children}
      </DaisyUIBtn>
    </a>
  )
}
