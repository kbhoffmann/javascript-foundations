class Skater {
  constructor(details) {
    this.name = details.name
    this.skill = details.skill
    this.tricks = details.tricks
    this.money = details.cash
    this.frustration = 0
  }

  practice(trick) {
    if (!this.tricks[trick]) {
      ++this.frustration
    }

    if (this.frustration === 3) {
      this.tricks[trick] = true
      this.frustration = 0
      return `I just learned to ${trick}!!!`
    }
  }
}

module.exports = Skater
