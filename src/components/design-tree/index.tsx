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

  public render() {
    const { design } = this.props
    return <DesignTreeWrapper>
        { design.assets.map(asset => (
          <DesignAttribute key={asset.getPosition().location} onClick={ () => design.clearPosition(asset.getPosition()) }>
            <Key>{ asset.getPosition().location }</Key>
            <Value>{  asset.getImagePath() }</Value>
          </DesignAttribute>)
          )
        }
      </DesignTreeWrapper>
  }

}

export default DesignTree