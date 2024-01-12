function addNumber(x: number, y :number): number {
  return x + y;
}

let sum: number = addNumber( 4, 7)

console.log(sum)

function addToHello(name: string): string {
  return `Hello ${name}`
}

console.log(addToHello("Luke"))

//multi type functions

function callToPhone(phone: number | string) {
  return phone
}
console.log(callToPhone("2499988-7766"), callToPhone(24999887766))


//async functions

async function getDatabase(id: number): Promise<string>{
  return "luke"
}