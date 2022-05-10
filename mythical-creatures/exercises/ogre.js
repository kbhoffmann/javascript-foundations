class Ogre {
  constructor(ogre) {
    this.name = ogre.name
    this.swings = 0

    if (!ogre.abode) {
      this.home = 'Swamp'
    } else {
      this.home = ogre.abode
    }
  }

  encounter(human) {
    ++human.encounterCounter

    if (human.noticesOgre() ) {
      ++this.swings

      if (this.swings == 2) {
        human.knockedOut = true
      }
    }
  }

  swingAt(human) {
    ++this.swings
  }

  apologize (human) {
    human.knockedOut = false
  }
}

module.exports = Ogre;
