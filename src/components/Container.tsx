import React from 'react'
import styled from "styled-components"

const Container: React.FC = ({ children }) => {
  const ContainerInner = styled.h1`
  padding: 3rem;
`;
  return (
    <div className="container">
      <ContainerInner className="is-primary">
        {children}
      </ContainerInner>
    </div>
  )
}
export default Container
