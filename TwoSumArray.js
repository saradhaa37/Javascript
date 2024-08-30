let arr = [1,2,3,4,6,7,8,9] ; sum = 9

let arrayList=[]

function twoSum(arr,sum,callback)
{
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if((arr[i]+arr[j])==sum)
        (arrayList.push([arr[i],arr[j]]))
    }
}
callback()
}

twoSum(arr,9,function(){console.log(arrayList)})
