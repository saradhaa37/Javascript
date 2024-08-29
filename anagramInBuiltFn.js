let firstString="Mary"
let secondString="Army"

let a=firstString.toLowerCase()
let b=secondString.toLowerCase()
a=a.split("").sort().join()
b=b.split("").sort().join()

if(a===b)
    console.log("Strings are anagram")
else
    console.log("Strings are not anagram")

