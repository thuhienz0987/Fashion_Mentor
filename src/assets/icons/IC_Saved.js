import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <Circle cx={20} cy={20} r={20} fill="#D9D9D9" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 19.098v4.993c0 3.096 0 4.645.734 5.321.35.323.792.526 1.263.58.987.113 2.14-.907 4.445-2.946 1.02-.901 1.529-1.352 2.118-1.47.29-.06.59-.06.88 0 .59.118 1.099.569 2.118 1.47 2.305 2.039 3.458 3.059 4.445 2.945.47-.053.913-.256 1.263-.579.734-.676.734-2.224.734-5.321v-4.994c0-4.288 0-6.432-1.318-7.765C27.364 10 25.242 10 21 10c-4.243 0-6.364 0-7.682 1.332-.807.816-1.12 1.938-1.241 3.668M24 14h-6"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
