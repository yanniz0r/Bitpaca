import { observable } from 'mobx'

class DesignPosition {

  @observable
  public location: string

  @observable
  public allowEmpty: boolean

  constructor(location: string, allowEmpty: boolean = true) {
    this.location = location
    this.allowEmpty = allowEmpty
  }

}

export default DesignPosition