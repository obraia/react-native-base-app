import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IProps {
  colorPrimary?: string;
  colorSecondary?: string;
}

const DatabaseDual = ({ colorPrimary, colorSecondary }: IProps) => {
  const width = 31;
  const height = 35;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Path fill={colorSecondary} d="M30.625 4.9998V8.1252C30.625 10.8787 23.7665 13.125 15.3125 13.125C6.8585 13.125 0 10.8787 0 8.1252V4.9998C0 2.24629 6.8585 0 15.3125 0C23.7665 0 30.625 2.24629 30.625 4.9998Z" />
      <Path fill={colorPrimary} d="M0 22.9688V30.0002C0 32.7537 6.8585 35 15.3125 35C23.7665 35 30.625 32.7537 30.625 30.0002V22.9688C27.3349 25.2342 21.3138 26.289 15.3125 26.289C9.31123 26.289 3.28945 25.2342 0 22.9688ZM15.3125 15.3515C9.31123 15.3515 3.28945 14.2967 0 12.0312V19.0627C0 21.8162 6.8585 24.0625 15.3125 24.0625C23.7665 24.0625 30.625 21.8162 30.625 19.0627V12.0312C27.3349 14.2967 21.3138 15.3515 15.3125 15.3515Z" />
    </Svg>
  );
}

export default DatabaseDual;