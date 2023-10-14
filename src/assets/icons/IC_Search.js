import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.482 15.964A7.482 7.482 0 1 0 8.482 1a7.482 7.482 0 0 0 0 14.964ZM13.686 14.074 16.619 17"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
