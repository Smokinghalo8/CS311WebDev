
let inputField = document.getElementById("inputText")
let errorField = document.getElementById("ErrorPlace")

let numberOfNumbers =0

let inputFieldText = inputField.innerHTML

function checkPassword(){
    if(inputFieldText.length <=7){
        errorField.innerHTML = "Password not long enough!"
    } else{
        errorField.innerHTML = "Password is like 90% right"
    }

}


function checkStringForNumbers(string){
    for(i=0;i<inputFieldText;i++){
        if(inputFieldText[i]==0 ||inputFieldText[i]==1 || inputFieldText[i]==2 || inputFieldText[i]==3 || inputFieldText[i]==4 || inputFieldText[i]==5 || inputFieldText[i]==6 || inputFieldText[i]==7 || inputFieldText[i]==8 || inputFieldText[i]==9){
            numberOfNumbers+=1
        }
        if(numberOfNumbers<=0){
            errorField.innerHTML = "Need at least 1 Number inside Password!"
        }
    }
    return numberOfNumbers
    
}