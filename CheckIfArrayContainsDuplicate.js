let arrayString=['ram','sara','adi']

let containsDuplicate=false
loop1:
for(let i =0;i<arrayString.length;i++)
    loop2:
    for(let j=i+1;j<arrayString.length;j++)
    {
        if(arrayString[i]==arrayString[j])
        {
            containsDuplicate=true
            break loop1
        }
    }
    if(containsDuplicate)
        console.log("This array contains duplicate elements")
    else
        console.log("This array contains unique value")

