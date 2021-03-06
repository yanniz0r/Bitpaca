import React, { Component } from 'react'
import styled from 'styled-components'
import Color from '../styles/color'
import { inject } from 'mobx-react'
import Design from '../../models/design'

const ToolbarWrapper = styled.div`
  background: ${Color.GreyDark};
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px;
`

const ToolbarAction = styled.button`
  background: ${Color.GreyLight};
  color: ${Color.White};
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
`

const Seperator = styled.div`
  background: rgba(0,0,0,0.25);
  align-self: stretch;
  width: 1px;
  margin: 0 10px;
`

export interface ToolbarProps {
  design?: Design
}

@inject('design')
class Toolbar extends Component<ToolbarProps> {

  reset = () => {
    const { design } = this.props
    design.reset()
  }

  render = () => {
    return <ToolbarWrapper>
        <ToolbarAction onClick={this.reset}>Reset</ToolbarAction>
        <Seperator/>
        <ToolbarAction>🏞</ToolbarAction>
        <ToolbarAction>🌅</ToolbarAction>
        <ToolbarAction>🌄</ToolbarAction>
        <Seperator/>
        <ToolbarAction>Revert</ToolbarAction>
        <ToolbarAction>Redo</ToolbarAction>
      </ToolbarWrapper>
  }

}

export default Toolbar