const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, iure? Incidunt reiciendis nisi cumque voluptatum maiores tempore amet illum qui. Ipsum soluta debitis nemo veniam totam voluptates hic numquam fugiat? Saepe assumenda consequatur illum enim tenetur officia veniam harum laudantium. Distinctio quis provident esse sed excepturi eum harum earum quasi!'
const div = document.createElement('div')
const divText = document.createElement('div')
const divTrLights = document.createElement('div')
const green = document.createElement('div')
const yellow = document.createElement('div')
const red = document.createElement('div')
const Close = document.createElement('button')
const Open = document.createElement('button')
const changeColor = document.createElement('button')
const ol = document.createElement('ol')
const li = document.createElement('li')
const b = document.createElement('b')
const em = document.createElement('em')
var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }];

li.append(b)
li.append(em)

playList.forEach(el => {
    const clone = li.cloneNode(true)
    clone.children[0].innerText = el.author+' : '
    clone.children[1].innerText = el.song
    ol.append(clone)
    document.querySelector('.task1').append(ol)
})

const style = {
    div: {
        margin: '0 auto',
        background: 'white',
        zIndex: '1111',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0'
    },
    divText:{
        width: '400px',
        margin: '0 auto'
    },
    Close: {
        display: 'flex',
        marginTop: '10px',
    },
    divTrLights:{
        margin: '0 auto',
        marginTop: '50px',
    },
    green:{
        width: '50px',
        height: '50px',
        background: 'green',
        borderRadius: '50%'
    },
    yellow:{
        width: '50px',
        height: '50px',
        background: 'grey',
        borderRadius: '50%'
    },
    red:{
        width: '50px',
        height: '50px',
        background: 'grey',
        borderRadius: '50%'
    },
}
function addStyles(st, el) {
    for(let i in st){
        el.style[i] = st[i]
    }
}

addStyles(style.div, div)
addStyles(style.divText, divText)
addStyles(style.Close, Close)
addStyles(style.changeColor, changeColor)
addStyles(style.divTrLights, divTrLights)
addStyles(style.green, green)
addStyles(style.yellow, yellow)
addStyles(style.red, red)
document.querySelector('.task2').append(Open)
document.querySelector('.task2').append(div)
divText.innerText = text
div.style.display = 'none'
Close.innerText = 'Close'
Open.innerText = 'Open'

Open.onclick = function(){
    document.body.style.background = '#0000007d'
    Open.style.display = 'none'
    div.style.display = 'block'
    div.append(Close)
    div.append(divText)
}

Close.onclick = function(){
    Open.style.display = 'block'
    div.style.display = 'none'
    document.body.style.background = 'white'
}

document.querySelector('.task3').append(divTrLights)
document.querySelector('.task3').append(changeColor)
divTrLights.append(green)
divTrLights.append(yellow)
divTrLights.append(red)
changeColor.innerText = 'Change color'

changeColor.onclick = function(){
   if(yellow.style.background === 'grey' && red.style.background === 'grey'){
    yellow.style.background = 'yellow';
    green.style.background = 'grey'; 

   } else if(green.style.background === 'grey' && red.style.background === 'grey'){
    red.style.background = 'red'
    yellow.style.background = 'grey'

   }else if(green.style.background === 'grey' && yellow.style.background === 'grey'){
    green.style.background = 'green'
    red.style.background = 'grey'
   }  
}
