import React from 'react';
import styled from 'styled-components';
import { svgs } from '../../utilities';

const Svg = styled.svg`
  width: auto;
  height: 100%;

  &.down {
    transform: rotate(90deg);
  }

  &.up {
    transform: rotate(-90deg);
  }

  &.left {
    transform: rotate(-270deg);
  }

  &.right {
    transform: rotate(-90deg);
  }
`;

const Icon = props => {
  return (
    <Svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={props.onClick}
      viewBox={`0 0 ${props.height || '24'} ${props.width || '24'}`}
    >
      <title>{svgs[props.icon].title}</title>
      {svgs[props.icon].path.map((item, index) => {
        return <path key={index} d={item} />;
      })}
    </Svg>
  );
};

export default Icon;
