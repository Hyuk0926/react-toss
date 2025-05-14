import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import { Button } from '~/components/ui/button';

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export default function AppButton({ children, className = '', ...props }: Props) {
  return (
    <Button
      variant="plain"
      className={`h-[46px] pr-[16px] pl-[14px] text-[17px] font-[600] text-white ${className}`}
      style={{ background: 'rgba(0,12,30,0.8)' }}
      {...props}
    >
      {children || ''}
    </Button>
  );
}
