import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/variables';
import { TypographyProps } from '.';

const Container = styled.div`
  color: ${colors.greyColor};
  font-size: 1.5rem;
`;

const PostDesc = (props: TypographyProps) => {
  return <Container>{props.children}</Container>;
};

export default PostDesc;