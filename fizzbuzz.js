//fizz multiples of 3, buzz multiples of 5, fizzbuzz multiples of 3 and 5

for(let number=1;number<=100;number++)
{
    if(number%3==0 && number%5==0)
        console.log(number+" "+"fizzbuzz")
    else if(number%3==0)
        console.log(number+" "+"fizz")
    else if(number%5==0)
        console.log(number+" "+"buzz")
}
