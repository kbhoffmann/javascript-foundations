class Part {
  constructor (type) {
    this.type = type
    this.broken = false
    this.breakCounter = 0
  }

  break () {
    this.broken = true
    this.breakCounter += 1
  }

  repair () {
    if (this.breakCounter < 2)  {
      this.broken = false
    }
    return `This ${this.type} has seen better days, we\'ll need a brand new one!`
  }
}

module.exports = Part;
