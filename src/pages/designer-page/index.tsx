import React, { Component } from 'react'
import Sidebar from '../../components/sidebar'
import styled from 'styled-components'
import Color from '../../components/styles/color'
import Toolbar from '../../components/toolbar'
import DesignPreview from '../../components/design-preview'

const PageWrapper = styled.div`
  display: flex;
`

const SidebarSection = styled.div`
  width: 25%;
`

const MainSection = styled.div`
  width: 75%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
`
class DesignerPage extends Component {

  render = () => {
    return <PageWrapper>
      <SidebarSection>
        <Sidebar/>
      </SidebarSection>
      <MainSection>
        <DesignPreview/>
        <Toolbar/>
      </MainSection>
    </PageWrapper>
  }

}

export default DesignerPage