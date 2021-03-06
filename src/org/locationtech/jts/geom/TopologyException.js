import Coordinate from './Coordinate'
import RuntimeException from '../../../../java/lang/RuntimeException'
export default class TopologyException extends RuntimeException {
  constructor () {
    if (arguments.length === 1) {
      const msg = arguments[0]
      super(msg)
      RuntimeException.call(this, msg)
    } else if (arguments.length === 2) {
      const msg = arguments[0]; const pt = arguments[1]
      super(TopologyException.msgWithCoord(msg, pt))
      this.name = 'TopologyException'
      this.pt = new Coordinate(pt)
    } else {
      throw Error()
    }
  }

  getCoordinate () {
    return this.pt
  }

  get interfaces_ () {
    return []
  }

  getClass () {
    return TopologyException
  }

  static msgWithCoord (msg, pt) {
    if (pt !== null) return msg + ' [ ' + pt + ' ]'
    return msg
  }
}
