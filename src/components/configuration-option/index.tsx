import React, { Component } from 'react'
import styled from 'styled-components';
import Color from '../styles/color';

export interface ConfigurationOptionProps {
  title: string
}

const COWrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  flex: 1;
  align-items: center;
  cursor: pointer;

  :hover img {
    border-color: ${Color.TurquoiseLight};
  }
`

const Title = styled.span`
  font-size: 16px;
  margin-left: 10px;
`

const Preview = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  border: solid 3px transparent;
  transition: all 0.2s;
`

class ConfigurationOption extends Component<ConfigurationOptionProps> {

  state = {
    selected: false
  }

  render = () => {
    const { title } = this.props
    return <COWrapper>
      <Preview src="https://www.rivet-expert.com/wp-content/uploads/2018/03/Placeholder.png"/>
      <Title>{ title }</Title>
    </COWrapper>
  }

}

export default ConfigurationOption