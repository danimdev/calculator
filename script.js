let textField = document.getElementById("calc-field");

let val1 = 0;
let val2 = 0;
let operator = "";
let result = 0;

let isChoosingVal1 = true;
let isChoosingOperator = false;
let isChoosingVal2 = false;
let isChoosedOperator = false;


function giveData()
{
    console.log("val1 = " + val1 + "\n" + "val2 = " + val2 + "\n" + "operator = " + operator + "\n" + "result = " + result  );
}

function calculate(value1, value2, oper)
{

    if(oper == "+")
        return value1 + value2;
    else if(oper == "-")
        return value1 - value2;
    else if(oper == "/")
        return value1 / value2;
    else if(oper == "*")
        return value1 * value2;
}

function operatorchoosement(oper)
{
    if(isChoosingVal1){
        val1 = parseInt(textField.innerHTML);
        isChoosingVal1 = false;
        isChoosingVal2 = true;
    }

    if(!isChoosingOperator){
        textField.innerHTML = oper;
        operator = oper;
        isChoosingOperator = true;
        isChoosedOperator = true;
    }

    giveData();
}

function printnumber(num)
{
    if(isChoosingOperator){
        if(isChoosedOperator){
        textField.innerHTML = "";
        isChoosedOperator = false;
        }
    }

    textField.innerHTML += num;

    giveData();
}

function isClicked(id)
{
    if(id == "nine")
    {
        printnumber("9");
    }
    else if(id == "eight")
    {
        printnumber("8");
    }
    else if(id == "seven")
    {
        printnumber("7");
    }
    else if(id == "six")
    {
        printnumber("6");
    }
    else if(id == "five")
    {
        printnumber("5");
    }
    else if(id == "four")
    {
        printnumber("4");
    }
    else if(id == "three")
    {
        printnumber("3");
    }
    else if(id == "two")
    {
        printnumber("2");
    }
    else if(id == "one")
    {
        printnumber("1");
    }
    else if(id == "zero-button")
    {
        printnumber("0");
    }
    else if(id == "clear")
    {
        textField.innerHTML = "";
        isChoosingVal1 = true;
        isChoosingVal2 = false;
        isChoosingOperator = false;
        val1 = 0;
        val2 = 0;
        operator = "";
    }
    else if(id == "plus")
    {
        operatorchoosement("+");
    }
    else if(id == "minus")
    {
        operatorchoosement("-");
    }
    else if(id == "divide")
    {
        operatorchoosement("/");
    }
    else if(id == "multiply")
    {        
        operatorchoosement("*");
    }
    else if(id == "equal")
    {

        if(isChoosingVal2 && isChoosingOperator){
            val2 = parseInt(textField.innerHTML);
        }

        textField.innerHTML = "";
        textField.innerHTML = calculate(val1,val2,operator);

        giveData();

        val1 = parseInt(textField.innerHTML);

        isChoosingOperator = false;
        isChoosedOperator = false;
    }
}