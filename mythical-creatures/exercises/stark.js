class Stark {
  constructor (stark) {
    this.name = stark.name
    this.safe = false

    if (!stark.area) {
      this.location = 'Winterfell'
    } else {
      this.location = stark.area
    }
  }

  sayHouseWords () {
    if (this.safe) {
      return 'The North Remembers'
    } else {
      return 'Winter is Coming'
    }
  }

  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, home)
    direwolf.home = this.location
    direwolf.protect(this)
    return direwolf
  }
}

const Direwolf = require('./direwolf');
module.exports = Stark;
