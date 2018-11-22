import React, { Component } from 'react'
import styled from 'styled-components';
import Color from '../styles/color';
import Asset from '../../library/asset';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';
import Design from '../../models/design';

export interface ConfigurationOptionProps {
  title: string
  asset?: Asset
  design?: Design
}

export interface COWrapperProps {
  selected: boolean
}

const COWrapper = styled.a`
  display: flex;
  padding: 10px 20px;
  flex: 1;
  align-items: center;
  cursor: pointer;

  div {
    border-color: ${(props: COWrapperProps) => props.selected ? Color.White : 'transparent'};
  }

  :hover div {
    border-color: ${Color.TurquoiseLight};
  }
`

const Title = styled.span`
  font-size: 16px;
  margin-left: 10px;
`

export interface PreviewProps {
  src?: string
}

const Preview = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  border: solid 3px transparent;
  transition: all 0.2s;
  background-color: ${Color.RedDark};
  background-image: url("${(props: PreviewProps) => props.src}");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`

@inject('design')
@observer
class ConfigurationOption extends Component<ConfigurationOptionProps> {

  state = {
    selected: false
  }

  private onClick = () => {
    const { asset, design } = this.props
    if(asset) {
      if(design.has(asset)) {
        design.clearPosition(asset.getPosition())
      }else{
        design.addAsset(asset)
      }
    }
  }

  @computed
  private get selected() {
    const { asset, design } = this.props
    if(asset){
      return design.configuration.get(asset.getPosition()) === asset
    }
    return false
  }

  public render() {
    const { title, asset } = this.props
    return <COWrapper onClick={this.onClick} selected={this.selected}>
      <Preview src={asset && asset.getImagePath()}/>
      <Title>{ title }</Title>
    </COWrapper>
  }

}

export default ConfigurationOption