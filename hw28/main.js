function task1(){
    const add = (0.1+0.2);
    alert(add.toFixed(1));
}

function task2(){
    let num1 = "1+";
    let num2 = 2;
    alert(eval(num1 + num2));
}

function task3(){
    const gb = parseInt(prompt('Введіть розмір флешки в Гб:'));
    const mb = parseInt(gb*1000/820);
    alert(`К-ть файлів: ${mb}`);
}

function task4(){
    const money = prompt('Введіть ₴₴₴ в вашому гаманці:');
    const chocolate = prompt('Введіть ₴-шоколадки:');
    const numchoc = parseInt(money/chocolate);
    const rest = money%chocolate;
    alert(`К-ть шоколадок: ${numchoc}, здача: ${rest}`)
}

function task5(){
    const num = parseInt(prompt('Введіть трьохзначне число:'));
    const num1 = num%10;
    const num2 = parseInt(num/10%10);
    const num3 = parseInt(num/100);
    alert(`${num1}${num2}${num3}`);
}

function task6(){
    const money = parseInt(prompt('Введіть суму вкладу:'));
    const rez = money/100*.42;
    alert('Cумa нарахованих відсотків: ' +rez.toFixed(2));
}

function task7(){
    let num1 = prompt('Введіть число:');
    let num2 = prompt('Введіть число:');
    const max = ( num1 > num2 ) ? num1 : num2;
    // if( num1 > num2 ) {
    //     max = num1;
    // } else {
    //     max = num2;
    // }
    alert('Більше число: ' +max);
}

function task8(){
    const num = prompt('Введіть число:');
    const kr = num%5;
    const rez = (kr===0) ? 'Кратне' : 'Некратне';
    alert(rez);
}

function task9(){
    const num = prompt('Земля чи інше щось??');
    const rez = (num==='Земля'||num==='земля') ? 'Привіт, землянин' : 'Привіт, іншопланетянин';
    alert(rez);
}

function task10(){
    const age = parseInt(prompt('Введіть ваш вік:'));
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
    alert(rez)
}

function task11(){
    const num = prompt('Введіть цифру 0-9:');
    switch(num){
        case '1':
            rez = '!';
            break;
        case '2':
            rez = '@';
            break;
        case '3':
            rez = '#';
            break;
        case '4':
            rez = '$';
            break;
        case '5':
            rez = '%';
            break;
        case '6':
            rez = '^';
            break; 
        case '7':
            rez = '&';
            break; 
        case '8':
            rez = '*';
            break;
        case '9':
            rez = '(';
            break;
        case '0':
            rez = ')';
            break;
        default:
            rez = 'Введіть число ВІД 0-9!!!';
            break;
    }
    alert(rez);
}

function task12(){
    const num = parseInt(prompt('Введіть трьохзначне число:'));
    const num1 = num%10;
    const num2 = parseInt(num/10%10);
    const num3 = parseInt(num/100);
    if(num1 === num2 || num2 === num3 || num1 === num3){
        alert('Однакові цифри Є');
    } else{
        alert('Однакових цифр Немає');
    }
}

function task13(){
    const year = parseInt(prompt('Введіть рік:'));
    const rez = (year%4===0 && (year%400===0 || year%100!==0)) ? 'Високосний' : 'Не високосний';
    alert(rez);
}