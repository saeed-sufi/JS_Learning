const object = {
  45: "saeed",
  name: "hamid",
  null: 43,
  temp: undefined,
  do: null,
  NaN: NaN
}

console.log(object[45])
console.log(object['45'])
console.log(object['null'])
console.log(object.temp)
console.log(object.do)
console.log(object.NaN)
object["45"] = "ned"
console.log(object[45])
