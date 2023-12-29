import { SVGProps } from 'react';

export interface Element {
  type: 'rect';
  props: SVGProps<SVGElement>;
  id: string;
}
