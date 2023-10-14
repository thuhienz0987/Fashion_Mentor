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
      fill="#292526"
      fillRule="evenodd"
      d="M8.52 20a11.48 11.48 0 1 1 22.96 0 11.48 11.48 0 0 1-22.96 0ZM20 10.167a9.833 9.833 0 0 0-7.268 16.456A8.617 8.617 0 0 1 20 22.643a8.616 8.616 0 0 1 7.268 3.98A9.833 9.833 0 0 0 20 10.167Zm6.035 17.597A6.973 6.973 0 0 0 20 24.29a6.973 6.973 0 0 0-6.036 3.474A9.79 9.79 0 0 0 20 29.834a9.8 9.8 0 0 0 6.035-2.07Zm-10.108-9.489a4.073 4.073 0 1 1 8.146 0 4.073 4.073 0 0 1-8.146 0ZM20 15.85a2.425 2.425 0 0 0-.929 4.668A2.427 2.427 0 1 0 20 15.85Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
