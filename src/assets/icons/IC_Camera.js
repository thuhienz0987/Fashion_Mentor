import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Circle cx={12.5} cy={12.5} r={12} stroke="#EEE" />
    <Path
      stroke="#000"
      strokeWidth={0.938}
      d="M12.5 14.815a1.736 1.736 0 1 0 0-3.472 1.736 1.736 0 0 0 0 3.472Z"
    />
    <Path
      stroke="#000"
      strokeWidth={0.938}
      d="M11.213 17.708h2.572c1.806 0 2.71 0 3.358-.425.28-.184.521-.42.71-.697.433-.636.433-1.523.433-3.297 0-1.773 0-2.66-.433-3.297a2.55 2.55 0 0 0-.71-.696c-.416-.274-.938-.372-1.738-.407a.813.813 0 0 1-.784-.65 1.194 1.194 0 0 0-1.176-.947h-1.891c-.572 0-1.065.396-1.177.946a.813.813 0 0 1-.784.651c-.799.035-1.32.134-1.738.407-.28.183-.52.42-.709.696-.434.637-.434 1.524-.434 3.297 0 1.774 0 2.66.434 3.297.187.276.428.512.71.697.648.425 1.551.425 3.357.425Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={0.938}
      d="M16.55 11.342h-.579"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
