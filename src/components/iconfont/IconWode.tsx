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

export const IconWode: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1016.83 944.128c0 21.504-17.408 38.912-38.912 38.912-21.504 0-38.912-17.408-38.912-38.912v-20.992c0-97.28-198.144-235.008-425.472-235.008-180.736 0-428.544 115.712-428.544 230.912v25.088c0 21.504-17.408 38.912-38.912 38.912S7.166 965.632 7.166 944.128v-48.64c0-58.368 86.528-207.872 322.56-263.168-84.992-58.368-141.312-156.16-141.312-267.264 0-178.688 144.896-323.584 323.584-323.584 178.688 0 323.584 144.896 323.584 323.584 0 109.056-54.272 205.312-137.216 264.192 238.592 53.248 318.464 210.432 318.464 266.24v48.64zM757.76 364.544c0-135.68-110.08-245.76-245.76-245.76s-245.76 110.08-245.76 245.76S376.32 610.304 512 610.304s245.76-110.08 245.76-245.76z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconWode.defaultProps = {
  size: 16,
};

export default IconWode;
