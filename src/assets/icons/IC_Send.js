import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Circle cx={12.5} cy={12.5} r={12.5} fill="#292526" />
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill="#fff"
          d="M17.49 8.79a1 1 0 0 0-1.28-1.28l-9.737 3.522a1 1 0 0 0-.161 1.806l3.108 1.8 2.775-2.776a.667.667 0 0 1 .943.943l-2.775 2.775 1.8 3.108c.425.735 1.516.638 1.805-.16L17.49 8.79Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M4 5h16v16H4z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M4 5h16v16H4z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
