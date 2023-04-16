import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp 
      className={clsx(
        'py-3 px-4 bg-purple-800 rounded-full font-semibold text-white text-sm w-full transition-colors hover:bg-purple-900 focus:ring-2',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}