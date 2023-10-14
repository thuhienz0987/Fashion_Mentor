import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={7}
    fill="none"
    {...props}>
    <Path
      fill="#F3F3F3"
      d="M3.5 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm-.325 1.953a.244.244 0 0 0-.245.245V4.15c0 .135.11.244.244.244h1.954a.244.244 0 1 0 0-.488h-1.71v-1.71a.244.244 0 0 0-.244-.244Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
