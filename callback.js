function modifyArray(arr,callback)
{
    arr.push(100)
callback()
}

let arr=[1,2,3,4,5]
modifyArray(arr,function(){console.log("array has been modified",arr)})
