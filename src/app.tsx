import React, { Component } from 'react'
import GlobalStyle from './components/global-style'
import DesignerPage from './pages/designer-page';
import DevTools from 'mobx-react-devtools'
import { Provider, observer } from 'mobx-react'
import Design from './models/design'
import { observable } from 'mobx'

@observer
class App extends Component {

  @observable
  private design = new Design()

  render() {
    return <Provider design={this.design}>
        <>
          <DevTools/>
          <GlobalStyle/>
          <DesignerPage/>
        </>
      </Provider>
  }

}

export default App