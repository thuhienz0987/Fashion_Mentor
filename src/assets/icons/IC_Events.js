import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <Circle cx={20} cy={20} r={20} fill="#D9D9D9" />
    <Path
      fill="#000"
      d="M29 12.5a1.5 1.5 0 0 0-1.5-1.5h-3V9.5H23V11h-6V9.5h-1.5V11h-3a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h3v-1.5h-3v-15h3V14H17v-1.5h6V14h1.5v-1.5h3V17H29v-4.5Z"
    />
    <Path
      fill="#000"
      d="m23.75 19.25 1.912 3.703 4.088.594-3 2.883.75 4.07-3.75-1.922L20 30.5l.75-4.07-3-2.883 4.2-.594 1.8-3.703Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
