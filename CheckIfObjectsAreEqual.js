const person={
Name : "Sara",
Age : 30
}

const testPerson={
Age : 30,
Name: "Sara"
}

let foundAttribute

Loop1:
for(let [key,value] of Object.entries(person))
{
    foundAttribute=false
    for(let [keyTest,valueTest] of Object.entries(testPerson))
    {
        if(key===keyTest && person[key]===testPerson[keyTest])
        {
            foundAttribute=true
        }
    }

    if(!foundAttribute)
    {
        console.log("Objects not equal")
        break Loop1
    }
}

if(foundAttribute)
    console.log("Atrributes are equal")

