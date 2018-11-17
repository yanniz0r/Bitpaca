import React, { Component } from 'react'  
import styled from 'styled-components'
import { body1, blanket1 } from '../../library/asset-catalouge'
import Dimension from '../../library/dimension'
import background from '../../assets/backgrounds/mountains.png'


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

class DesignPreview extends Component {

  private canvas: HTMLCanvasElement
  private canvasContext: CanvasRenderingContext2D

  public componentDidMount = () => {
    this.canvasContext = this.canvas.getContext('2d')
    const canvasDimension: Dimension = { x: 2000, y: 2000 }
    this.canvas.width = canvasDimension.x
    this.canvas.height = canvasDimension.y

    const assets = [
      body1,
      blanket1
    ]

    assets.forEach(asset => {
      asset.getImage().onload = () => {
        this.canvasContext.drawImage(
          asset.getImage(), 
          asset.getPosition().x, 
          asset.getPosition().y, 
          asset.getDimension(canvasDimension).x, 
          asset.getDimension(canvasDimension).y
        )
      }
    })
  }

  public render = () => {
    return <DPWrapper>
        <Canvas ref={ref => this.canvas = ref}></Canvas>
      </DPWrapper>
  }

}

export default DesignPreview