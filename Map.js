let person=new Map()

person.set('Name','Sara')
person.set('Location','chennai')
person.set('Age',30)
person.set('Married',false)

console.log(person)

console.log(person.size)

//check for particular key
console.log(person.has('name'))

//delete particular element
person.delete('name')

console.log(person)

console.log(person.size)

console.log(person.has('name'))

console.log()

person.set('location','London')

console.log(person)

//print custom print of map
person.forEach((key,value)=>console.log(value,key))
