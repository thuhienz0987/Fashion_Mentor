import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <Circle cx={15} cy={15} r={15} fill="#F6F4F4" fillOpacity={0.5} />
    <Path
      fill="#fff000"
      fillRule="evenodd"
      d="M21.125 14.936v3.12c0 1.936 0 2.904-.459 3.326a1.399 1.399 0 0 1-.79.363c-.616.07-1.337-.567-2.777-1.841-.638-.563-.956-.845-1.324-.919a1.391 1.391 0 0 0-.55 0c-.369.074-.687.356-1.324.919-1.44 1.274-2.161 1.912-2.778 1.84a1.4 1.4 0 0 1-.79-.361c-.458-.423-.458-1.39-.458-3.326v-3.121c0-2.68 0-4.02.824-4.853.824-.833 2.15-.833 4.801-.833 2.652 0 3.977 0 4.801.832.824.834.824 2.174.824 4.854Zm-7.969-3.186a.47.47 0 0 1 .469-.469h3.75a.47.47 0 0 1 0 .938h-3.75a.47.47 0 0 1-.469-.469Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
