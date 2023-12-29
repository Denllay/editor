import { SVGProps } from 'react';

export type ElementId = string;

export interface Element {
  type: string;
  props: SVGProps<SVGSVGElement>;
  id: ElementId;
}
