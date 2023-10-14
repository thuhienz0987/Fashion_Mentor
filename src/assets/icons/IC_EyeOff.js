import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={21}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 4.496c.97-.245 1.982-.369 3-.366 4.182 0 7.028 1.99 8.725 3.745.85.881 1.275 1.32 1.275 2.625 0 1.306-.425 1.745-1.275 2.625C19.028 14.88 16.182 16.87 12 16.87c-4.182 0-7.028-1.99-8.725-3.745C2.425 12.245 2 11.805 2 10.5c0-1.306.425-1.745 1.275-2.625A13.022 13.022 0 0 1 5 6.376"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M15 10.5c0 .634-.316 1.241-.879 1.69-.562.447-1.325.699-2.121.699s-1.559-.252-2.121-.7C9.316 11.741 9 11.134 9 10.5c0-.634.316-1.241.879-1.69.562-.447 1.325-.699 2.121-.699s1.559.252 2.121.7c.563.448.879 1.055.879 1.689Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
