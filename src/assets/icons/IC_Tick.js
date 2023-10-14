import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={53}
    height={53}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M0 26.5a26.5 26.5 0 1 1 53 0 26.5 26.5 0 0 1-53 0Zm24.988 11.342 15.257-19.073-2.756-2.205-13.01 16.257-9.215-7.678-2.261 2.714 11.985 9.989v-.004Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h53v53H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
