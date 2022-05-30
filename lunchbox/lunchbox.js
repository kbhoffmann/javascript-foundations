class LunchBox {
  constructor (details) {
    this.owner = details.owner
    this.material = details.madeOf
    this.shape = details.shape
    this.color = details.color
    this.snacks = []
  }

  acquireSnack(snack) {
    this.snacks.push(snack)
    snack.isInLunchBox = true
  }

  findHealthySnacks () {
    var healthySnacks = []
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type)
      }
    }
    return healthySnacks
  }
}

module.exports = LunchBox;
