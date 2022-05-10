class Sphinx {
  constructor() {
    this.riddles = []
    this.heroesEaten = 0
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length == 4) {
      this.riddles.shift()
    }
    return this.riddles
  }

  attemptAnswer(answer) {
    for (let i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer) {
        this.riddles.splice(i, 1);
        if (this.riddles.length == 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
        } else {
          return 'That wasn\'t that hard, I bet you don\'t get the next one';
        }
      }
    }
    this.heroesEaten++;
  }
}

module.exports = Sphinx;


//   return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
