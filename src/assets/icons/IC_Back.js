import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}>
    <Circle cx={17.5} cy={17.5} r={17.5} fill="#292526" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M18.16 17.993v-.354c-.01-1.404-.09-2.657-.24-3.451 0-.015-.16-.802-.26-1.064a1.9 1.9 0 0 0-.81-.905 2.001 2.001 0 0 0-.91-.219c-.25.012-.66.137-.95.242l-.25.094c-1.61.642-4.7 2.741-5.89 4.024l-.09.09-.38.42c-.25.321-.38.715-.38 1.138 0 .379.12.758.35 1.064.07.099.18.226.28.334l.38.397c1.3 1.321 4.12 3.175 5.59 3.789 0 .014.91.394 1.34.408H16c.66 0 1.28-.379 1.6-.991.09-.168.17-.496.24-.784l.11-.544c.13-.874.21-2.216.21-3.688Zm6.34 1.525c.83 0 1.5-.679 1.5-1.518 0-.838-.67-1.517-1.5-1.517l-3.7.327c-.65 0-1.18.532-1.18 1.19 0 .658.53 1.191 1.18 1.191l3.7.327Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
