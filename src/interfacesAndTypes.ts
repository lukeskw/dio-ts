// type vs interface

type robotType = {
  id: number;
  name: string;
}

const bot: robotType = {
  id: 1,
  name: "megaman"
}


interface IRobot {
  readonly id: number;
  name: string;
  sayHello(): string;
}

const bot2: IRobot = {
  id: 1,
  name: "megaman",
  sayHello: function():string{
    return "Hello"
  }
}

class Robot implements IRobot {
  id: number;
  name: string;

  constructor(id: number, name: string){
    this.id = id
    this.name = name
  }
  sayHello(): string {
    return "Hello"
  }
}

const r = new Robot(1, "gutsman")
console.log(r.sayHello())