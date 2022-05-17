function checkNumber(numberID){
    let number = document.getElementById(numberID).value
    if(number!==''){
        number=parseInt(number)
        if(!isNaN(number)){
            return number
        }else{
            return false
        }
    }else{
        return false
    }
}

function output(result, resID){
    document.getElementById(resID).innerHTML = result
}

function task1(){
    let  num1, num2, result
    if(checkNumber('task_1_number1') !== false){
        num1 = checkNumber('task_1_number1')
    }
    if(checkNumber('task_1_number2') !== false){
        num2 = checkNumber('task_1_number2')
    }
        if(num1 > num2){
            result = 1
        } 
        if(num1 < num2){
            result = -1
        }
        if(num1 === num2){
            result = 0
        }
    output(result, 'task_1_result')
}

function task2(number){
    let i=1, result=1
    if(checkNumber('task_2_number') !== false){
        number = checkNumber('task_2_number')
    }
    while (i<=number) {
        result *= i 
        i++
    }
    output(result, 'task_2_result')
}

function task3(a, b, c){
    let result=0
    if(checkNumber('task_3_number1') !== false){
        a = checkNumber('task_3_number1')
    }
    if(checkNumber('task_3_number2') !== false){
        b = checkNumber('task_3_number2')
    }
    if(checkNumber('task_3_number3') !== false){
        c = checkNumber('task_3_number3')
    }
    result = a*100+b*10+c
    output(result, 'task_3_result')
}

function task4(a, b){
    let result=0
    a = (checkNumber('task_4_number1') !== false) ? checkNumber('task_4_number1') : false
    b = (checkNumber('task_4_number2') !== false) ? checkNumber('task_4_number2') : false
    result = (a !== false && b !== false) ? a*b : (a === false || b !== false) ? b*b : a*a
    output(result, 'task_4_result')
}

const division = a =>{
    let i = 0, d = 0
        while(i<a){
            d = (a%i === 0) ? d+=i : d+=0
            i++
        }
    return d;
}

function task5(num){
    let rez
    num = (checkNumber('task_5_number') !== false) ? checkNumber('task_5_number') : false;
    rez = (division(num) === num) ? 'Досконале' : 'НЕ досконале'

    output( rez, 'task_5_result')
}

function task6(num1, num2) {
    num1 = (checkNumber('task_6_number1') !== false) ? checkNumber('task_6_number1') : false
    num2 = (checkNumber('task_6_number2') !== false) ? checkNumber('task_6_number2') : false
    const max = (num1 > num2) ? num1 : num2
    const min = (num1 < num2) ? num1 : num2
    let rez = ''
    for(let i = min; i <= max; i++) {
        rez = (division(i) === i) ? rez += i+' ' : rez+=''
    }

    output( rez, 'task_6_result')
}


