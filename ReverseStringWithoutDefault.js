let test="Hello"

let testLength=test.length

let newString=test.charAt(testLength-1)

testLength=testLength-2

while(testLength>=0)
{
    
    newString = newString+test.charAt(testLength)
    testLength--
}

console.log(newString)
