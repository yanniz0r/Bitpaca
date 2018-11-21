import React, { Component, ReactElement } from 'react'
import styled from 'styled-components'
import Color from '../styles/color'
import Design from '../../models/design'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx';

const DesignTreeWrapper = styled.div`
  background: ${Color.GreyDark};
  display: flex;
  flex-direction: column;
  height: 100%;
`

const DesignAttribute = styled.div`
  padding: 20px;

  :hover{
    background: ${Color.GreyLight};
  }
`

const Key = styled.span`
  color: ${Color.White};
  text-transform: uppercase;
  margin-right: 1em;
`

const Value = styled.span`
  color: ${Color.White};
  font-weight: bold;
`

export interface DesignTreeProps {
  design?: Design
}

@inject('design')
@observer
class DesignTree extends Component<DesignTreeProps> {

  @computed
  private get attributes() {
    const attributes: any[] = []
    this.props.design.configuration.forEach((asset, position) => {
      attributes.push(<DesignAttribute key={position.location} onClick={ () => this.props.design.clearPosition(position) }>
        <Key>{ position.location }</Key>
        <Value>{  asset.getImagePath() }</Value>
      </DesignAttribute>)
    })
    return attributes
  }

  public render() {
    return <DesignTreeWrapper>
        { this.attributes }
      </DesignTreeWrapper>
  }

}

export default DesignTree