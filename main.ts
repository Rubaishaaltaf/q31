// Creating a Array with 5 Values
let userNames = ["Rubaisha", "Rubab", "Altaf", "Admin", "Farwa"]

// Remove all values from on Array Now our Array is empty
userNames = []

// If statement for checking lenght of our Array is empty?
if(userNames.length === 0){
    console.log("Your Array in Empty We need to find some users!")
}else{
    // Using ForEach Loop on Array
    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log('Hello ${oneUser}, would you like to see a status report?')
    }else{
        console.log('Hello ${oneUser}, thank you for logging in again.')
    }
})
}