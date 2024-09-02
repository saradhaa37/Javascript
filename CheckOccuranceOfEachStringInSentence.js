const test='the quick brown fox jumps over the lazy dog jumps over the fence';

const testArr=test.split(" ")

let testMap=new Map()

let wordCount=0

for(let i=0;i<testArr.length;i++)
    {
        for(let j=i+1;j<testArr.length;j++)
        {
            if(testArr[i]===testArr[j])
            {
                
                wordCount=wordCount+1
                testArr.splice(j,1)
            }
        }
        testMap.set(testArr[i],wordCount>=1?wordCount+1:1)
        wordCount=0
    }

console.log(testMap)
