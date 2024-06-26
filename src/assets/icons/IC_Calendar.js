import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"
    />
    <Path
      fill="#000"
      d="M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
);
export default SvgComponent;
