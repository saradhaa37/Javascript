let map=new Map()
map.set('name','sara')
map.set('location','chennai')
map.set('age',30)
map.set('Married',true)

console.log(map.size)

//Iterate map

map.forEach((value,key)=>console.log(value+" "+key))

map.delete('age')

console.log(map.size)

map.forEach((key,value)=>console.log(key+" "+value))

//modifying map

map.set('location','London')
//map['location']='London'
map.forEach((key,value)=>console.log(key+" "+value))
