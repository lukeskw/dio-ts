//decorators

// function showName(target: any){
//   console.log(target)
//   return target
// }

// @showName('test')
// class Employee {

// }

//class decorator
// function apiVersion(version: string){
//   return (target: any) => {
//     Object.assign(target.prototype, { __version: version })
//   }
// }
// @apiVersion("1.10")
// class Api{}

// const api = new Api()
// console.log(api.__version)


//attribute decorator
function minLength(length: number){
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => "test " + _value;
    const setter = (value: string) => {
      if (value.length < length){
        throw new Error (`Tamanho menor do que ${length}`)
      }
      _value = value;
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Api {
  @minLength(3)
  name: string

  constructor( name: string){
    this.name = name
  }
}

const api = new Api("produtos")
console.log(api.name)