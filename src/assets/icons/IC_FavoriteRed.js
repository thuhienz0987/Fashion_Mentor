import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <Circle cx={15} cy={15} r={15} fill="#F6F4F4" fillOpacity={0.5} />
    <Path
      fill="#ff0000"
      d="M22 13.875c0 4.375-6.487 7.916-6.763 8.063a.5.5 0 0 1-.474 0C14.487 21.79 8 18.25 8 13.874A3.88 3.88 0 0 1 11.875 10c1.29 0 2.42.555 3.125 1.493.704-.938 1.834-1.493 3.125-1.493A3.88 3.88 0 0 1 22 13.875Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
