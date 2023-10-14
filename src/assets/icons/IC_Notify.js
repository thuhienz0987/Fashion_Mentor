import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
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
      strokeWidth={0.938}
      d="M11.25 13.5v.563a2.25 2.25 0 0 1-4.5 0V13.5m8.286-1.145c-.903-1.105-1.54-1.668-1.54-4.714 0-2.79-1.425-3.783-2.598-4.266a.626.626 0 0 1-.35-.37c-.205-.7-.782-1.317-1.548-1.317s-1.343.616-1.547 1.317a.62.62 0 0 1-.35.37c-1.174.483-2.597 1.474-2.597 4.266-.001 3.046-.639 3.609-1.542 4.714-.374.458-.046 1.145.608 1.145h10.86c.65 0 .976-.69.604-1.145Z"
    />
    <Circle cx={12.6} cy={4.5} r={1.8} fill="#FA5555" />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
