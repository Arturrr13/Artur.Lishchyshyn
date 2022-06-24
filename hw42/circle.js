class Circle {
    constructor(r){
        this.r = r
    }
    get getR(){
        return this.r
    }
    set setR(newR){
        this.r = newR
    }
    get getD(){
        return this.r * 2
    }
    calcS(){
        let S = (Math.PI * Math.pow(this.r, 2)).toFixed(1)
        return S
    }
    calcL(){
        let L = (2 * Math.PI * this.r).toFixed(1)
        return L
    }
    output(){
        document.getElementById('circle').innerHTML = `<ul style="font-size: 40px"><li>D = ${this.getD}</li><li>S = ${this.calcS()}</li><li>L = ${this.calcL()}</li><li>R = ${this.r}</li></ul>`
    }
}

const r = new Circle(5);
r.output()

r.setR = 10
r.output()
