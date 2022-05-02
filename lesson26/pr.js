function uName(){
    const name = prompt('Ваше ім`я');
    alert('Привіт, ' +name);
}

function uAge(){
    const year = 2022;
    const userage = parseInt(prompt('Рік вашого народження'));
    const rez = year-userage;
    alert('Ваш вік: ' +rez);
}

function square(){
    const side = parseInt(prompt('Введіть сторону квадрату'));
    const p = side*4;
    alert('Периметр: ' +p);
}

function circle(){
    const r = parseInt(prompt('Введіть радіус'));
    const s = 3.14*r**2;
    alert('Площа: ' +s);
}

function sped(){
    const s = parseInt(prompt('Введіть відстань'));
    const t = parseInt(prompt('Введіть час'));
    const v = s/t;
    alert(`Швидкість: ${v} км/год`);
}

function USDinEUR(){
    const usd = parseInt(prompt('Введіть $$$-'));
    eurtousdt=0.95;
    let eur = usd*eurtousdt;
    alert(`EUR: ${eur}`);
}

function lastINfirst(){
    const num = parseInt(prompt('Введіть пятизначне число'));
    let last = num%10;
    let lastdel = (num/10)+(last*10000);
    alert(Math.floor(`${lastdel}`));
}

function salary(){
    const allmoney = parseInt(prompt('Введіть загальну суму продажів'));
    let salary = allmoney*0.1+250;
    alert((`ЗП=== ${salary}`));
}