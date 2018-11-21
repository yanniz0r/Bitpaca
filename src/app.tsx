import React from 'react'
import GlobalStyle from './components/global-style'
import DesignerPage from './pages/designer-page';
import DevTools from 'mobx-react-devtools'
import { Provider } from 'mobx-react'
import Design from './models/design'

import * as AssetCatalouge from './library/asset-catalouge'
import * as DesignPositions from './library/design-positions'

const design = new Design()

const App = () => (
  <Provider design={design}>
    <>
      <DevTools/>
      <GlobalStyle/>
      <DesignerPage/>
    </>
  </Provider>
)

export default App