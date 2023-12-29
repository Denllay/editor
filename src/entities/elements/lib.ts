import { CSSProperties, DetailedHTMLFactory, StyleHTMLAttributes } from 'react';
import { Element } from './model';

const parseStyleElement = (style: CSSStyleDeclaration): CSSProperties => ({
  transform: style.transform,
  width: style.width,
  height: style.height,
});

export const parsePropsElement = (element: SVGElement | HTMLElement): Element['props'] => {
  return {
    style: parseStyleElement(element.style),
  };
};
