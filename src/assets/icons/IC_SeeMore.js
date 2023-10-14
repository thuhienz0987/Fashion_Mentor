import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}>
    <Circle cx={17.5} cy={17.5} r={17.5} fill="#292526" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.406}
      d="M17.5 12.453a.797.797 0 1 0 0-1.594.797.797 0 0 0 0 1.594ZM17.5 18.297a.797.797 0 1 0 0-1.594.797.797 0 0 0 0 1.594ZM17.5 24.14a.797.797 0 1 0 0-1.593.797.797 0 0 0 0 1.594Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
