import React, { Component } from 'react'  
import styled from 'styled-components'
import { body1, blanket1 } from '../../library/asset-catalouge'
import Dimension from '../../library/dimension'
import background from '../../assets/backgrounds/mountains.png'
import { inject, observer } from 'mobx-react'
import Design from '../../models/design'
import { autorun } from 'mobx';

const DPWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background});
  background-size: cover;
`

const Canvas = styled.canvas`
  max-height: 90%;
  max-width: 90%;
  overflow: hidden;
`

export interface DesignPreviewProps {
  design?: Design
}

@inject('design')
@observer
class DesignPreview extends Component<DesignPreviewProps> {

  private canvas: HTMLCanvasElement
  private canvasContext: CanvasRenderingContext2D
  private disposer: () => any

  public renderAssets() {
    const { design } = this.props
    design.assets.forEach((asset) => {
      console.log(asset.loading)
      this.canvasContext.drawImage(
        asset.getImage(), 
        asset.getLocation().x, 
        asset.getLocation().y, 
        asset.getDimension().x, 
        asset.getDimension().y
      )
    })
  }

  private resetCanvas() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public componentDidMount() {
    const { design } = this.props
    if(design.loading) return
    this.canvasContext = this.canvas.getContext('2d')
    const canvasDimension: Dimension = { x: 2000, y: 2000 }
    this.canvas.width = canvasDimension.x
    this.canvas.height = canvasDimension.y
    this.resetCanvas()
    this.disposer = autorun(() => {
      this.renderAssets()
    })
  }

  public componentWillUnmount() {
    if(this.disposer) this.disposer()
  }

  public render = () => {
    const { design } = this.props
    return <DPWrapper>
        { design.loading && 'Loading...'}
        { !design.loading && <Canvas ref={ref => this.canvas = ref}/> }
      </DPWrapper>
  }

}

export default DesignPreview