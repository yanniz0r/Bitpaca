import React, { Component } from 'react'
import Sidebar from '../../components/sidebar'
import styled from 'styled-components'
import Color from '../../components/styles/color'
import Toolbar from '../../components/toolbar'

const PageWrapper = styled.div`
  display: flex;
`

const SidebarSection = styled.div`
  width: 25%;
`

const MainSection = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
class DesignerPage extends Component {

  render = () => {
    return <PageWrapper>
      <SidebarSection>
        <Sidebar/>
      </SidebarSection>
      <MainSection>
        <h1>Hello!</h1>
        <Toolbar/>
      </MainSection>
    </PageWrapper>
  }

}

export default DesignerPage