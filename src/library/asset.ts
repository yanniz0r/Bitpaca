import Dimension from './dimension'

class Asset {

  private imagePath: string
  private image: HTMLImageElement = new Image()
  private dimension: Dimension
  private position: Dimension

  constructor(path: string, dimension: Dimension, position: Dimension) {
    this.imagePath = require(`../assets/alpaca/${path}`)
    this.image.src = this.imagePath
    this.dimension = dimension
    this.position = position
  }

  public onImageLoad = (fn: () => void) => this.image.onload = fn

  public getImagePath = () => this.imagePath

  public getDimension = (canvasDimension: Dimension = null) => {
    return this.dimension
  }

  public getPosition = () => this.position

  public getImage = () => this.image

}

export default Asset