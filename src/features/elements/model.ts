import { elementsModel } from '@entities/elements';
import { createEffect, createEvent, createStore, sample } from 'effector';

export const moveableElementsUpdated = createEvent<string[]>();

export const moveableElements = createStore<string[]>([]);

moveableElements.on(moveableElementsUpdated, (_, elements) => elements);

export const createElementFx = createEffect(
  (id: string): elementsModel.Element => ({ id, props: { width: '100', height: '100' }, type: 'rect' })
);

sample({
  clock: createElementFx.doneData,
  target: elementsModel.elementCreated,
});
