'use client';
import { useUnit } from 'effector-react';

import { nanoid } from 'nanoid';
import { moveableElementsModel } from '..';
import styles from './styles.module.css';

export const CreateELement = () => {
  const createElement = useUnit(moveableElementsModel.createElementFx);

  return (
    <button className={styles.create_button} onClick={() => createElement(`_${nanoid()}`)}>
      + Create square
    </button>
  );
};
