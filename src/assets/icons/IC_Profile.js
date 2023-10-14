import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}>
    <Path
      fill="#F3F3F3"
      fillRule="evenodd"
      d="M11.5 12.937a3.833 3.833 0 1 0 0-7.666 3.833 3.833 0 0 0 0 7.666Zm0-.958a2.875 2.875 0 1 0 0-5.75 2.875 2.875 0 0 0 0 5.75Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F3F3F3"
      fillRule="evenodd"
      d="M21.083 11.5a9.583 9.583 0 0 1-9.583 9.583A9.583 9.583 0 0 1 1.917 11.5 9.583 9.583 0 0 1 11.5 1.917a9.583 9.583 0 0 1 9.583 9.583Zm-4.969 7.288a8.585 8.585 0 0 1-4.614 1.337 8.586 8.586 0 0 1-4.711-1.4 33.185 33.185 0 0 1-.35-.445c-.137-.18-.21-.4-.21-.625 0-.516.371-.949.867-1.021 3.28-.48 5.538-.438 8.822.017a.995.995 0 0 1 .853.99c0 .23-.08.454-.222.629-.147.179-.292.352-.435.518Zm1.608-1.315a1.952 1.952 0 0 0-1.672-1.772c-3.362-.465-5.712-.51-9.093-.016-.92.135-1.598.89-1.678 1.79a8.625 8.625 0 1 1 12.443 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
