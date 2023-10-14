import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}>
    <Circle cx={13} cy={13} r={13} fill="#EEE" />
    <Path
      fill="#292526"
      d="M13.5 8.219a5.281 5.281 0 1 0 0 10.562 5.281 5.281 0 0 0 0-10.562Zm2.62 2.934-1.626 3.25a.207.207 0 0 1-.09.091l-3.25 1.625a.203.203 0 0 1-.273-.272l1.625-3.25a.207.207 0 0 1 .09-.091l3.25-1.625a.203.203 0 0 1 .273.272Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
