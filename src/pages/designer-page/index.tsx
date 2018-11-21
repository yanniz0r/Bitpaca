import React, { Component } from 'react'
import Sidebar from '../../components/sidebar'
import styled from 'styled-components'
import Toolbar from '../../components/toolbar'
import DesignPreview from '../../components/design-preview'
import DesignTree from '../../components/design-tree'

const PageWrapper = styled.div`
  display: flex;
`

const SidebarSection = styled.div`
  width: 20%;
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
      <SidebarSection>
        <DesignTree/>
      </SidebarSection>
    </PageWrapper>
  }

}

export default DesignerPage