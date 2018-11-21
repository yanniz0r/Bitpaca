import React, { Component } from 'react'
import styled from 'styled-components'
import Color from '../styles/color'
import Section from '../section'
import Font from '../styles/font'
import ConfigurationOption from '../configuration-option'
import { observer, inject } from 'mobx-react'
import Design from '../../models/design'
import * as AssetCatalouge from '../../library/asset-catalouge'

const SidebarWrapper = styled.div`
  display: flex;
  flex: 1;
  background: ${Color.RedDark};
  height: 100vh;
  flex-direction: column;
  color: ${Color.White};
`

const Top = styled.div`
  padding: 20px;
  text-align: center;
  font-family: ${Font.Secondary};
  font-size: 36px;
`

const Middle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const Bottom = styled.div` 
  padding: 10px;
`

const SaveButton = styled.button`
  background: ${Color.White};
  padding: 10px;
  border: 0;
  display: block;
  width: 100%;
  color: ${Color.RedDark};
  font-weight: bold;
  font-size: 18px;
  font-family: ${Font.Secondary};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s;

  :hover{
    opacity: 0.9;
  }
`
export interface SidebarState {
  activeSection?: string
}

export interface SidebarProps {
  design?: Design
}

@inject('design')
@observer
class Sidebar extends Component<SidebarProps, SidebarState> {

  public state: SidebarState = {

  }

  private clickHandler = (name: string) => {
    const { activeSection } = this.state
    return {
      onClick: () => this.setState({ activeSection: activeSection === name ? null : name }),
      active: activeSection === name
    }
  }

  render = () => {
    return <SidebarWrapper>
      <Top>
        BitPaca.com
      </Top>
      <Middle>
        <Section title="Body" {...this.clickHandler('body')}>
          <ConfigurationOption asset={AssetCatalouge.body1} title="Thin body"/>
          <ConfigurationOption title="Thicc body"/>
        </Section>
        <Section title="Eyes" {...this.clickHandler('eyes')}>
          <ConfigurationOption title="Lovely eyes"/>
          <ConfigurationOption title="Even lovelier eyes"/>
        </Section>
        <Section title="Ears" {...this.clickHandler('ears')}>
          <ConfigurationOption title="Stiff ears"/>
          <ConfigurationOption title="Small ears"/>
          <ConfigurationOption title="Bunny ears"/>
          <ConfigurationOption title="Huge ears"/>
        </Section>
        <Section title="Clothing" {...this.clickHandler('clothing')}>
          <ConfigurationOption title="none"/>
          <ConfigurationOption title="Teddy jacket"/>
          <ConfigurationOption title="Smoking"/>
          <ConfigurationOption title="Suit"/>
          <ConfigurationOption title="Dress"/>
        </Section>
        <Section title="Acessories" {...this.clickHandler('acessories')}>
          <ConfigurationOption asset={AssetCatalouge.blanket1} title="Blanket"/>
          <ConfigurationOption asset={AssetCatalouge.garland1} title="Garland"/>
          <ConfigurationOption title="'Stache"/>
        </Section>
      </Middle>
      <Bottom>
        <SaveButton>Save</SaveButton>
      </Bottom>
    </SidebarWrapper>
  }

}

export default Sidebar