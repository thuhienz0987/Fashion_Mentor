import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    fill="none"
    {...props}>
    <Circle cx={39} cy={39} r={39} fill="#292526" />
    <Path
      fill="#fff"
      d="M39 23.74a2.12 2.12 0 0 1 2.12 2.119v12.717h12.717a2.12 2.12 0 1 1 0 4.24H41.119v12.717a2.12 2.12 0 1 1-4.239 0V42.815H24.163a2.12 2.12 0 0 1 0-4.239H36.88V25.86a2.12 2.12 0 0 1 2.12-2.12Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
