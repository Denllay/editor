'use client';
import { useUnit } from 'effector-react';
import React, { forwardRef } from 'react';
import Moveable, { BoundType } from 'react-moveable';
import { flushSync } from 'react-dom';
import { moveableElementsModel } from '..';

interface Props {
  bounds: BoundType;
}

export const MoveableElements = forwardRef<Moveable, Props>(({ bounds }, ref) => {
  const [moveableElements, updateElements] = useUnit([
    moveableElementsModel.moveableElements,
    moveableElementsModel.updateElementsUpdated,
  ]);
  console.log(bounds);
  return (
    <Moveable
      ref={ref}
      target={moveableElements}
      flushSync={flushSync}
      draggable={true}
      throttleDrag={1}
      throttleScale={1}
      edgeDraggable={false}
      startDragRotate={0}
      throttleDragRotate={0}
      onRenderEnd={updateElements}
      onRenderGroupEnd={updateElements}
      resizable={true}
      keepRatio={false}
      throttleResize={1}
      renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
      rotatable={true}
      throttleRotate={0}
      snappable={true}
      svgOrigin="50% 50%"
      bounds={bounds}
      rotationPosition={'top'}
      onDrag={(e) => {
        e.target.style.transform = e.transform;
      }}
      onDragGroup={(e) => {
        e.events.forEach((ev) => {
          ev.target.style.transform = ev.transform;
        });
      }}
      onResizeGroup={(e) => {
        e.events.forEach((e) => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
        });
      }}
      onResize={(e) => {
        e.target.style.width = `${e.width}px`;
        e.target.style.height = `${e.height}px`;
        e.target.style.transform = e.drag.transform;
      }}
      onRotateGroup={(e) => {
        e.events.forEach((e) => {
          e.target.style.transform = e.drag.transform;
        });
      }}
      onRotate={(e) => {
        e.target.style.transform = e.drag.transform;
      }}
    />
  );
});
