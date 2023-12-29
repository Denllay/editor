import { createEvent, createStore } from 'effector';
import { Element, ElementId } from '.';
import merge from 'deepmerge';
export const elementsUpdated = createEvent<Element[]>();
export const assignElementsProps = createEvent<[ElementId, Element['props']][]>();

const $elementsMap = createStore<Map<ElementId, Element>>(new Map());

$elementsMap.on(elementsUpdated, (elementsMap, updatedElements) => {
  for (const updatedElement of updatedElements) {
    elementsMap.set(updatedElement.id, updatedElement);
  }

  return new Map(elementsMap.entries());
});

$elementsMap.on(assignElementsProps, (elementsMap, elements) => {
  console.log(elements, elementsMap);
  for (const [id, props] of elements) {
    const oldElement = elementsMap.get(id)!;

    const updatedElement = {
      ...oldElement,
      props: merge(oldElement.props, props),
    };

    elementsMap.set(id, updatedElement);
  }
  return new Map(elementsMap.entries());
});

export const $elements = $elementsMap.map<Element[]>((elementsMap) => Array.from(elementsMap.values()));
