class Gear {
  constructor (type, quantity) {
    this.type = type
    this.quantity = quantity
  }

  checkForValidity() {
    if (this.type === 'mp3 player') {
      this.type = null 
      return 'I don\'t think a mp3 player will help us.'
    }
    return `Great, we\'ll need lots of ${this.type}!`
  }
}

module.exports = Gear;
