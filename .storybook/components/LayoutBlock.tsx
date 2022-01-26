import React from 'react';
import tokens from '@project-name/core-tokens';

export default function LayoutBlock(props) {
  return (
    <div
      style={{ background: tokens.color.brand[props.color || 'project-name-blue'].value, height: 100 }}
    />
  );
}
