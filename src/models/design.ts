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

  @action
  public reset() {
    this.configuration.forEach((_, position) => {
      this.configuration.delete(position)
    })
  }

  @computed
  public get loading() {
    let loading = false
    this.configuration.forEach(function(asset) {
      loading = loading || asset.loading
    })
    return loading
  }

  @computed
  public get assets() {
    const assets: Asset[] = []
    this.configuration.forEach((asset) => {
      assets.push(asset)
    })
    return assets
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