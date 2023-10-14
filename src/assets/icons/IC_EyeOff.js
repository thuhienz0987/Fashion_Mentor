import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#1C274C"
      d="M2.69 6.705a.75.75 0 0 0-1.38.59l1.38-.59Zm6.352 7.033a.75.75 0 1 0-1.258-.818l1.258.818Zm-2.67 1.353a.75.75 0 1 0 1.257.818l-1.257-.818ZM22.69 7.295a.75.75 0 0 0-1.38-.59l1.38.59Zm-2.72 5.864a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM11.25 16.5a.75.75 0 0 0 1.5 0h-1.5Zm5.122-.591a.75.75 0 1 0 1.257-.818l-1.257.818ZM5.53 11.659A.75.75 0 0 0 4.47 10.6l1.06 1.06Zm-2.561.44a.75.75 0 0 0 1.06 1.06L2.97 12.1ZM12 13.25c-3.224 0-5.538-1.605-7.075-3.26a13.637 13.637 0 0 1-1.702-2.28 11.707 11.707 0 0 1-.507-.946 3.903 3.903 0 0 1-.026-.06L2 7l-.69.295.001.002.001.002.003.006a3.837 3.837 0 0 0 .04.088 13.202 13.202 0 0 0 .58 1.084c.41.69 1.034 1.61 1.89 2.533 1.714 1.845 4.4 3.74 8.175 3.74v-1.5Zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723l-.55-1.396Zm-7.529.29L6.372 15.09l1.257.818 1.413-2.171-1.258-.818ZM22 7l-.69-.295.001-.001v.002l-.007.013a8.017 8.017 0 0 1-.152.313 13.297 13.297 0 0 1-2.666 3.55l1.027 1.094a14.802 14.802 0 0 0 3.122-4.26l.039-.085.01-.024.004-.007v-.003l.002-.002L22 7Zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.55 1.396c1.473-.58 2.684-1.444 3.65-2.351l-1.026-1.094Zm-.017 1.077 1.5 1.5 1.06-1.06-1.5-1.5-1.06 1.06ZM11.25 14v2.5h1.5V14h-1.5Zm3.709-.262 1.413 2.171 1.257-.818-1.413-2.171-1.257.818Zm-10.49-3.14-1.5 1.5 1.062 1.061 1.5-1.5L4.47 10.6Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
