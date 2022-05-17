function task1(){
    const age = parseInt(document.getElementById('task_1_number').value);
    let i =age;
    while(i<=age){
        if(age<12){
            rez = 'Дитина👼🏼';
        }else if(age>=12 && age<18){
            rez = 'Підліток🧑🏼';
        }else if(age>=18 && age<=60){
            rez = 'Дорослий👨🏼';
        }else if(age>60){
            rez = 'Пенсіонер👴🏼';
        }else{
            rez ='Введіть вік нормально!!!😒';
        }
    i++
    }
    document.getElementById('task_1_result').innerText = rez;
}

function task2(){
    const num = parseInt(document.getElementById('task_2_number').value);
    let i = num;
    while(i<=num){
        switch(num){
            case 1:
                rez = '!';
                break;
            case 2:
                rez = '@';
                break;
            case 3:
                rez = '#';
                break;
            case 4:
                rez = '$';
                break;
            case 5:
                rez = '%';
                break;
            case 6:
                rez = '^';
                break; 
            case 7:
                rez = '&';
                break; 
            case 8:
                rez = '*';
                break;
            case 9:
                rez = '(';
                break;
            case 0:
                rez = ')';
                break;
            default:
                rez = 'Введіть число ВІД 0-9!!!';
                break;
        }
    i++
    }
    document.getElementById('task_2_result').innerText = rez;
}

function task3(){
    const start = parseInt(document.getElementById('task_3_number--1').value);
    const finish = parseInt(document.getElementById('task_3_number--2').value);
    let i = start;
    let rez = 0;
    while(i<=finish){
        rez=rez+i;
    i++
    }
    document.getElementById('task_3_result').innerText = rez;
}

function task4(){
    let num1 = parseInt(document.getElementById('task_4_number--1').value)
    let num2 = parseInt(document.getElementById('task_4_number--2').value)
    const maxnum = (num1>num2) ? num1 : num2
    let i = 1
    while(i<=maxnum){
        if(num1%i===0 && num2%i===0){
            rez = i;
        }
    i++
    }
    document.getElementById('task_4_result').innerText = rez;
}

function task5(){
    let num = parseInt(document.getElementById('task_5_number').value)
    let rez=''
    let i = 1
    while(i<=num){
        if(num%i===0){
            rez += i+'; '
        }
    i++
    }
    document.getElementById('task_5_result').innerText = rez;
}

function task6(){
    let num = parseInt(document.getElementById('task_6_number').value)
    const last = num%10
    const first = parseInt(num/10000)
    const lastcenter = parseInt(num%100/10)
    const firstcenter = parseInt(num/1000-first*10)
    let i = 1
    while(i<=2){
        if(last===first && lastcenter===firstcenter){
            rez = 'Паліндром'
        }else{
            rez = 'НЕ Паліндром'
        }
    i++
    }
    document.getElementById('task_6_result').innerText = rez;
}

function task7(){
    let num = parseInt(document.getElementById('task_7_number').value)
    let i = 199
    while(i<=num){
        if(num>=200 && num<300){
            rez = '3%'
        }else if(num>=300 && num<500){
            rez = '5%'
        }else if(num>=500){
            rez = '7%'
        }else{
            rez = 'НІЯКИХ ЗНИЖОК!!!'
        }
    i++
    }
    document.getElementById('task_7_result').innerText = rez;
}

function task8(){
    let pl =0 ,
    mn = 0,
    zer = 0,
    pr = 0,
    npr = 0,
    num = 0,
    i = 0
    while(i<10){
        num = parseInt(prompt('Vvedit'))
        if(num!=0){
            if(num%2===0){
                pr++
            }else{
                npr++
            }
            if(num>0){
                pl++
            }else{
                mn++
            }
        }else{
            zer++
        }
    i++
    }
    rez = `Додатні: ${pl}, Від'ємні: ${mn}, Парні: ${pr}, Непарні: ${npr}, Нулі: ${zer}`
    document.getElementById('task_8_result').innerText = rez;
}

function task9(){
    let answer = true
    while(answer===true){
        answer = confirm('Понеділок. Хочеш побачити наступний день?')
        answer = confirm('Вівторок. Хочеш побачити наступний день?')
        answer = confirm('Середа. Хочеш побачити наступний день?')
        answer = confirm('Четверг. Хочеш побачити наступний день?')
        answer = confirm('П`ятниця. Хочеш побачити наступний день?')
        answer = confirm('Субота. Хочеш побачити наступний день?')
        answer = confirm('Неділя. Хочеш побачити наступний день?')
    }
}

function task10(){
    do{
        zap = confirm('Ваше число менше 50?')
        if(zap===true){
            zap = confirm('Ваше число менше 25?')
            if(zap===true){
                zap = confirm('Ваше число менше 12?')
                if(zap===true){
                    zap = confirm('Ваше число менше 6?')
                    if(zap===true){
                        zap = confirm('Ваше число менше 3?')
                        if(zap===true){
                            zap = confirm('Ваше число менше 2?')
                            if(zap===true){
                                rez = 1
                            }else{
                                rez = 2
                            }
                        }else{
                            zap = confirm('Ваше число більше 4?')
                                if(zap===true){
                                rez = 5
                            }zap = confirm('Ваше число 4?')
                            if(zap===true){
                                rez = 4
                            }else{
                                rez = 3
                            }
                        }
                    }else{
                        zap = confirm('Ваше число більше 9?')
                            if(zap===true){
                                zap = confirm('Ваше число більше 10?')
                                if(zap===true){
                                rez = 11
                                }
                        }else{
                            zap = confirm('Ваше число більше 7?')
                                if(zap===true){
                                    zap = confirm('Ваше число 8?')
                                    if(zap===true){
                                        rez = 9
                                    }else{
                                        rez = 8
                                    }
                            }zap = confirm('Ваше число 7?')
                            if(zap===true){
                                rez = 7
                            }else{
                                rez = 6
                            }
                        }
                    }
                }else{
                    zap = confirm('Ваше число більше 18?')
                    if(zap===true){
                        zap = confirm('Ваше число більше 21?')
                        if(zap===true){
                            zap = confirm('Ваше число більше 23?')
                            if(zap===true){
                                zap = confirm('Ваше число 24?')
                                if(zap===true){
                                rez = 24
                                }else{
                                    rez = 25
                                }
                            }else{
                                zap = confirm('Ваше число 23?')
                                if(zap===true){
                                rez = 23
                                }else{
                                    rez = 22
                                }
                            }
                        }else{
                            zap = confirm('Ваше число більше 19?')
                            if(zap===true){
                                zap = confirm('Ваше число 20?')
                                if(zap===true){
                                rez = 20
                                }else{
                                    rez = 21
                                }
                            }else{
                                zap = confirm('Ваше число 19?')
                                if(zap===true){
                                rez = 19
                                }
                            }
                        }
                    }else{
                        zap = confirm('Ваше число більше 15?')
                            if(zap===true){
                                zap = confirm('Ваше число більше 16?')
                                if(zap===true){
                                    zap = confirm('Ваше число 17?')
                                    if(zap===true){
                                    rez = 17
                                    }else{
                                        rez = 18
                                    }
                                }else{
                                    rez = 16
                                }
                            }else{
                                zap = confirm('Ваше число більше 13?')
                                if(zap===true){
                                    zap = confirm('Ваше число 15?')
                                    if(zap===true){
                                    rez = 15
                                    }else{
                                        rez = 14
                                    }
                                }else{
                                    zap = confirm('Ваше число 13?')
                                    if(zap===true){
                                    rez = 13
                                    }else{
                                        rez = 12
                                    }
                                }
                            }   
                    }
                }
            }else{
                zap = confirm('Ваше число більше 37?')
                if(zap===true){
                    zap = confirm('Ваше число більше 43?')
                    if(zap===true){
                        zap = confirm('Ваше число більше 46?')
                        if(zap===true){
                            zap = confirm('Ваше число більше 48?')
                            if(zap===true){
                            rez = 49
                            }else{
                                zap = confirm('Ваше число 47?')
                            if(zap===true){
                                rez = 47
                            }else{
                                rez = 48
                            }
                            }
                        }else{
                            zap = confirm('Ваше число більше 44?')
                            if(zap===true){
                                zap = confirm('Ваше число 45?')
                            if(zap===true){
                                rez = 45
                            }else{
                                rez = 46
                            }
                            }else{
                                rez = 44
                            }
                        }
                    }else{
                        rez = 44
                    }
                }else{
                    zap = confirm('Ваше число більше 31?')
                        if(zap===true){
                            zap = confirm('Ваше число більше 33?')
                                if(zap===true){
                                    zap = confirm('Ваше число більше 35?')
                                        if(zap===true){
                                            zap = confirm('Ваше число 36?')
                                                if(zap===true){
                                                    rez = 36
                                                }else{
                                                    rez = 37
                                                }
                                        }else{
                                            zap = confirm('Ваше число 34?')
                                                if(zap===true){
                                                    rez = 34
                                                }else{
                                                    rez = 35
                                                }
                                        }
                                }else{
                                    zap = confirm('Ваше число 33?')
                                        if(zap===true){
                                            rez = 33
                                        }else{
                                            rez = 32
                                        }
                                }
                        }else{
                            zap = confirm('Ваше число більше 27?')
                                if(zap===true){
                                    zap = confirm('Ваше число більше 29?')
                                        if(zap===true){
                                            zap = confirm('Ваше число 30?')
                                                if(zap===true){
                                                    rez = 30
                                                }else{
                                                    rez = 31
                                                }
                                        }else{
                                            zap = confirm('Ваше число 29?')
                                                if(zap===true){
                                                    rez = 29
                                                }else{
                                                    rez = 28
                                                }
                                        }
                                }else{
                                    zap = confirm('Ваше число більше 26?')
                                        if(zap===true){
                                            rez = 27
                                        }else{
                                            zap = confirm('Ваше число 26?')
                                                if(zap===true){
                                                    rez = 26
                                                }else{
                                                    rez = 25
                                                }
                                        }
                                }
                        }
                }
            }
        }else{
            zap = confirm('Ваше число більше 75?')
            if(zap===true){
                zap = confirm('Ваше число більше 88?')
                if(zap===true){
                    zap = confirm('Ваше число більше 94?')
                    if(zap===true){
                        zap = confirm('Ваше число більше 97?')
                        if(zap===true){
                            zap = confirm('Ваше число більше 98?')
                            if(zap===true){
                                rez = 99
                            }else{
                                rez = 98
                            }
                        }else{
                            zap = confirm('Ваше число більше 96?')
                                if(zap===true){
                                rez = 97
                            }zap = confirm('Ваше число 96?')
                            if(zap===true){
                                rez = 96
                            }else{
                                rez = 95
                            }
                        }
                    }else{
                        zap = confirm('Ваше число більше 92?')
                            if(zap===true){
                                zap = confirm('Ваше число більше 93?')
                                if(zap===true){
                                rez = 94
                                }else{
                                    rez = 93
                                }
                        }else{
                            zap = confirm('Ваше число більше 90?')
                                if(zap===true){
                                    zap = confirm('Ваше число 91?')
                                    if(zap===true){
                                        rez = 91
                                    }else{
                                        rez = 92
                                    }
                            }zap = confirm('Ваше число більше 89?')
                            if(zap===true){
                                rez = 90
                            }else{
                                zap = confirm('Ваше число 89?')
                                    if(zap===true){
                                        rez = 89
                                    }else{
                                        rez = 88
                                    }
                            }
                        }
                    }
                }else{
                    zap = confirm('Ваше число більше 82?')
                    if(zap===true){
                        zap = confirm('Ваше число більше 84?')
                        if(zap===true){
                            zap = confirm('Ваше число більше 86?')
                            if(zap===true){
                                zap = confirm('Ваше число 87?')
                                if(zap===true){
                                rez = 87
                                }else{
                                    rez = 88
                                }
                            }else{
                                zap = confirm('Ваше число 86?')
                                if(zap===true){
                                rez = 86
                                }else{
                                    rez = 85
                                }
                            }
                        }else{
                                zap = confirm('Ваше число 84?')
                                if(zap===true){
                                rez = 84
                                }else{
                                    rez = 83
                                }
                        }
                    }else{
                        zap = confirm('Ваше число більше 78?')
                            if(zap===true){
                                zap = confirm('Ваше число більше 80?')
                                if(zap===true){
                                    zap = confirm('Ваше число 81?')
                                    if(zap===true){
                                    rez = 81
                                    }else{
                                        rez = 82
                                    }
                                }else{
                                    zap = confirm('Ваше число 80?')
                                    if(zap===true){
                                    rez = 80
                                    }else{
                                        rez = 79
                                    }
                                }
                            }else{
                                zap = confirm('Ваше число більше 75?')
                                if(zap===true){
                                    zap = confirm('Ваше число більше 76?')
                                    if(zap===true){
                                        zap = confirm('Ваше число 77?')
                                        if(zap===true){
                                        rez = 77
                                        }else{
                                            rez = 78
                                        }
                                    }else{
                                        rez = 76
                                    }
                                }else{
                                    rez = 75
                                }
                            }   
                    }
                }
            }else{
                zap = confirm('Ваше число менше 63?')
                if(zap===true){
                    zap = confirm('Ваше число менше 57?')
                    if(zap===true){
                        zap = confirm('Ваше число менше 54?')
                        if(zap===true){
                            zap = confirm('Ваше число менше 52?')
                            if(zap===true){
                                zap = confirm('Ваше число 51?')
                                    if(zap===true){
                                        rez = 51
                                    }else{
                                        rez = 50
                                    }
                            }else{
                                zap = confirm('Ваше число 52?')
                                    if(zap===true){
                                        rez = 52
                                    }else{
                                        rez = 53
                                    }
                            }    
                        }else{
                            zap = confirm('Ваше число більше 55?')
                            if(zap===true){
                                rez = 56
                            }else{
                                zap = confirm('Ваше число 55?')
                                if(zap===true){
                                    rez = 55
                                }else{
                                    rez = 54
                                }
                            }
                        }
                    }else{
                        zap = confirm('Ваше число менше 60?')
                        if(zap===true){
                            zap = confirm('Ваше число менше 58?')
                            if(zap===true){
                            rez = 57
                            }else{
                                zap = confirm('Ваше число 58?')
                            if(zap===true){
                                rez = 58
                            }else{
                                rez = 59
                            }
                            }
                        }else{
                            zap = confirm('Ваше число менше 61?')
                            if(zap===true){
                            rez = 60
                            }else{
                                zap = confirm('Ваше число 61?')
                            if(zap===true){
                                rez = 61
                            }else{
                                rez = 62
                            }
                            }
                        }
                    }
                }else{
                    zap = confirm('Ваше число більше 69?')
                        if(zap===true){
                            zap = confirm('Ваше число більше 71?')
                                if(zap===true){
                                    zap = confirm('Ваше число більше 73?')
                                        if(zap===true){
                                            zap = confirm('Ваше число 74?')
                                                if(zap===true){
                                                    rez = 74
                                                }else{
                                                    rez = 75
                                                }
                                        }else{
                                            zap = confirm('Ваше число 73?')
                                                if(zap===true){
                                                    rez = 73
                                                }else{
                                                    rez = 72
                                                }
                                        }
                                }else{
                                    zap = confirm('Ваше число 71?')
                                        if(zap===true){
                                            rez = 71
                                        }else{
                                            rez = 70
                                        }
                                }
                        }else{
                            zap = confirm('Ваше число більше 64?')
                                if(zap===true){
                                    zap = confirm('Ваше число більше 66?')
                                        if(zap===true){
                                            zap = confirm('Ваше число 68?')
                                                if(zap===true){
                                                    rez = 68
                                                }else{
                                                    rez = 69
                                                }
                                        }else{
                                            zap = confirm('Ваше число 66?')
                                                if(zap===true){
                                                    rez = 66
                                                }else{
                                                    rez = 65
                                                }
                                        }
                                }else{
                                            zap = confirm('Ваше число 64?')
                                                if(zap===true){
                                                    rez = 64
                                                }else{
                                                    rez = 63
                                                }
                                }
                        }
                }
            }
        }
    }while(rez===0)
    document.getElementById('task_10_result').innerText = rez;
}

function task11(){
    let rez = '';
    for(let i=2; i<10; i++){
        for(let j=1; j<10; j++){
            rez += i+' * ' +j+ ' = ' + (i*j) + ' '
        }
    }
    document.getElementById('task_11_result').innerText = rez;
}

function task12(){
    let d = parseInt(prompt('Введіть день'))
    let m = parseInt(prompt('Введіть місяць'))
    let y = parseInt(prompt('Введіть рік'))
    let i = 0, rez = ''
    while(i<1){
        if((y%4===0 && (y%400===0 || y%100!==0)) && m===2 && d===29){
            d = 1
            m++
        }else if((y%4===0 && (y%400===0 || y%100!==0)) && m===2 && d===28){
            d++
        }else if((m===1 || m===3 || m===5 || m===7 || m===8 || m===10) && (d===31)){
            d = 1
            m++
        }else if((m===4 || m===6 || m===9 || m===11) && (d===30)){
            d = 1
            m++
        }else if(m===2 && d===28){
            d = 1
            m++
        }else if(m===12 && d===31){
            d = 1
            m = 1
            y++
        }else{
            d++
        }
    i++
    }
    rez = d+' : '+m+' : '+y
    document.getElementById('task_12_result').innerText = rez;
}