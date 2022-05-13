var Skier = require('./Skier');

class Lift {
  constructor (limit) {
    this.inService = true
    this.limit = limit
    this.skiers = []
    this.safetyBar = 'up'
  }

  admitSkier (name, ticket) {
    if (this.skiers.length < this.limit && ticket) {
      this.skiers.push(new Skier(name, ticket))
    }

    if (!ticket) {
      return `Sorry, ${name}. You need a lift ticket!`
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`
    }
  }

  startLift () {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down'
    } else if (this.limit - this.skiers.length == 1) {
      return `We still need 1 more skier!`
    } else {
      return `We still need ${this.limit - this.skiers.length} more skiers!`
    }
  }
}

module.exports = Lift;
