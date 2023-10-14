import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path fill="#000" d="M3 8V7h17v1H3Zm17 4v1H3v-1h17ZM3 17h17v1H3v-1Z" />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
