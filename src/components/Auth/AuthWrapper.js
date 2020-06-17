import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ShadowedBox = styled.div`
  width: 500px;
`

const LogoWrapper = styled.div`
  background: #1890ff;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled(Link)`
  color: white;
  font-family: 'Rajdhani';
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`

const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`

const AuthWrapper = ({ children }) => (
  <Positioner>
    <ShadowedBox>
      <LogoWrapper>
        <Logo to="/">TheSource</Logo>
      </LogoWrapper>
      <Contents> {children} </Contents>
    </ShadowedBox>
  </Positioner>
)

export default AuthWrapper
