printLines();
//result: will execute even though it's called
//before it's declared, due to function hoisting

function printLines()
{
    console.log(secondLine);
    //result: undefined 
    //(not reference error, due to hoisting, but still 
    //undefined because assignment of value hasn't happended yet)

    var firstLine = "i'm your first line";
    console.log(firstLine);
    //result: i'm your first line

    var secondLine = "i'm your second line";
    console.log(secondLine);
    //result: i'm your second line
}

//printLines2();
//reference error, bcs function expressions are not hoisted
//only function declarations

const printLines2 = function()
{
    //console.log(secondLine);
    //result: reference error, let variables hoisted but NOT initialised (var variables are hoisted and initialised to "undefined")

    let firstLine = "i'm your first line";
    console.log(firstLine);
    //result: i'm your first line

    let secondLine = "i'm your second line";
    console.log(secondLine);
    //result: i'm your second line
}

printLines2();
//exectues; can call function expression only after it


const madeOfGlass = function()
{
    let thing = "window";
    thing = "glass";
    console.log(thing);
    //result: glass, because let allows reassignment, unlike const
    //if thing were const -> type error, invalid assignment
}

madeOfGlass();


let arr1 = [6.7, "presto", "presto", 6.7, "ok"];
let arr2 = new Array(2, "hi", 6.7);

let arrayMachine = function(a1, a2)
{
    let finalArray = a1.concat(a2);

    //complexity O(n^2)
    /*
    for (let i in finalArray)
    {
        for (let j in finalArray)
        {
            if (i != j && finalArray[i] === finalArray[j])
            {
                finalArray.splice(j, 1);
                //starting at index j, delete one item
            }
        }
    }
    */

    //complexity O(n log n) + O(n), so O(n log n)
    //but not using this method because it already sorts
    //the array, contrary to the requirement in the task
    /*
    finalArray.sort();
    for (let i = 0; i < finalArray.length; i++)
    {
        if (finalArray[i] === finalArray[i+1])
        {
            finalArray.splice(i+1,1);

            --i; 
            //it is necessary to repeat the current iteration
            //each time we delete, in case there is another duplicate
            //of the item we are currently looking at behind the just deleted item,
            //because that duplicate will be now shifted forward so we need to check 
            //for it too, like in case with 6.7, 6.7, 6.7
        }
    }
    */

    //here i used the third way - convert the array to set
    //(eliminates duplicates) then back to array
    finalArray = new Set(finalArray);

    //finalArray = Array.from(finalArray);
    //also possible using spread operator:
    finalArray = [...finalArray];

    console.log(finalArray);
    console.log(finalArray.sort());
    console.log(finalArray.reverse());
}

arrayMachine(arr1, arr2);
