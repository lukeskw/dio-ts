//vars

//primitives: boolean, number, string
  const on: boolean = true;
  const value: number = 30;
  const valueFloat: number = 2.9;
  const username: string = "Luke";


//null / undefined

// const null:null = null;
// const undefined:undefined = undefined;

//object

const product:object = {
  name: "luke",
  city: "vr",
  age: 25
}

type StoreProductType = {
  name: string;
  price: number;
  units: number;
}

const storeProduct: StoreProductType = {
  name: "Quest 3",
  price: 500,
  units: 99
}

//arrays

const data: string[] = ["luke", "ana", "vanessa"]

const data2: Array<string> = ["luke", "ana", "vanessa"]

const infos: (string | number )[] = ["felipe", 30]
const infos2: Array<string | number> = ["felipe", 30]

//tuples

let bankSlip: [string, number, number] = ["water slip", 99.87, 253905991202104]

//dates

const birthday:Date = new Date("2022-12-01 05:00")
console.log(birthday.toString())
