import { observable } from 'mobx'

class DesignPosition {

  @observable
  public location: String

  @observable
  public allowEmpty: boolean

  constructor(location: String, allowEmpty: boolean = true) {
    this.location = location
    this.allowEmpty = allowEmpty
  }

}

export default DesignPosition