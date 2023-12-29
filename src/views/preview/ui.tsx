'use client';
import React from 'react';
import { Elements } from '@entities/elements';
import styles from './styles.module.css';
import { Link } from '@shared/ui';

export const Preview = () => {
  return (
    <div className={styles.main}>
      <Link href={'/'}>Edit</Link>

      <svg className={styles.viewport} xmlns="http://www.w3.org/2000/svg">
        <Elements />
      </svg>
    </div>
  );
};
