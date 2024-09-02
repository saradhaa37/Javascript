//const { createRedirectInterceptor } = require("undici-types/interceptors")

let test="Army"

let testNew="Mary"

test=test.toLowerCase()

testNew=testNew.toLowerCase()

let isAnagram

function testAnagram()
{
Loop1:
for(let i=0;i<test.length;i++)
    {
    isAnagram=false
    Loop2:
    for(let j=0;j<testNew.length;j++)
        {
            if(test.charAt(i)==testNew.charAt(j))
            {
                isAnagram=true
                break Loop2
            }
        }
    if(!isAnagram)
    {
        console.log("Inside loop")
        break Loop1
    }
    }
}

if(test.length==testNew.length)
    testAnagram()
else
    isAnagram=false

if(isAnagram)
    console.log("Given variables are anagram")
else
    console.log("Not a anagram")
