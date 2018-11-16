import React, { Component } from 'react'
import styled from 'styled-components'
import Color from '../styles/color';
import Section from '../section';
import Font from '../styles/font';
import ConfigurationOption from '../configuration-option';

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

const Bottom = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export interface SidebarState {
  activeSection?: string
}

class Sidebar extends Component<{}, SidebarState> {

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
      <Bottom>
        <Section title="Body" {...this.clickHandler('body')}>
          <ConfigurationOption title="Thin body"/>
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
          <ConfigurationOption title="Glasses"/>
          <ConfigurationOption title="Monokel"/>
          <ConfigurationOption title="'Stache"/>
        </Section>
      </Bottom>
    </SidebarWrapper>
  }

}

export default Sidebar