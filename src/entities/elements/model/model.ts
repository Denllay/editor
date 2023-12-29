import { createEvent, createStore } from 'effector';
import { Element } from '.';

export const elementCreated = createEvent<Element>();

export const $elements = createStore<Element[]>([
  { type: 'rect', props: { width: '100', height: '100' }, id: 'testud' },
]);

$elements.on(elementCreated, (elements, element) => [...elements, element]);
