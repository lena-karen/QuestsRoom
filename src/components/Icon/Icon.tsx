import { type SVGProps } from 'react';
import { cn } from '@/utils';
import { AllIconTypes } from '../../../types/allIconTypes';

export const Icon = ({
  name,
  childClassName,
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: AllIconTypes;
  childClassName?: string;
}) => {
  return (
    <svg {...props} className={cn('inline self-center', className)}>
      <use href={`/svgs/sprite.svg#${name}`} />
    </svg>
  );
};
