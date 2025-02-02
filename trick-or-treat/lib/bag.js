class Bag {
  constructor () {
    this.empty = true
    this.count = 0
    this.candies = []
  }

  fill(candy) {
    this.candies.push(candy)
    ++this.count
  }

  contains(candy) {
    for (let i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === candy) {
        return true
      }
    }
    return false;
  }

  remove() {
    this.candies.pop()
  }
}

module.exports = Bag;
