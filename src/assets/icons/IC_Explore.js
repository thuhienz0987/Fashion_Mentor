import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}>
    <Path
      stroke="#F3F3F3"
      strokeWidth={0.938}
      d="M13.257 17.268c-6.03 2.41-9.046 3.618-10.768 2.447a3.916 3.916 0 0 1-1.037-1.037c-1.17-1.723.035-4.738 2.447-10.768.515-1.286.773-1.93 1.214-2.434.113-.129.234-.25.363-.363.505-.441 1.148-.7 2.434-1.214 6.03-2.412 9.045-3.618 10.768-2.447.408.277.76.63 1.037 1.037 1.17 1.723-.036 4.737-2.447 10.768-.515 1.286-.773 1.93-1.214 2.434a4.02 4.02 0 0 1-.363.363c-.505.441-1.148.7-2.434 1.214Z"
    />
    <Path
      stroke="#F3F3F3"
      strokeWidth={0.938}
      d="M10.584 13.459a2.875 2.875 0 1 0 0-5.75 2.875 2.875 0 0 0 0 5.75Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
