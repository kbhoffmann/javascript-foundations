class Settler {
  constructor (details){
    this.name = details.name
    this.age = details.age
    this.nationality = details.nationality ||  "unknown"
    this.status = 'healthy'
    this.ailments = []
  }

  experienceDistress (ailment) {
    if (this.status != 'dead') {
      this.ailments.push(ailment)
    }

    if (this.status === 'healthy') {
      this.status = 'fair'
    } else if (this.status === 'fair') {
      this.status = 'poor'
    } else {
      this.status = 'dead'
    }
  }

  heal () {
    if (this.status != 'dead') {
      this.ailments = []
      this.status = 'healthy'
    } else {
      return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`
    }
  }
}

module.exports = Settler
