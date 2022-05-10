class Medusa {
  constructor (name) {
    this.name = name
    this.statues = []
  }

  gazeAtVictim (victim) {
    var statue = new Statue(victim.name);
    this.statues.push(statue)

    if (this.statues.length > 3){
      var victim = this.statues.shift();
      var person = new Person(victim.name);
      // var person = new Person(this.statues.shift().name);
      person.mood = 'relieved'
      return person
    }
  }
}

var Person = require('./person');
var Statue = require('./statue');
module.exports = Medusa;
