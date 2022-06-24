class Marker {
    constructor(color, percent, text) {
        this.color = color
        this.percent = percent
        this.text = text
    }
    set setText(text){
        this.text = text
    }
    textMarker(text){
        this.setText = text
        let pr = this.percent * 2, lol = 0, newText = Array.from(text)
        for(let i = 0; i<=pr; i++){
            if( newText[i] === ' '){
                pr++;
                lol++;
            }
        }
        newText.splice(this.percent * 2 + lol)
        let uncommas = newText.join(''), stringText = uncommas.toString(),
        rem = this.percent > (newText.length - lol) * 0.5 ? this.percent - (newText.length - lol) * 0.5 : 0
        document.body.insertAdjacentHTML('beforeend', `<div id="marker"><p style="font-size: 38px; color: ${this.color}">${stringText} <span style="color:green; font-size: 45px">| remainder: ${rem}%</span></p></div>`)
        this.percent = rem
    }
}

const t = new Marker('red', 12);
t.textMarker('sjf skq hf ka aa fgsga')
t.textMarker('fs ksfn slgkj sgk f')

const t2 = new Marker('blue', 22);
t2.textMarker('sskg slgj sg236')
t2.textMarker('fffff fff ff f f')
t2.textMarker('a a a a a a a')