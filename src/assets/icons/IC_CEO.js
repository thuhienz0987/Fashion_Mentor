import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}>
    <Circle cx={13} cy={13} r={13} fill="#EEE" />
    <Path
      fill="#292526"
      d="m11.465 9.976-3.456.5-.061.013a.541.541 0 0 0-.238.912l2.503 2.437-.59 3.443-.007.06a.542.542 0 0 0 .793.51l3.09-1.624 3.084 1.625.054.024a.54.54 0 0 0 .733-.595l-.591-3.443 2.504-2.437.043-.046a.542.542 0 0 0-.343-.878l-3.456-.501-1.545-3.131a.541.541 0 0 0-.972 0l-1.545 3.13Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
