class Direwolf {
  constructor (name, home = 'Beyond the Wall', size = 'Massive' ) {
    this.name = name
    this.home = home
    this.size = size
    this.huntsWhiteWalkers = true
    this.starksToProtect = []
  }

  protect (stark) {
    if (this.home == stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark)
      stark.safe = true }
      if (this.starksToProtect)
      this.huntsWhiteWalkers = false
  }

  leave(stark) {
    this.starksToProtect.splice(stark)
    stark.safe = false
  }
}

module.exports = Direwolf;


    // if (this.starksToProtect.length) {
    //   this.huntsWhiteWalkers = false;
    // } else {
    //   this.huntsWhiteWalkers = true;
    // }

    // if (this.starksToProtect.length == 0) {
    //   this.huntsWhiteWalkers = true
    // } else if (this.starksToProtect.length >=1 ) {
    //   this.huntsWhiteWalkers = false
    // }
