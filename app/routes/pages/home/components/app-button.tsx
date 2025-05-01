import { Button } from '~/components/ui/button';

interface Props {
  children?: React.ReactNode;
}

export default function AppButton({ children }: Props) {
  return (
    <Button
      variant="plain"
      className="pxl-[14px] h-[46px] pr-[16px] text-[17px] font-[600] text-white"
      style={{ background: 'rgba(0,12,30,0.8)' }}
    >
      {children || ''}
    </Button>
  );
}
