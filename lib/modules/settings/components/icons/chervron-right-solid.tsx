import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const ChervronRightSolid = ({ color }: IProps) => {
  const width = 10;
  const height = 15;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Path fill={color} d="M8.86156 8.08293L2.18592 14.7585C1.86396 15.0805 1.34199 15.0805 1.02006 14.7585L0.241461 13.9799C-0.0799481 13.6585 -0.0805663 13.1376 0.240087 12.8154L5.53065 7.49998L0.240087 2.18456C-0.0805663 1.86239 -0.0799481 1.34148 0.241461 1.02007L1.02006 0.241469C1.34202 -0.0804897 1.864 -0.0804897 2.18592 0.241469L8.86152 6.91707C9.18348 7.23899 9.18348 7.76097 8.86156 8.08293Z" />
    </Svg>
  );
}

export default ChervronRightSolid;