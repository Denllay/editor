'use client';

import { useUnit } from 'effector-react';
import { RefObject } from 'react';
import Moveable from 'react-moveable';
import UiSelecto from 'react-selecto';
import { moveableElementsModel } from '..';

interface Props {
  moveableRef: RefObject<Moveable>;
  selectableTargets: string[];
}

export const Selecto = ({ moveableRef, selectableTargets }: Props) => {
  const updateElements = useUnit(moveableElementsModel.moveableElementsUpdated);

  return (
    <UiSelecto
      dragContainer={'.viewport'}
      selectableTargets={selectableTargets}
      hitRate={0}
      selectByClick={true}
      selectFromInside={false}
      toggleContinueSelect={['shift']}
      ratio={0}
      onDragStart={(e) => {
        const moveable = moveableRef.current!;
        const target = e.inputEvent.target;

        if (moveable.isMoveableElement(target)) {
          e.stop();
        }
      }}
      onSelectEnd={(e) => {
        const moveable = moveableRef.current!;
        if (e.isDragStart) {
          e.inputEvent.preventDefault();

          moveable.waitToChangeTarget().then(() => {
            moveable.dragStart(e.inputEvent);
          });
        }
        updateElements(e.selected.map((el) => `#${el.id}`));
      }}
    ></UiSelecto>
  );
};
