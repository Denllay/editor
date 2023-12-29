'use client';
import { SliderPicker } from 'react-color';
import styles from './styles.module.css';
import { useState } from 'react';
import { useUnit } from 'effector-react';
import { moveableElementsModel } from '..';

export const ColorPicker = () => {
  const [color, setColor] = useState('#000000');
  const updateElementsColor = useUnit(moveableElementsModel.updateElementsColor);

  return (
    <SliderPicker
      color={color}
      onChangeComplete={(color) => {
        setColor(color.hex);
        updateElementsColor(color.hex);
      }}
      className={styles.color_picker}
    />
  );
};
