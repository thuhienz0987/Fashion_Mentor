import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}>
    <Path
      fill="#7F7E7F"
      d="M7.5 1.25c-2.625 0-5 2.013-5 5.125 0 1.988 1.531 4.325 4.588 7.019a.636.636 0 0 0 .83 0C10.969 10.7 12.5 8.363 12.5 6.375c0-3.112-2.375-5.125-5-5.125Zm0 6.25c-.688 0-1.25-.563-1.25-1.25C6.25 5.562 6.813 5 7.5 5c.688 0 1.25.563 1.25 1.25 0 .688-.563 1.25-1.25 1.25Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
