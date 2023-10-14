import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}>
    <Path
      stroke="#F3F3F3"
      strokeWidth={0.938}
      d="M1.917 11.695c0-2.193 0-3.29.498-4.198.496-.91 1.406-1.473 3.224-2.602l1.917-1.19c1.921-1.192 2.882-1.788 3.944-1.788 1.062 0 2.022.596 3.944 1.789l1.917 1.19c1.818 1.128 2.728 1.692 3.225 2.601.497.909.497 2.005.497 4.197v1.46c0 3.737 0 5.606-1.123 6.768-1.122 1.161-2.93 1.161-6.543 1.161H9.583c-3.614 0-5.42 0-6.543-1.161-1.123-1.162-1.123-3.03-1.123-6.769v-1.458Z"
    />
    <Path
      stroke="#F3F3F3"
      strokeLinecap="round"
      strokeWidth={0.938}
      d="M11.5 14.375v2.875"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
