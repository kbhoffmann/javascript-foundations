class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`
    this.assistant = magician.assistant
    this.confidencePercentage = 10

    if (magician.clothing === undefined) {
      this.favoriteAccessory = 'top hat'
    } else {
      this.favoriteAccessory = magician.clothing
    }
  }

  performIncantation (phrase) {
    var lowerCase = `${phrase}!`;
    return lowerCase.toUpperCase();
  }

  performTrick() {
    this.confidencePercentage += 10
    if (this.favoriteAccessory == 'top hat') {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!'
      return 'Oh no, this trick is not ready!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician;
