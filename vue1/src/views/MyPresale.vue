<template>
    <section class="presale">
        <div class="blur__on__responsive"></div>
        <div class="section__wrapper">
            <div class="text__box">
                <h1>Presale</h1>
                <span>
                    We plan to conduct the presale of our token in Q1 2022.
                </span>
                <ul>
                    <span>The details are as given below:</span>
                    <li>Token presale price - </li>
                    <li>Discount you get in presale - </li>
                    <li>Total number of whitelist spots </li>
                </ul>
                <span class="subtext">There are only two slabs available for buy. 0.5 BNB or 1 BNB.</span>
            </div>
            <form action="#" method="post" @submit.prevent="checkingForm">
                <div class="input-wrapper">
                    <input type="text" placeholder="E-mail" title="Enter your E-mail" ref="email" @blur.prevent="checkingEmail">
                    <input type="number" placeholder="Desired Invesment amount" title="Enter investment amount" ref="number" @blur.prevent="checkingNumber">
                    <input type="text" placeholder="Twitter ID" title="Enter your Twitter ID" id="twitterID" @blur.prevent="checkingIdAndCountry('twitterID')">
                    <input type="text" placeholder="Telegram ID" title="Enter your Telegram ID" id="telegramID" @blur.prevent="checkingIdAndCountry('telegramID')">
                </div>
                <input type="text" placeholder="BEP20 Address to receive UCF" title="Enter your BEP20 Address" ref="bep20" @blur.prevent="checkingBEP">
                <input type="text" placeholder="Country of residence" title="Enter your country of residence" id="country" @blur.prevent="checkingIdAndCountry('country')">
                <input type="text" placeholder="Link to tweet" title="Enter your link to tweet" id="tweet" @blur.prevent="checkingURL('tweet')">
                <input type="text" placeholder="Link to LinkedIn post" title="Enter your link to LinkedIn post" id="linkedID" @blur.prevent="checkingURL('linkedID')">
                <button type="submit" title="Submit" id="click">submit</button>
            </form>

            <div class="message" v-bind:style="styleObject">
                <span>{{ textMessage }}</span>
            </div>
        </div>
        <img src="../assets/image/6.png" alt="">
    </section>
</template>



<script>
export default {
    data() {
        return {
            styleObject: {
              background: '',
              display: 'none'
            },
            BOT_API_ID: '5572284297:AAGcIYixFO0cFESbgoNVYlsHlEsSf5vDcpU',
            CHAT_ID: '-1001798307154',
            email: '',
            amount: '',
            twitterID: '',
            telegramID: '',
            country: '',
            bep20: '',
            urlTweet: '',
            urlLinked: '',
            textMessage: '',
            userData: []
        }
    },
    name: 'MyPresale',
    mounted(){
        if(localStorage.length !== 0){
            this.userData = JSON.parse(localStorage.getItem('UserData'))
            if(this.userData.length !== 0){
                this.$refs.email.value = this.userData[0]
                this.$refs.number.value = this.userData[1]
                this.$refs.bep20.value = this.userData[2]
                document.getElementById('twitterID').value = this.userData[3]
                document.getElementById('telegramID').value = this.userData[4]
                document.getElementById('country').value = this.userData[5]
                document.getElementById('tweet').value = this.userData[6]
                document.getElementById('linkedID').value = this.userData[7]
            }
        }
    },
    methods: {
        checkingEmail() {
            let email = this.$refs.email.value
            if(email.length > 0 && Boolean(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) !== false) {
                this.$refs.email.style.border = 'none'
                this.styleObject.display = 'none'
                this.email = email
            } else {
                this.$refs.email.style.border = '1px solid red'
                this.message('incorrect E-mail', false)
                return false
            }
        },
        checkingNumber() {
            let number = this.$refs.number.value
            if(number !== '' && number > 0) {
               this.$refs.number.style.border = 'none'
               this.styleObject.display = 'none'
               this.amount = number 
            } else {
               this.$refs.number.style.border = '1px solid red'
               this.message('incorrect investment amount', false)
               return false
            }
        },
        checkingBEP() {
            let bep20 = this.$refs.bep20.value, checkBEP = /^[A-Za-z 0-9]+$/
            if(checkBEP.test(bep20) !== false && bep20.match(/[0-9]/) !== false && bep20.length > 0 ){
               this.$refs.bep20.style.border = 'none'
               this.styleObject.display = 'none'
               this.bep20 = bep20
            } else {
               this.$refs.bep20.style.border = '1px solid red'
               this.message('incorrect BEP20 Address', false)
               return false
            }
        },
        checkingURL(el) {
            let url = document.getElementById(el).value,
                pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            if(pattern.test(url) !== false){
                document.getElementById(el).style.border = 'none'
                this.styleObject.display = 'none'
                el === 'tweet' ? this.urlTweet = url : this.urlLinked = url
            } else {
               document.getElementById(el).style.border = '1px solid red'
               this.message('incorrect '+el, false)
               return false
            }
        },
        checkingIdAndCountry(el) {
            let idORcountry = document.getElementById(el).value
            if(idORcountry !== ''){
                document.getElementById(el).style.border = 'none'
                this.styleObject.display = 'none'
                if(el === 'twitterID'){
                    this.twitterID = idORcountry
                 } else if(el === 'telegramID'){
                    this.telegramID = idORcountry
                 } else {
                    this.country = idORcountry
                 }
            } else {
               document.getElementById(el).style.border = '1px solid red'
               this.message('incorrect '+el, false)
               return false
            }
        },
        formSubmit() {
            const text_form = "<i>Form data</i>"+
            "%0a<b>Email: </b>"+this.email+
            "%0a<b>Amount: </b>"+this.amount+
            "%0a<b>TwitterID: </b>"+this.twitterID+
            "%0a<b>TelegramID: </b>"+this.telegramID+
            "%0a<b>BEP20: </b>"+this.bep20+
            "%0a<b>Country: </b>"+this.country+
            "%0a<b>URLTweet: </b>"+this.urlTweet+
            "%0a<b>URLLinked: </b>"+this.urlLinked
            fetch(`https://api.telegram.org/bot${this.BOT_API_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${text_form}&parse_mode=HTML`)
        },
        checkingForm() {
            if(this.checkingEmail() !== false && this.checkingNumber() !== false && this.checkingIdAndCountry('twitterID') !== false && this.checkingIdAndCountry('telegramID') !== false && this.checkingBEP() !== false && this.checkingIdAndCountry('country') !== false && this.checkingURL('tweet') !== false && this.checkingURL('linkedID') !== false){
                this.message('form submitted successfully', true)
                this.formSubmit()
                this.localStorage()
            }
        },
        message(text, status) {
            if( status === true) {
                this.styleObject.background = 'rgba(11, 199, 4, 0.81)'
                this.styleObject.display = 'flex'
                this.textMessage = text
            } else {
                this.styleObject.background = 'rgb(255 0 0 / 81%)'
                this.styleObject.display = 'flex'
                this.textMessage = text
            }
            setTimeout(() => {
                this.styleObject.display = 'none'
            }, 3000)
        },
        localStorage(){
            this.userData.splice(0, 8, this.email, this.amount, this.twitterID, this.telegramID, this.country, this.bep20, this.urlTweet, this.urlLinked)
            localStorage.setItem('UserData', JSON.stringify(this.userData))
        }
    }
}
</script>

<style lang="scss" scoped>
    section{
        position: relative;
        .section__wrapper{
            padding: 107px 0 107px 0;
        }
        img{
            position: absolute;
            top: 0;
            right: 0;
            max-width: 832px;
        }
    }

    input[type=text],
    input[type=number]{
        height: 57px;
        border: none;
        min-width: 268px;
        background: #0F100F;
        border-radius: 5px;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: capitalize;
        color: #FFFFFF;
        padding: 15px;
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
    }
    .input-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 22px;
        margin-bottom: 12px;
        input[type=number],
        input[type=text]{
            margin-top: 10px;
        }
    }

    form{
        max-width: 560px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-top: 22px;
        button{
            width: 310px;
            height: 54px;
            background: #555457;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.11em;
            text-transform: uppercase;
            color: #FFFFFF;
            border: none;
        }
    }
    span, li, .subtext{
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.1em;
    }

    ul{
        margin: 32px 0;
        li{
            list-style:inside;
            font-size: 16px;
            line-height: 18px;
            margin-left: 10px;
        }
        li:nth-child(2) {
            padding-top: 15px;
        }
    }
    .subtext{
        font-size: 16px;
        line-height: 18px;
    }
    .message{
        width: 335px;
        height: 57px;
        position: absolute;
        top: 94%;
        right: 1%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        animation: messageAnimation .5s linear both;
        span{
            font-size: 18px;
            text-transform: uppercase;
            font-weight: 600;
            font-style: italic;
            padding: 0 10px;
            text-align: center;
        }
    }

    @keyframes messageAnimation {
        0%{transform: translateX(200px);}
        100%{transform: translateX(0);}
    }
</style>