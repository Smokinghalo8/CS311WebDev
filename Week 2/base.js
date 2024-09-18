

var myDiv = document.getElementById("example")
let tempDiv = document.getElementById("tempLambda")


/*
LAMBDA FUNCTIONS -<|>-
you could also replace function(){} with () => {} | if you wanted to not use the word "function"
*/
tempDiv.addEventListener("click", function(event){
    event.target.innerHTML = "cool."
    let exampleNew = document.createElement("a")
    exampleNew.innerText = "new anchor"
    event.currentTarget.appendChild(exampleNew)
})

myDiv.addEventListener("click", DoThing)

/*
Events handle any input from the user
*/



function DoThing(event){ //MUST specify that the function were making IS an event
    console.log(event.target) //event.target is used to get the target that youre interacting with
    console.log(event.target.dataset.secret) //if its an edge case / it doesnt work, try changing .target to .currentTarget
}


