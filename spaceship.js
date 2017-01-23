class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked, phasersCharge = 'uncharged') {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.crew.length > 0 ? this.docked = false : this.docked = true
    this.phasersCharge = phasersCharge
    this.setShipToCrew(this)
  }

  setShipToCrew(ship){
    this.crew.forEach(function(member){
      member.currentShip = ship
    })
  }
}
