import React from 'react';
import tokens from '@project-name/core-tokens';

export default function ColorBlocks(props) {
  return Object.entries(tokens.color[props.group]).map(([key, color]: any) => (
    <section
      style={{
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'stretch',
        gap: 16,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 13,
      }}
    >
      <div style={{ flex: 1, paddingTop: 16, paddingBottom: 16 }}>
        <h4>{color.title}</h4>
        <p
          style={{
            marginTop: 8,
          }}
        >
          <code>
            --color-{props.group}-{key}:{' '}
            <span style={{ textTransform: 'uppercase' }}>{color.value}</span>
            <br />
            --color-{props.group}-{key}-rgb: {color.rgb.value}
            <br />
            --color-{props.group}-{key}-rgb-raw: {color.rgb.raw.value}
          </code>
        </p>
      </div>
      <div
        style={{
          flex: 1,
          background: tokens.color[props.group][key].value,
          content: 'fit-content',
        }}
      >
        {' '}
      </div>
    </section>
  ));
}
