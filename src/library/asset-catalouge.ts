import Asset from './asset'
import * as DesignPositions from './design-positions'

export const body1 = new Asset('body/body1.png', { x: 1381, y: 1968 }, { x: 300, y: 20}, DesignPositions.body)
export const body2 = new Asset('body/body2.png', { x: 1381, y: 1968 }, { x: 300, y: 20}, DesignPositions.body)
export const blanket1 = new Asset('accessories/blanket.png', { x: 624, y: 384 }, { x: 800, y: 880}, DesignPositions.back)
export const garland1 = new Asset('accessories/garland.png', { x: 540, y: 484 }, { x: 320, y: 550}, DesignPositions.neck)