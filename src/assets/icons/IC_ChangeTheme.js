import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}>
    <Circle cx={25} cy={25} r={25} fill="#292526" />
    <Path
      fill="#fff"
      d="M23.275 28.661h-5.918c-.749 0-1.357.598-1.357 1.334 0 .734.608 1.333 1.357 1.333h5.918c.749 0 1.357-.599 1.357-1.333 0-.736-.608-1.334-1.357-1.334ZM34 20.04c0-.734-.608-1.331-1.356-1.331h-5.918c-.749 0-1.357.597-1.357 1.332 0 .736.608 1.333 1.357 1.333h5.918c.748 0 1.356-.597 1.356-1.333Z"
      opacity={0.4}
    />
    <Path
      fill="#fff"
      d="M22.19 20.04c0 1.68-1.385 3.042-3.095 3.042-1.709 0-3.095-1.361-3.095-3.041S17.386 17 19.095 17c1.71 0 3.095 1.362 3.095 3.04ZM34 29.96c0 1.678-1.385 3.04-3.095 3.04-1.709 0-3.095-1.362-3.095-3.04 0-1.68 1.386-3.042 3.095-3.042 1.71 0 3.095 1.361 3.095 3.041Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
