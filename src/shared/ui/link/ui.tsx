'use client';

import NextLink from 'next/link';
import styles from './styles.module.css';

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  href: string;
}

export const Link = ({ className, ...props }: Props) => {
  return <NextLink className={`${className} ${styles.main}`} {...props} />;
};
