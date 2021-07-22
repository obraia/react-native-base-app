import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const DatabaseSolid = ({ color }: IProps) => {
  const width = 14;
  const height = 15;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Path fill={color} d="M13.125 2.14286V3.48214C13.125 4.66239 10.1856 5.625 6.5625 5.625C2.93944 5.625 0 4.66239 0 3.48214V2.14286C0 0.962607 2.93944 0 6.5625 0C10.1856 0 13.125 0.962607 13.125 2.14286ZM13.125 5.15625V8.16964C13.125 9.34989 10.1856 10.3125 6.5625 10.3125C2.93944 10.3125 0 9.34989 0 8.16964V5.15625C1.40991 6.12724 3.99047 6.57926 6.5625 6.57926C9.13453 6.57926 11.7151 6.12724 13.125 5.15625ZM13.125 9.84375V12.8571C13.125 14.0374 10.1856 15 6.5625 15C2.93944 15 0 14.0374 0 12.8571V9.84375C1.40991 10.8147 3.99047 11.2668 6.5625 11.2668C9.13453 11.2668 11.7151 10.8147 13.125 9.84375Z" />
    </Svg>
  );
}

export default DatabaseSolid;