import { elementsModel, parsePropsElement } from '@entities/elements';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { SVGProps } from 'react';
import { OnRenderEnd, OnRenderGroupEnd } from 'react-moveable';

export const moveableElementsUpdated = createEvent<elementsModel.ElementId[]>();
export const updateElementsUpdated = createEvent<OnRenderGroupEnd | OnRenderEnd>();

export const moveableElements = createStore<elementsModel.ElementId[]>([]);

moveableElements.on(moveableElementsUpdated, (_, elements) => elements);

export const createElementFx = createEffect((id: elementsModel.ElementId): elementsModel.Element[] => [
  { id, props: { width: '100', height: '100' }, type: 'rect' },
]);

sample({
  clock: createElementFx.doneData,
  target: elementsModel.elementsUpdated,
});

sample({
  clock: updateElementsUpdated,
  fn: (event): [string, elementsModel.Element['props']][] => {
    if ('targets' in event) {
      return event.targets.map((element) => [element.id, parsePropsElement(element)]);
    }

    return [[event.target.id, parsePropsElement(event.target)]];
  },
  target: elementsModel.assignElementsProps,
});
