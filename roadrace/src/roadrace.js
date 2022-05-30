class Roadrace {
  constructor (details) {
    this.name = details.title
    this.location = details.city
    this.distance = 0
    this.participants = []
  }

  setDistance (miles) {
    this.distance += miles
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }

  registerParticipants (racer) {
    this.participants.push(racer)
    racer.completedRaces.push(this.name)
  }

  completeRace () {
    for (var i = 0; i < this.participants.length; i++) {
      var racer = this.participants[i] 
      racer.milesRun += this.distance
      racer.fitness += this.distance
    }
  }
}

module.exports = Roadrace;
