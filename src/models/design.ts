import { observable, ObservableMap, action, computed } from 'mobx'
import DesignPosition from '../library/design-position'
import Asset from '../library/asset'

class Design {

  @observable
  public configuration = new ObservableMap<DesignPosition, Asset>()

  @action
  public clearPosition(position: DesignPosition) {
    this.configuration.delete(position)
  }

  @action
  public addAsset(asset: Asset) {
    this.configuration.set(asset.getPosition(), asset)
  }

  public has(asset: Asset) {
    return this.configuration.get(asset.getPosition()) === asset
  }

  @computed
  public get length() {
    let length = 0
    this.configuration.forEach(() => {
      length += 1
    })
    return length
  }

}

export default Design