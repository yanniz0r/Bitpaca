import React, { Component, Children } from 'react'
import styled from 'styled-components';
import Color from '../styles/color';

export interface ActivateableProps {
  active?: boolean
}

export interface SectionProps extends ActivateableProps {
  title: string
  onClick: () => void
}

const SectionWrapper = styled.div`
  transition: all 0.25s;
  background: ${(props: ActivateableProps) => props.active ? 'rgba(0,0,0,0.05)' : 'none'};
  flex-grow: ${(props: ActivateableProps) => props.active ? '1' : ''};
`

const SectionTitle= styled.div`
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
`

const SectionBody = styled.div`
  padding: 20px;
  display: ${(props: ActivateableProps) => props.active ? 'block' : 'none'};
`

class Section extends Component<SectionProps> {

  render = () => {
    const { onClick, title, active, children } = this.props
    return <SectionWrapper active={active}>
      <SectionTitle onClick={onClick}>{title}</SectionTitle>
      <SectionBody active={active}>{children}</SectionBody>
    </SectionWrapper>
  }

}

export default Section