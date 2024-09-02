const person=
{
    Name : "sara",
    Location : "Chennai",
   Age : 30,
    Married : true,
    Employment : false
}

for(let property in person)
    if(person.hasOwnProperty(property))
        console.log(person[property])


Object.keys(person).forEach((key,value)=>console.log(key+" "+person[key]))

//Check for particular condition
//if age above 30 not eligible

Object.keys(person).forEach(
(key,value)=>
{
if(key==="Age")
    console.log(person[key]>=30?"Not Eligible":"eligible")
}
)
