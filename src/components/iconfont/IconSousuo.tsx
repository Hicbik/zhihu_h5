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

export const IconSousuo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M850.39104 818.11456l-145.67424-142.80704a308.71552 308.71552 0 0 0 87.42912-214.87616c-2.62144-174.53056-145.5104-314.32704-320.06144-313.15968-174.67392-1.31072-317.68576 138.50624-320.3072 313.18016 2.47808 174.75584 145.53088 314.75712 320.32768 313.42592a322.21184 322.21184 0 0 0 169.82016-48.2304l151.01952 147.84512 58.4704-54.19008c-0.36864-0.38912-0.63488-0.8192-1.024-1.18784z m-209.01888-192.08192c-94.33088 91.46368-244.26496 91.46368-338.59584 0a230.56384 230.56384 0 0 1 0-331.1616c94.33088-91.46368 244.26496-91.46368 338.59584 0a231.0144 231.0144 0 0 1 0 331.1616z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSousuo.defaultProps = {
  size: 16,
};

export default IconSousuo;
