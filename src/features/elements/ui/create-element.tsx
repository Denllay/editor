'use client';
import { useUnit } from 'effector-react';

import { nanoid } from 'nanoid';
import { moveableElementsModel } from '..';

export const CreateELement = () => {
  const createElement = useUnit(moveableElementsModel.createElementFx);

  return <button onClick={() => createElement(`_${nanoid()}`)}>Create square</button>;
};
