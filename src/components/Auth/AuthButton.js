import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: #228be6;
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: #339af0;
  }

  &:active {
    background: #339af0;
  }
`

const AuthButton = ({ children, onClick }) => (
  <Wrapper onClick={onClick}> {children} </Wrapper>
)

export default AuthButton
