'use client';

import { useEffect, useRef, useState } from 'react';
import { Elements } from '@entities/elements';
import Moveable from 'react-moveable';
import { CreateElementButton, MoveableElements } from '@features/elements';
import styles from './styles.module.css';
import { Link } from '@shared/ui';
import dynamic from 'next/dynamic';

const Selecto = dynamic(() => import('@features/elements').then((module) => module.Selecto), { ssr: false });

export const Editor = () => {
  const [bound, setBound] = useState<DOMRect | null>(null);
  const viewportRef = useRef<SVGSVGElement>(null);
  const moveableRef = useRef<Moveable>(null);

  useEffect(() => {
    setBound(viewportRef.current?.getBoundingClientRect()!);
  }, [viewportRef]);

  return (
    <div className={styles.main}>
      <Link href="/preview">Preview</Link>

      <svg ref={viewportRef} className={styles.viewport} xmlns="http://www.w3.org/2000/svg">
        <Elements />
      </svg>

      <MoveableElements
        bounds={{ position: 'client', bottom: bound?.bottom, left: bound?.left, right: bound?.right, top: bound?.top }}
        ref={moveableRef}
      />
      <Selecto moveableRef={moveableRef} selectableTargets={[`.elements`]} />

      <CreateElementButton />
    </div>
  );
};
