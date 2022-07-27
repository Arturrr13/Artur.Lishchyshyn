<template>
    <section class="faq">
        <div class="section__wrapper">
            <h1>FAQ</h1>
            <h2>frequently asked question</h2>
            <div class="faq__wrapper">
                <div v-for="(item,index) in FAQdata" :key="index">
                    <div :class="`component--${index} components`">
                        <div class="text__wrapper">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.info }}</p>
                        </div>
                        <img src="../assets/image/FAQ/close.svg" alt="" class="close" @click="openClose(index, 1)">
                        <img src="../assets/image/FAQ/open.svg" alt="" class="open" @click="openClose(index, 0)">
                    </div>
                </div>
            </div>
        </div>
        <img src="../assets/image/FAQ/faq.png" class="faq__fon" alt="">
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            FAQdata: [],
            lastComponents: 0
        }
    },
    name: 'MyFAQ',
    created (){
        axios
        .get('data/FAQ.json')
        .then(res => {
            this.FAQdata = res.data
        })
    },
    methods: {
        openClose(number, status){
            let wrapperHeihgt = document.querySelector(`.component--${number}`).clientHeight
            document.querySelector(`.component--${number}`).classList.toggle('active')
            let wrapperHeihgtactive = document.querySelector(`.component--${number}`).clientHeight
            if(status === 0){
                document.querySelector(`.component--${number}`).animate([
                  { height: '100px', background: 'none'},
                  { height: `${wrapperHeihgtactive}px`, background: '#323532' }
                ], {
                  duration: 500
                })
                document.querySelector(`.component--${number} .text__wrapper`).animate([
                  { opacity: '0'},
                  { opacity: '1'}
                ], {
                    delay: 500,
                    duration: 500,
                    fill: 'both'
                })
            } else {
                document.querySelector(`.component--${number}`).animate([
                  { height: `${wrapperHeihgt}px`, background: '#323532'},
                  { height: `${wrapperHeihgtactive}px`, background: 'none' }
                ], {
                  duration: 500,
                })
            }
            this.lastComponents !== number ? document.querySelector(`.component--${this.lastComponents}`).classList.remove('active') : false
            this.lastComponents = number
        }
    }
}
</script>

<style lang="scss" scoped>
    section{
        padding: 100px 0;
        position: relative;
    }
    .section__wrapper{
        position: relative;
        z-index: 5;
    }

    .faq__fon{
        position: absolute;
        top: -153px;
        right: -149px;
        z-index: 1;
        max-width: 1180px;
    }

    h2{
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.055em;
        text-transform: uppercase;
    }

    h3{
        font-weight: 600;
        font-size: 22px;
        line-height: 140%;
        text-transform: uppercase;
        color: #FFFFFF;
        max-width: 650px;
    }

    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        text-align: justify;
        text-transform: capitalize;
        color: #FFFFFF;
        margin-top: 15px;
    }
    .faq__wrapper{
        max-width: 748px;
        .components{
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            p, .close{
                display: none;
            }
            .close, .open{
                width: 50px;
                height: 50px;
                margin-right: 25px;
            }
            .text__wrapper{
                padding: 25px;
            }
            img{
                filter: grayscale(1);
                transition: all .5s ease;
            }
            img:hover{
                cursor: pointer;
                filter: none;
                transform: scale(1.1);
            }
        }
        .active{
            display: flex;
            flex-direction: row;
            border-bottom: none;
            background: #323532;
            p, .close{
                display: block;
            }
            .open{
                display: none;
            }
        }
    }
</style>