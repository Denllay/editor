'use client';

import { useRef } from 'react';
import { Elements } from '@entities/elements';
import Moveable from 'react-moveable';
import { CreateElementButton, MoveableElements } from '@features/elements';
import styles from './styles.module.css';
import { Link } from '@shared/ui';
import dynamic from 'next/dynamic';

const Selecto = dynamic(() => import('@features/elements').then((module) => module.Selecto), { ssr: false });

export const Editor = () => {
  const moveableRef = useRef<Moveable>(null);

  return (
    <div className={styles.main}>
      <Link href="/preview">Preview</Link>

      <svg className={styles.viewport} xmlns="http://www.w3.org/2000/svg">
        <Elements />
      </svg>

      <MoveableElements ref={moveableRef} />
      <Selecto moveableRef={moveableRef} selectableTargets={[`.elements`]} />

      <CreateElementButton />
    </div>
  );
};
