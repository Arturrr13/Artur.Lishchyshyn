const topPenal = {
    show: function(text, className){
        let penal = `<div id="top-penal" class="top-penal ${className}">${text}</div>`
        if(document.getElementById('top-penal') !== null){
            document.getElementById('top-penal').remove()
        }
        document.body.insertAdjacentHTML('afterbegin', penal)
        this.hide()
    },
    hide: function(){
        setTimeout(function(){
            if(document.getElementById('top-penal') !== null){
                document.getElementById('top-penal').remove()
            }
        }, 2000);
    },
    error: function(text){
        this.show(text, 'penal-error')
    },
    success: function(text){
        this.show(text, 'penal-success')
    },
    info: function(text){
        this.show(text, 'penal-info')
    }
}

function output(){
    let html = ''
    CART.sort((a, b) => Number(b.isBay) - Number(a.isBay))
    CART.forEach(product => {
        html += `
            <tr>
                <td>${product.name}</td>
                <td>${product.isBay ? `<span class="badge bg-success">Yes</span>` : `<span class="badge bg-danger">No</span>`}</td>
                <td>${product.qty}</td>
                <td>${product.price}</td>
                <td>${product.total}</td>
                <td>
                    <button type="button" class="btn btn-dark" onclick="changeStatus('${product.name}')">Change status</button>
                    <button type="button" class="btn btn-danger" onclick="prodDelete('${product.name}')">&times;</button>
                </td>
            </tr>
        `
    })
    document.getElementById('cart-tbody').innerHTML = html
    document.getElementById('total').innerHTML = total()
}

function prodDelete(name) {
    if(confirm('Delete product???')) {
        let index = CART.findIndex(el => el.name === name)
        CART.splice(index, 1)
        output()
        topPenal.info('Product deleted')
    }
}

function checkNumber(numberID){
    let number = document.getElementById(numberID).value
    if(number!==''){
        number=parseFloat(number)
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

const CART = []

function total() {
    let total = 0
    CART.forEach(el => total += el.total)
    return total
}

function changeStatus(name) {
    const index = CART.findIndex(el => el.name === name)
    CART[index].isBay = !CART[index].isBay 
    output()
    topPenal.info('Status change')
}

function sorting(){
    const sort = document.getElementById('sort').value
    if(sort === '>'){
        CART.sort((a, b) => b.price - a.price)
    }
    if(sort === '<'){
        CART.sort((a, b) => a.price - b.price)
    }
    if(sort === 'az'){
        CART.sort((a, b) => a.name.localeCompare(b.name))
    }
    if(sort === 'za'){
        CART.sort((a, b) => b.name.localeCompare(a.name))
    }
    checK()
}

let arrCheack = []

function checkStatus() {
    arrCheack = []
    CART.forEach(product => {
        if(product.isBay === true){
        arrCheack.push({
            name: product.name,
            price: product.price,
            qty: product.qty,
            total: product.total
        })
        } 
    })
}

function checK() {
    checkStatus()
    let html = '', total = 0
    arrCheack.forEach(product => {
            html += `
            <tr>
                <td>${product.name}</td>
                <td>${product.qty}</td>
                <td>${product.price}</td>
                <td>${product.total}</td>
            </tr>
        `
    })
    arrCheack.forEach(el => total += el.total)
    document.getElementById('totalCheack').innerHTML = total
    document.getElementById('result').innerHTML = html
}

function addToCART(name, qty, price) {
    if(CART.find(el => el.name === name) === undefined){
        CART.push({
            name: name,
            qty: qty,
            isBay: false,
            price: price,
            total: parseFloat((qty * price).toFixed(2))
        })
    } else {
       const productIndex = CART.findIndex(el => el.name === name), 
        newQty = CART[productIndex].qty + qty
        CART[productIndex].total = parseFloat((newQty * CART[productIndex].price).toFixed(2))
        CART[productIndex].qty = newQty
        topPenal.info('Product quantity add')
    }
    output()
}

function checkANDadd() {
    let name = checkText('name') !== false ? checkText('name') : topPenal.error('Incorrect name'),
    qty = document.getElementById('qty').value > 0 ? +document.getElementById('qty').value : topPenal.error('Incorrect quantity'),
    price = checkNumber('price') !== false && checkNumber('price') > 0 ? checkNumber('price').toFixed(2): topPenal.error('Incorrect price')
    if (name === undefined || qty === undefined || price === undefined){
        return
    }else if (name !== undefined && qty !== undefined && price !== undefined){
        topPenal.success('Product add')
        document.getElementById('name').value = ''
        document.getElementById('price').value = ''
        document.getElementById('qty').value = '1'
    } 
    addToCART(name, qty, price)
    total()
}