function output(result, resID){
    document.getElementById(resID).innerHTML = result
}

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

function checkText(textID){
    let text = document.getElementById(textID).value
    if(text!==''){
        if(isNaN(text)){
            return text
        }else{
            return false
        }
    }else{
        return false
    }
}

let car = {
    'maker country': 'Italy',
    model: 'Ferrari',
    year: 2050,
    speed: 222,
    capasity: 68,
    'consumption /100km': 6.1,
    drivers: ['Olegg', 'Vasya'],
    refuel: 0
}


function task11() {
    let carDpl = '<ul>'
    for(let k in car){
        carDpl += '<li>'+'<span class="text-primary">'+k+'</span>'+': '+car[k]+'</li>'
    }
    output(carDpl, 'task_1_result')
}
    
function task12() {
    let text = (checkText('task_1_text') !== false) ? checkText(['task_1_text']) : false
    car.drivers.push(text)
    task11()
}

function task13(refuel) {
    refuel = (checkNumber('task_1_number') !== false && checkNumber('task_1_number') <= 68 && checkNumber('task_1_number') > 0) ? checkNumber('task_1_number') : (alert('Об`єм баку 68л'), refuel= 0)
    car.refuel = refuel
    task11()
}

function checkDrivers(nameID) {
    let name = (checkText(nameID) !== false) ? checkText(nameID) : false
    rez = car.drivers.filter(el => el === name)
    if(rez.length === 0){
        return false
    }else{
        return true
    }
}

function time(distance) {
    let d = (checkNumber(distance) !== false && checkNumber(distance) >0 ) ? checkNumber(distance) : false
    let t = d / car.speed, rez = 0, hr, min, chill = 0
    if(t<1){
        min = (t*60).toFixed(0)
        rez =min+' хв'
    } else{
         hr = ((t*60)/60 |0) 
         min = ((t-((t*60)/60 |0))*60).toFixed(0)
         chill = hr / 4 |0 
         rez = hr+chill+' год, '+min+' хв'
    } 
    return rez
}



function task14() {
    let refnow = car.refuel, max = 1115, distance = checkNumber('task_1_number2'), ref = distance/100*car["consumption /100km"]
    if(distance >= max){
        alert(`${max} - це максимум з повним баком`) 
        return
    }
    if(distance === false) { 
        alert('Введіть відстань!') 
        return
    }
    if(refnow < ref || refnow <= 0) { 
        alert('Дозаправ 🚗') 
        return distance === false
    }
    if(checkDrivers('task_1_text2') === true){
        true
    }else{
        alert('Такого водія немає')
        return
    } 
    let t = time('task_1_number2')
    output(t, 'task_1_result2')
}

//==================================================================================================//

const timE = {
    h: function(){
        let date = new Date()
        return date.getHours()
    }, 
    m: function(){
        let date = new Date()
        return date.getMinutes()
    },
    s: function(){
        let date = new Date()
        return date.getSeconds()
    },
    newh: function(h){
        let date = new Date()
        date.setHours(date.getHours() + h);
        return date.getHours()
    }, 
    newm: function(m){
        let date = new Date()
        date.setMinutes(date.getMinutes() + m);
        return date.getMinutes() 
    },
    news: function(s){
        let date = new Date()
        date.setSeconds(date.getSeconds() + s);
        return date.getSeconds() 
    },
}

function task21() {
    output(timE.h() +':'+timE.m()+':'+timE.s(), 'task_2_result')
}

function task22() {
    let h = (checkNumber('task_2_number1') !== false) ?  checkNumber('task_2_number1') : false
    let m = (checkNumber('task_2_number2') !== false) ?  checkNumber('task_2_number2') : false
    let s = (checkNumber('task_2_number3') !== false) ?  checkNumber('task_2_number3') : false
    output(timE.newh(h) +':'+timE.newm(m)+':'+timE.news(s), 'task_2_result')
}

//==================================================================================================//

const fraction = {
    res: {
        ch: 0,
        zn: 0
    },
    calculation(valIn, ch, zn){
        this[valIn]={
            ch: ch,
            zn: zn
        }
    },
    inc(){
        this.res.ch = this.value1.ch * this.value2.zn + this.value2.ch * this.value1.zn
        this.res.zn = this.value1.zn * this.value2.zn
    },
    dec(){
        this.res.ch = this.value1.ch * this.value2.zn - this.value2.ch * this.value1.zn
        this.res.zn = this.value1.zn * this.value2.zn
    },
    dision(){
        this.res.ch = this.value1.ch * this.value2.zn
        this.res.zn = this.value1.zn * this.value2.ch
    },
    miltiply(){
        this.res.ch = this.value1.ch * this.value2.ch
        this.res.zn = this.value1.zn * this.value2.zn
    },
    scor(valIn){
        let b = this[valIn].zn, 
            a = this[valIn].ch, 
            max = a > b ? a : b, 
            min = a < b ? a : b, 
            rez = 1
        for(let i = 1; i <= max; i++){
            if(a % i === 0 && b % i === 0){
                rez = i
            }
        }
        this[valIn].ch = a > b ? max / rez : min / rez
        this[valIn].zn = b < a ? min / rez : max / rez
    }
}

function task3() {
    
    let ch1 = checkNumber('task_3_number1') !== false ? checkNumber('task_3_number1') : false,
        zn1 = checkNumber('task_3_number2') !== false ? checkNumber('task_3_number2') : false,
        ch2 = checkNumber('task_3_number3') !== false ? checkNumber('task_3_number3') : false,
        zn2 = checkNumber('task_3_number4') !== false ? checkNumber('task_3_number4') : false,
        calc = document.getElementById('task_3_select').value
    fraction.calculation('value1', ch1, zn1)
    fraction.calculation('value2', ch2, zn2)
    fraction.scor('value1')
    fraction.scor('value2')
    calc === '+' ? fraction.inc() : calc === '-' ? fraction.dec() : calc === '/' ? fraction.dision() : calc === '*' ? fraction.miltiply() : false
    fraction.scor('res')
    let out = '<span>'+fraction.res.ch+'</span><p>_____</p><span>'+fraction.res.zn+'</span>'
    output(out, 'task_3_result')
}