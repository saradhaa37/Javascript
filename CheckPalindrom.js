let test="madam"

let length=test.length

let isPalindrome=true
const ceilLen=Math.floor(length/2)-1
let revLen=-1


function checkPalidrome(callback)
{
Loop1:
for(let i=0;i<=ceilLen;i++)
        if(!(test.charAt(i) === test.at(revLen)))
        {
            isPalindrome=false
            break Loop1
        }
        else
            revLen-=1
callback()
}

checkPalidrome(()=>
{
if(isPalindrome)
    console.log("This is palindrome")
else
    console.log("Not a palindrome")
})
