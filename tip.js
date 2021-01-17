var tipMsg = document.getElementById('tipMsg')
var totalMsg = document.getElementById('total')
var result = document.getElementById('result')

//function to calculate tip per person and total amount per person
calculateTip = ()=> {
    //get all values and convert them to float 
    var amount = parseFloat(document.getElementById('amount').value)
    var tip = parseFloat(document.getElementById('tip').value)
    var people = parseFloat(document.getElementById('people').value)
   
    var err = document.getElementById('err') // to show erorr messages if any
    err.style.display = "block"
    
    try{
        // handling different test cases where error can happen
        if(isNaN(amount))
            throw "Please provide valid amount"
        if(isNaN(tip))
            throw "Pleas provide valid tip"
        if(amount >= Number.MAX_SAFE_INTEGER || tip >= Number.MAX_SAFE_INTEGER || people >= Number.MAX_SAFE_INTEGER)
            throw "Invalid Input"
        if(tip < 0 || people < 0 || amount < 0)
            throw "Please proivde positive value"
        if(!Number.isInteger(people))
            throw "Provide integer number of people"

        //calclate tip per person
        var tipPerPerson = (amount * tip) / people;
        tipPerPerson /= 100
        //fixing the number of digits to two after decimal
        tipPerPerson = tipPerPerson.toFixed(2);
        //insert tip per person to tip message to show on screen
        tipMsg.innerHTML = `$ ${tipPerPerson}`
        //converting again to float for further calculation which get
        //converted to string after toFixed function
        tipPerPerson = parseFloat(tipPerPerson)
        
        //now calculate total amount per person
        var total = (amount  /people) + tipPerPerson
        total = total.toFixed(2)
        
        //now showing the result on screen by making display as 'block'
        //which was initialy 'none'
        result.style.display = "block"
        totalMsg.innerHTML = `$ ${total}`
    } catch(e){
        //if catch an error then remove the result agian as there 
        //will not be any result 
        result.style.display = "none"
        err.innerHTML = e
        
        //after 4 second we are removing error messages 
        setTimeout(function() {
            err.innerHTML = "";
            err.style.display = "none"
        }, 4000);
    }
}

result.style.display = "none" //on page load dont show result div

document.getElementById("calculate").onclick =
 ()=>{
    calculateTip();
 }

 //after we press reset button remove the result 
 document.getElementById("reset").onclick = 
 ()=>{
    result.style.display = "none"
 }