//classes

//data modifiers
//public
//private
//protected

class Character {
  protected name?: string
  readonly strength: number
  skill: string

  constructor(name: string, strength: number, skill: string){
    this.name = name
    this.strength = strength
    this.skill = skill
  }

  attack(): void{
    console.log(`Attack with ${this.skill} by ${this.strength} points`)
  }
}

const c1 = new Character("Ryu", 10, "Hadouken")
c1.attack()

class Mage extends Character{
  magicPoints: number

  constructor(name: string, strength: number, skill: string, magicPoints: number){
    super(name, strength, skill)
    this.magicPoints = magicPoints
  }
}

const c2 = new Mage("Zeptos", 10, "Hadouken", 60)
c2.attack()
c2.strength
