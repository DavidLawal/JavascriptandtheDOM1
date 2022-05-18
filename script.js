//Design a for loop that returns an array of even numbers from 1-100

var array = [];
for (let i = 1; i < 100; i++){
    if (i % 2 === 0) {
    array.push(i)
    console.log(array)
 }
}

//Create a function that returns even numbers between two numbers A and B

function evenNumbers (a,b){
    for (let i = a; i < b; i++){
        if (i % 2 === 0){
        console.log(i)
        }
    }
}
evenNumbers (2,100)

/*When would you use a conditional statement? (a)when you want to reuse a set of statements multiple times
 (b)when you want your code to choose between multiple numbers
 © when you want to group data together (d) when you want to loop through a group of statements.*/

(d) 

 //Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)

 function firstFunction(){
     let a = 100;
     let b = 200;
     let c = a + b;
     console.log(c)
}
firstFunction()

// Create a function with a function name printSum( ) and print the sum of two numbers

function printSum(){
    var x = 500;
    var y = 1000;
    var z = x + y;
    console.log(z)
}
printSum()

//Create a function that returns an array of the names of 10 of your course mates

const names =['david', 'tobi', 'segun', 'yemi', 'abosede', 'bukola','chef kiki', 'pipeloluwa','ransome',
'dolapo'] 
function returnNames(){
    var courseMates = [];
    for (i = 0; i < names.length; i++) {
     courseMates.push(names[i])
    }
    console.log (courseMates)
}
returnNames()

//Answer the following:
 //Add an element to the end of this array [1,2,4]

 let numbers = [1,2,4]
 numbers.push(10)
 console.log (numbers);

//Remove the last element in this array [1,2,3,8]

let numbers1 = [1,2,3,8]
numbers1.pop()
console.log(numbers1);

//Remove the first element in this array [23.77,80,45]

let numbers2 = [23.77,80,45]
numbers2.shift()
console.log(numbers2)

//Add an element to the beginning of the array [[20,30,80],[10,50,55]]

let numbers3 = [[20,30,80],[10,50,55]]
//numbers3.unshift(50)
numbers3[0].unshift(50)
console.log(numbers3)
