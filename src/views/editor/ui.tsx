'use client';

import { useEffect, useRef, useState } from 'react';
import { Elements } from '@entities/elements';
import Moveable from 'react-moveable';
import { ColorPicker, CreateElementButton, MoveableElements, Selecto } from '@features/elements';
import styles from './styles.module.css';
import { Link } from '@shared/ui';

export const Editor = () => {
  const [bound, setBound] = useState<DOMRect | null>(null);
  const viewportRef = useRef<SVGSVGElement>(null);
  const moveableRef = useRef<Moveable>(null);

  useEffect(() => {
    setBound(viewportRef.current?.getBoundingClientRect()!);
  }, [viewportRef]);

  return (
    <div className={styles.main}>
      <Link href="/preview" className={styles.link}>
        &lt; Preview
      </Link>

      <div className={styles.container}>
        <ColorPicker />

        <svg ref={viewportRef} className={`${styles.viewport} viewport`} xmlns="http://www.w3.org/2000/svg">
          <Elements />
        </svg>
        <CreateElementButton />
      </div>

      <Selecto moveableRef={moveableRef} selectableTargets={[`.elements`]} />

      <MoveableElements
        bounds={{ position: 'client', bottom: bound?.bottom, left: bound?.left, right: bound?.right, top: bound?.top }}
        ref={moveableRef}
      />
    </div>
  );
};
