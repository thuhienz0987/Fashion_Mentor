import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill={props.fill}
      d="M7.5 3.75A3.75 3.75 0 0 0 3.75 7.5v1.875a.625.625 0 0 0 1.25 0V7.5A2.5 2.5 0 0 1 7.5 5h1.875a.625.625 0 0 0 0-1.25H7.5Zm8.125 0a.625.625 0 1 0 0 1.25H17.5A2.5 2.5 0 0 1 20 7.5v1.875a.625.625 0 1 0 1.25 0V7.5a3.75 3.75 0 0 0-3.75-3.75h-1.875ZM5 15.625a.625.625 0 1 0-1.25 0V17.5a3.75 3.75 0 0 0 3.75 3.75h1.875a.625.625 0 1 0 0-1.25H7.5A2.5 2.5 0 0 1 5 17.5v-1.875Zm16.25 0a.624.624 0 1 0-1.25 0V17.5a2.5 2.5 0 0 1-2.5 2.5h-1.875a.624.624 0 1 0 0 1.25H17.5a3.75 3.75 0 0 0 3.75-3.75v-1.875Zm-13.125-3.75a.625.625 0 1 0 0 1.25h8.75a.624.624 0 1 0 0-1.25h-8.75Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
