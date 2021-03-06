/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends DOMAttributes<SVGElement> {
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

export const IconNv: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M631.808 565.76c1.024 16.896 15.36 29.696 31.744 29.696h2.048c70.656-4.608 101.376-57.856 108.032-84.992 4.096-16.896-6.656-33.792-23.552-37.888-16.896-4.096-34.304 6.144-38.912 23.04-1.536 5.632-10.752 33.28-49.664 35.84-17.408 1.536-30.72 16.896-29.696 34.304zM331.776 580.608c0 12.8 10.752 23.552 23.552 23.552 12.8 0 23.552-10.752 23.552-23.552 0-12.8-10.752-23.552-23.552-23.552-12.8 0-23.552 10.752-23.552 23.552z"
        fill={getIconColor(color, 0, '#F120FF')}
      />
      <path
        d="M768 137.728c-14.848-9.728-34.816-5.12-44.032 9.728-9.728 14.848-5.12 34.816 9.728 44.032C809.472 240.128 855.04 322.56 855.04 412.672c0 143.872-117.248 261.12-261.12 261.12-65.024 0-127.488-24.064-175.104-67.584-13.312-11.776-33.28-10.752-45.056 2.048-1.024 1.536-1.536 3.072-2.56 4.608l-82.944 82.944-97.28-97.28c-12.288-12.288-32.768-12.288-45.568 0s-12.288 32.768 0 45.568l97.28 97.28-148.48 148.48c-12.288 12.288-12.288 32.768 0 45.568 6.144 6.144 14.336 9.216 22.528 9.216 8.704 0 16.896-3.584 22.528-9.216l148.48-148.48 97.28 97.28c6.144 6.144 14.336 9.216 22.528 9.216 8.704 0 16.896-3.584 22.528-9.216 12.288-12.288 12.288-32.768 0-45.568l-97.28-97.28 67.072-67.072c55.808 41.472 123.392 64 193.536 64 179.2 0 325.12-145.92 325.12-325.12 0.512-112.64-55.808-215.552-150.528-275.456z"
        fill={getIconColor(color, 1, '#F120FF')}
      />
      <path
        d="M323.072 557.056c4.096 0 8.192-1.024 12.288-2.56 16.384-6.656 24.064-25.6 17.408-41.984-13.312-31.744-19.968-65.024-19.968-99.84 0-143.872 117.248-261.12 261.12-261.12 14.336 0 28.672 1.024 43.008 3.584l15.36 3.072c17.408 4.096 34.304-6.656 38.4-24.064 4.096-17.408-6.656-34.304-24.064-38.4-6.656-1.536-12.8-2.56-19.456-3.584-17.408-3.072-35.328-4.608-53.248-4.608-179.2 0-325.12 145.92-325.12 325.12 0 43.52 8.192 85.504 25.088 124.928 4.608 12.288 16.384 19.456 29.184 19.456z"
        fill={getIconColor(color, 2, '#F120FF')}
      />
    </svg>
  );
};

IconNv.defaultProps = {
  size: 16,
};

export default IconNv;
