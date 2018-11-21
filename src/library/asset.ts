import Dimension from './dimension'
import DesignPosition from './design-position'
import { observable, action, runInAction } from 'mobx';

class Asset {

  private imagePath: string
  private image: HTMLImageElement = new Image()
  private dimension: Dimension
  private location: Dimension
  private position: DesignPosition

  @observable
  public loading: boolean = true

  constructor(path: string, dimension: Dimension, location: Dimension, position: DesignPosition) {
    this.imagePath = require(`../assets/alpaca/${path}`)
    this.image.src = this.imagePath
    this.image.onload = this.onImageLoad
    this.dimension = dimension
    this.location = location
    this.position = position
  }

  @action
  public onImageLoad() {
    this.loading = false
  }

  public getImagePath = () => this.imagePath

  public getDimension = (canvasDimension: Dimension = null) => {
    return this.dimension
  }

  public getLocation = () => this.location

  public getPosition = () => this.position

  public getImage = () => this.image

}

export default Asset