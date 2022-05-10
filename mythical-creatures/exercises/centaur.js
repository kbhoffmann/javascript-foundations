class Centaur {
  constructor(centaur) {
    this.name = centaur.name
    this.breed = centaur.type
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.crankyCounter = 0
  }

  shootBow () {
    if (this.cranky || this.layingDown) {
      return 'NO!'
    }
    ++this.crankyCounter

    if (this.crankyCounter >= 3) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }

    return 'Twang!!!'
  }

  run () {
    ++this.crankyCounter

    if (this.cranky || this.layingDown) {
      return 'NO!'
    }

    if (this.crankyCounter >= 3) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }

    return 'Clop clop clop clop!!!'
  }

  sleep () {
    if (this.standing) {
      return 'NO!'
    }
    else {
      this.cranky = false
      return 'ZZZZ'
    }
  }

  layDown () {
    this.layingDown = true
    this.standing = false
  }

  standUp () {
    this.layingDown = false
    this.standing = true
  }

  drinkPotion () {
    if (this.layingDown == true ) {
      return 'Not while I\'m laying down!' }
    else {
      this.cranky = false
    }
  }
}

module.exports = Centaur;
