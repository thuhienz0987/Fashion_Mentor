import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={9}
    fill="none"
    {...props}>
    <Path
      fill="#F3F3F3"
      d="M6.315 5.434a3.187 3.187 0 1 0-5.253.558l.004.004L1.07 6h-.008l1.892 2.008a.75.75 0 0 0 1.092 0L5.937 6H5.93l.003-.004.041-.049c.13-.16.244-.332.341-.513Zm-2.814-.278a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
