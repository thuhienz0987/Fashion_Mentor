import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={25}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.055}
      d="M11.396 15.104H9.66a2.604 2.604 0 0 1 0-5.208h1.736m2.604 0h1.736a2.604 2.604 0 0 1 0 5.208H14M10.183 12.5h5.084"
    />
    <Circle cx={12.697} cy={12.5} r={12} stroke="#EEE" />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
