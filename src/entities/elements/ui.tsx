'use client';

import { useList } from 'effector-react';
import { elementsModel } from '.';
import React from 'react';

export const Elements = () => {
  return useList(elementsModel.$elements, ({ props, type, id }) => {
    return (
      <>
        {React.createElement(type, {
          ...props,
          id,
          className: `${props.className || ''} elements`,
        })}
      </>
    );
  });
};
