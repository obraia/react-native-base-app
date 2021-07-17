import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IProps {
  color?: string;
}

const AdjustSolid = ({ color }: IProps) => {
  const width = 15;
  const height = 15;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Path fill={color} d="M0 7.5C0 11.6421 3.35785 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35788 11.6421 0 7.5 0C3.35788 0 0 3.35785 0 7.5ZM7.5 13.0645V1.93548C10.5758 1.93548 13.0645 4.42473 13.0645 7.5C13.0645 10.5758 10.5753 13.0645 7.5 13.0645Z" />
    </Svg>
  );
}

export default AdjustSolid;