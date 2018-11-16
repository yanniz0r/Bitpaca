import React, { Component } from 'react'
import Sidebar from '../../components/sidebar'
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
`

const SidebarSection = styled.div`
  width: 25%;
`

const MainSection = styled.div`
  width: 75%;
`
class DesignerPage extends Component {

  render = () => {
    return <PageWrapper>
      <SidebarSection>
        <Sidebar/>
      </SidebarSection>
      <MainSection>
        <h1>Hello!</h1>
      </MainSection>
    </PageWrapper>
  }

}

export default DesignerPage