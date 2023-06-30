import React, { PropsWithChildren } from 'react'
import { Pane } from 'evergreen-ui'

type ContainerProps = { 
  styles?: React.CSSProperties
} 

const Container = ({ children, ...styles }:PropsWithChildren<ContainerProps>) => (
  <Pane maxWidth="960px" marginX="auto" width="100%" {...styles}>
    {children}
  </Pane>
)

export default Container
