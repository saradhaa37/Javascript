let firstString="Mary"
let secondString="Armyi"

let a=firstString.toLowerCase()
let b=secondString.toLowerCase()

let anagram=false

if(a.length==b.length)
    checkAnagram(callback,function()
{if(anagram)
        console.log("Strings are anagram")
    else
        console.log("Strings are not anagram")})
else
    console.log("Strings are not anagram")

function checkAnagram()
{
loop1:
for(let i=0;i<a.length;i++)
{
    loop2:
    for(let j=0;j<b.length;j++)
    {
        if(a.charAt(i)===b.charAt(j))
        {
            break loop2
        }
        if(j==b.length-1)
            break loop1

    }
    if(i==a.length-1)
        anagram=true
}
callback
}


