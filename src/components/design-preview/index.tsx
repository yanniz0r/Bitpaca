import React, { Component } from 'react'  
import styled from 'styled-components'
import alpacaBody from '../../assets/alpaca/body/body.png'

const DPWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Canvas = styled.canvas`
  max-height: 90%;
  max-width: 90%;
  overflow: hidden;
`

class DesignPreview extends Component {

  private canvas: HTMLCanvasElement
  private canvasContext: CanvasRenderingContext2D

  public componentDidMount = () => {
    this.canvasContext = this.canvas.getContext('2d')
    this.canvas.width = 2000
    this.canvas.height = 2000
    const image = new Image()
    image.src = alpacaBody
    image.onload = () => {
      this.canvasContext.drawImage(image, 0, 0, 2000, 2000)
    }
  }

  public render = () => {
    return <DPWrapper>
        <Canvas ref={ref => this.canvas = ref}></Canvas>
      </DPWrapper>
  }

}

export default DesignPreview