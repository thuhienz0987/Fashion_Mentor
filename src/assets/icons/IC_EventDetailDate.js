import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}>
    <Circle cx={13} cy={13} r={13} fill="#EEE" />
    <G clipPath="url(#a)">
      <Path
        fill="#292526"
        d="M10.144 8.625v.625h-1.07c-.592 0-1.072.42-1.072.938v.937h9.996v-.938c0-.517-.48-.937-1.07-.937h-1.072v-.625c0-.346-.319-.625-.714-.625-.395 0-.714.28-.714.625v.625h-2.856v-.625c0-.346-.319-.625-.714-.625-.395 0-.714.28-.714.625Zm7.854 3.125H8.002v5.313c0 .517.48.937 1.071.937h7.854c.591 0 1.071-.42 1.071-.938V11.75Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M8 8h10v10H8z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
